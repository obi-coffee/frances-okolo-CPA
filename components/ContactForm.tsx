"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, people don't.
    if (data.get("_gotcha")) return;

    if (!FORM_ID) {
      setError("The contact form isn't connected yet. Please email directly for now.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(body?.errors?.[0]?.message ?? "Something went wrong. Please try again or email directly.");
        setStatus("error");
      }
    } catch {
      setError("Couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
        <h3>{contact.success.title}</h3>
        <p className="muted" style={{ marginTop: ".6rem" }}>{contact.success.text}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New inquiry from francesokolo.com" />

      <div className="row2">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-org">Organization</label>
          <input id="f-org" name="organization" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-role">Your role</label>
          <input id="f-role" name="role" placeholder="Executive Director, Treasurer…" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-budget">Annual budget</label>
          <select id="f-budget" name="budget" defaultValue="">
            <option value="">Select a range</option>
            {contact.budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-need">What do you need?</label>
          <select id="f-need" name="need" defaultValue="">
            <option value="">Select one</option>
            {contact.needs.map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Anything else I should know</label>
        <textarea id="f-msg" name="message" />
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <span className="arrow">→</span>
        </button>
        <span className="form-note">Replies within two business days.</span>
      </div>
      {status === "error" && error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
