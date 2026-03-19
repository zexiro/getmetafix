import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getActiveSubscribers, updateLastChecked } from "@/lib/subscriber-store";
import { runHealthCheck, detectChanges } from "@/lib/health-checker";
import type { HealthCheck } from "@/lib/health-checker";
import { sendWeeklyReport } from "@/lib/monitor-email";

const RESULTS_DIR = "/data/monitor-results";

function ensureResultsDir(): void {
  if (!fs.existsSync(RESULTS_DIR)) {
    fs.mkdirSync(RESULTS_DIR, { recursive: true });
  }
}

function readPreviousResults(subscriberId: string): HealthCheck | null {
  ensureResultsDir();
  const filePath = path.join(RESULTS_DIR, `${subscriberId}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as HealthCheck;
  } catch {
    return null;
  }
}

function writeResults(subscriberId: string, check: HealthCheck): void {
  ensureResultsDir();
  const filePath = path.join(RESULTS_DIR, `${subscriberId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(check, null, 2), "utf-8");
}

function daysSince(isoDate: string): number {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  return (now - then) / (1000 * 60 * 60 * 24);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(req: NextRequest) {
  // Verify cron secret
  const cronSecret = process.env.CRON_SECRET;
  const providedSecret = req.headers.get("x-cron-secret");

  if (cronSecret && providedSecret !== cronSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = getActiveSubscribers();
  console.log(`Monitor run-checks: processing ${subscribers.length} active subscriber(s)`);

  const results: {
    subscriberId: string;
    url: string;
    emailSent: boolean;
    changesFound: number;
    error?: string;
  }[] = [];

  for (const subscriber of subscribers) {
    try {
      console.log(`Monitor: checking ${subscriber.url} for ${subscriber.email}`);

      // Run health check
      const current = await runHealthCheck(subscriber.url);

      // Load previous results
      const previous = readPreviousResults(subscriber.id);

      // Detect changes
      const changes = previous ? detectChanges(previous, current) : [];

      // Decide whether to send report:
      // - It's been 7+ days since last check, OR
      // - Changes were detected
      const shouldSendReport =
        !subscriber.lastChecked ||
        daysSince(subscriber.lastChecked) >= 7 ||
        changes.length > 0;

      let emailSent = false;
      if (shouldSendReport) {
        try {
          await sendWeeklyReport({
            to: subscriber.email,
            url: subscriber.url,
            current,
            previous,
            changes,
          });
          emailSent = true;
          console.log(
            `Monitor: email sent to ${subscriber.email} for ${subscriber.url}`
          );
        } catch (emailErr) {
          console.error(
            `Monitor: failed to send email to ${subscriber.email}:`,
            emailErr
          );
        }
      }

      // Save results and update lastChecked
      writeResults(subscriber.id, current);
      updateLastChecked(subscriber.id, new Date().toISOString());

      results.push({
        subscriberId: subscriber.id,
        url: subscriber.url,
        emailSent,
        changesFound: changes.length,
      });
    } catch (err) {
      console.error(`Monitor: error checking ${subscriber.url}:`, err);
      results.push({
        subscriberId: subscriber.id,
        url: subscriber.url,
        emailSent: false,
        changesFound: 0,
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }

    // 2s delay between subscribers to avoid hammering sites
    await sleep(2000);
  }

  return NextResponse.json({
    processed: subscribers.length,
    results,
    completedAt: new Date().toISOString(),
  });
}
