import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_REPO = "zexiro/maestro";
const INBOX_FILE = "inbox.json";

async function appendToGitHubInbox(entry: object) {
  try {
    const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${INBOX_FILE}`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, "User-Agent": "Maestro" },
    });
    const fileData = await getRes.json() as { content: string; sha: string };
    const current: object[] = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf8"));

    current.push(entry);

    const newContent = Buffer.from(JSON.stringify(current, null, 2)).toString("base64");
    await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${INBOX_FILE}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Maestro",
      },
      body: JSON.stringify({
        message: `inbound: reply from ${(entry as { from: string }).from}`,
        content: newContent,
        sha: fileData.sha,
      }),
    });
  } catch (err) {
    console.error("[inbound] GitHub write failed:", err);
  }
}

// SendGrid Inbound Parse webhook
// Called when someone replies to a @getmetafix.com email
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const from = formData.get("from")?.toString() || "";
    const to = formData.get("to")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const text = formData.get("text")?.toString() || "";
    const html = formData.get("html")?.toString() || "";
    const timestamp = new Date().toISOString();

    const entry = {
      id: `reply_${Date.now()}`,
      timestamp,
      product: "getmetafix",
      from,
      to,
      subject,
      body: text || html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      read: false,
      actioned: false,
    };

    console.log("[inbound] New reply from:", from, "| subject:", subject);

    await Promise.all([
      appendToGitHubInbox(entry),
      fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: "louiswharmby@gmail.com" }] }],
          from: { email: "hello@getmetafix.com", name: "GetMetaFix Inbox" },
          subject: `📬 Reply from ${from}: ${subject}`,
          content: [
            {
              type: "text/plain",
              value: `New reply received at GetMetaFix:\n\nFrom: ${from}\nTo: ${to}\nSubject: ${subject}\nTime: ${timestamp}\n\n---\n\n${entry.body}\n\n---\nMaestro will action this at next heartbeat.`,
            },
          ],
        }),
      }),
    ]);

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    console.error("[inbound] Error:", err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
