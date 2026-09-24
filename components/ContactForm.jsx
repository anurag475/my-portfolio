"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { ArrowRight, Check } from "./Icons";

const TYPES = ["Website", "Web application", "Mobile app", "AI / ML solution", "SaaS / product", "E-commerce", "Something else"];

/**
 * Project enquiry form. Posts to Netlify Forms (the hidden `form-name`
 * field lets Netlify detect it in the static HTML at deploy time — see
 * README). Only shows success when the POST actually succeeds; otherwise it
 * says so and points to email, so no enquiry silently disappears.
 */
export default function ContactForm() {
  const [state, setState] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements._gotcha.value) return;
    setState("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done" role="status">
        <span className="form-done-icon">
          <Check />
        </span>
        <h3>Thanks — message received.</h3>
        <p>I&rsquo;ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form name="project-enquiry" method="POST" data-netlify="true" netlify-honeypot="_gotcha" onSubmit={onSubmit} className="cform">
      <input type="hidden" name="form-name" value="project-enquiry" />
      <p className="sr-only">
        <label>
          Leave this empty <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="cform-row">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <fieldset className="field">
        <legend>What are you building?</legend>
        <div className="type-pills">
          {TYPES.map((t, i) => (
            <label key={t}>
              <input type="radio" name="project_type" value={t} defaultChecked={i === 0} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="cf-message">Project details</label>
        <textarea id="cf-message" name="message" rows={4} required placeholder="What's the idea, who's it for, and when do you need it?" />
      </div>
      <button type="submit" className="btn btn-gold btn-lg btn-block" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send enquiry"} <ArrowRight />
      </button>
      {state === "error" && (
        <p className="form-error" role="alert">
          That didn&rsquo;t go through. Please email me directly at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      )}
    </form>
  );
}
