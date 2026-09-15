"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Close } from "./Icons";

const STORAGE_KEY = "ad_engage_shown";

/**
 * Once-per-session enquiry prompt. Triggers on desktop exit-intent
 * (cursor leaves toward the browser chrome) or, as a mobile-friendly
 * fallback, after meaningful scroll depth + dwell time.
 */
export default function EngagementModal() {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    try {
      shownRef.current = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // storage blocked — degrade silently, treat as not-yet-shown
    }

    function markShown() {
      shownRef.current = true;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }
    function openModal() {
      if (shownRef.current) return;
      setOpen(true);
      markShown();
    }

    let dwellTimer;
    function onMouseOut(e) {
      if (!e.relatedTarget && e.clientY < 10) openModal();
    }
    function onScroll() {
      if (window.scrollY + window.innerHeight > document.body.scrollHeight * 0.75) {
        setTimeout(openModal, 4000);
      }
    }

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) document.addEventListener("mouseout", onMouseOut);
    dwellTimer = setTimeout(() => {
      if (window.scrollY > document.body.scrollHeight * 0.15) openModal();
    }, 45000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(dwellTimer);
    };
  }, []);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`engage-modal ${open ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="engage-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="engage-card">
        <button className="engage-close" aria-label="Close" ref={closeBtnRef} onClick={() => setOpen(false)}>
          <Close />
        </button>
        <h3 id="engage-title">Before you go — want a free website audit?</h3>
        <p>I&rsquo;ll review your current website and send you 3 specific improvements, free of charge. No strings attached.</p>
        <div className="engage-actions">
          <Link href="/#audit" className="btn btn-accent btn-block" onClick={() => setOpen(false)}>
            Get My Free Audit →
          </Link>
          <button className="btn btn-ghost btn-block" onClick={() => setOpen(false)}>
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
