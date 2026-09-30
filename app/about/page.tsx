import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/content/site";
import Portrait from "@/components/Portrait";

export const metadata: Metadata = {
  title: "About",
  description: "Frances Okolo is a CPA and finance executive specializing in nonprofit and multi-entity accounting.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero short wrap">
        <p className="eyebrow reveal">{about.eyebrow}</p>
        <h1 className="reveal" style={{ maxWidth: "15ch" }}>{about.headline}</h1>
      </section>

      <section className="wrap pt-0">
        <div className="grid g-5-7">
          <div>
            <Portrait />
            <ul className="facts">
              {about.facts.map(([k, v]) => (
                <li key={k}><span>{k}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
          <div className="prose">
            <p className="lede">{about.lede}</p>
            {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <p style={{ marginTop: ".5rem" }}>
              <Link href="/contact" className="btn primary">Book an intro call <span className="arrow">→</span></Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap grid g-5-7">
          <p className="eyebrow">{about.principles.eyebrow}</p>
          <div className="grid g3" style={{ gap: "2rem" }}>
            {about.principles.items.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p className="muted" style={{ marginTop: ".8rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
