import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an intro call with Frances Okolo, CPA.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero short wrap">
        <p className="eyebrow reveal">{contact.eyebrow}</p>
        <h1 className="reveal" style={{ maxWidth: "14ch" }}>{contact.headline}</h1>
        <p className="lede reveal">{contact.lede}</p>
      </section>

      <section className="wrap pt-0">
        <div className="grid g-5-7" style={{ gap: "clamp(2rem,6vw,6rem)" }}>
          <div className="contact-side">
            <dl>
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>Response time</dt><dd>{site.responseTime}</dd></div>
              <div><dt>Intro call</dt><dd>45 minutes, video or phone</dd></div>
            </dl>
            <p className="muted" style={{ fontSize: ".95rem", maxWidth: "36ch" }}>{contact.aside}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
