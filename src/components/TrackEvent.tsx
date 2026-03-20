"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export function TrackEvent({ event, props }: { event: string; props?: Record<string, string | number> }) {
  useEffect(() => {
    track(event, props);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
