"use client";
import { useEffect } from "react";

/* Arms CSS reveals only when the tab is actually visible, and force-reveals after 2.5s
   so a backgrounded/hidden tab (or a failed hydration) can never strand content at opacity 0. */
export default function RevealArmer() {
  useEffect(() => {
    const root = document.documentElement;
    const arm = () => {
      if (document.visibilityState === "visible") root.classList.add("reveal-armed");
    };
    arm();
    document.addEventListener("visibilitychange", arm);
    const t = window.setTimeout(() => root.classList.add("reveal-done"), 2500);
    return () => {
      document.removeEventListener("visibilitychange", arm);
      window.clearTimeout(t);
    };
  }, []);
  return null;
}
