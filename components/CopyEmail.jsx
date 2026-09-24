"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { Copy, Check } from "./Icons";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
      {copied ? <Check /> : <Copy />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
