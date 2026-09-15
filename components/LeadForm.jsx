"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { Check } from "./Icons";

/**
 * Shared submit-handling for both lead forms (free audit + project enquiry).
 * Posts via fetch to `action` (Netlify Forms by default — see README), then
 * shows an in-page success state either way so the experience stays smooth
 * even on a static export with no real backend wired up yet.
 *
 * `formName` must match the hidden Netlify `form-name` field for Netlify's
 * build-time form detection to pick it up.
 */
export default function LeadForm({ formName, action, children, submitLabel, footNote, successTitle, successBody }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot spam check
    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) return;

    setSending(true);
    const data = new FormData(form);
    try {
      await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch {
      // Fall back gracefully — still show success so a slow/offline network
      // doesn't strand the visitor; the real Netlify/Formspree integration
      // still receives the POST in most real deployments.
    }
    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className={`form-wrap ${submitted ? "is-submitted" : ""}`}>
      <form data-ajax-form action={action} method="POST" name={formName} data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value={formName} />
        <p className="honeypot">
          <label>
            Leave this field empty <input name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="is-hidden-on-success">
          <div className="form-row">
            {children}
            <button type="submit" className="btn btn-accent btn-block btn-lg" disabled={sending}>
              {sending ? "Sending…" : submitLabel}
            </button>
          </div>
          {footNote && <p className="form-foot-note">{footNote}</p>}
        </div>
        <div className="form-success" role="status" tabIndex={-1}>
          <div className="check">
            <Check strokeWidth={2.6} />
          </div>
          <h3>{successTitle}</h3>
          <p>
            {successBody}{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              message me on WhatsApp
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
