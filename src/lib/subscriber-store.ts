import fs from "fs";
import path from "path";

export interface Subscriber {
  id: string;
  url: string;
  email: string;
  createdAt: string;
  lastChecked: string | null;
  active: boolean;
  stripeSubscriptionId?: string;
}

const STORE_PATH = "/data/monitor-subscribers.json";

function ensureFile(): void {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(STORE_PATH)) {
    fs.writeFileSync(STORE_PATH, JSON.stringify([], null, 2), "utf-8");
  }
}

export function readSubscribers(): Subscriber[] {
  ensureFile();
  const raw = fs.readFileSync(STORE_PATH, "utf-8");
  try {
    return JSON.parse(raw) as Subscriber[];
  } catch {
    return [];
  }
}

export function writeSubscribers(subscribers: Subscriber[]): void {
  ensureFile();
  fs.writeFileSync(STORE_PATH, JSON.stringify(subscribers, null, 2), "utf-8");
}

export function addSubscriber(subscriber: Omit<Subscriber, "active">): void {
  const subscribers = readSubscribers();
  subscribers.push({ ...subscriber, active: true });
  writeSubscribers(subscribers);
}

export function deactivateSubscriber(stripeSubscriptionId: string): void {
  const subscribers = readSubscribers();
  const updated = subscribers.map((s) =>
    s.stripeSubscriptionId === stripeSubscriptionId
      ? { ...s, active: false }
      : s
  );
  writeSubscribers(updated);
}

export function updateLastChecked(id: string, timestamp: string): void {
  const subscribers = readSubscribers();
  const updated = subscribers.map((s) =>
    s.id === id ? { ...s, lastChecked: timestamp } : s
  );
  writeSubscribers(updated);
}

export function getActiveSubscribers(): Subscriber[] {
  return readSubscribers().filter((s) => s.active);
}
