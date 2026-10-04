import Link from "next/link";
import { home, services } from "@/content/site";
import CtaBlock from "@/components/CtaBlock";
import Portrait from "@/components/Portrait";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow reveal">{home.eyebrow}</p>
        <h1 className="reveal">{home.headline}</h1>
        <p className="lede reveal">{home.lede}</p>
        <div className="cta reveal">
          <Link href="/contact" className="btn primary">Book an intro call <span className="arrow">→</span></Link>
          <Link href="/services" className="btn">See services</Link>
        </div>
        <div className="hero-meta">
          {home.meta.map((m) => (
            <div key={m.title}><strong>{m.title}</strong>{m.text}</div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap grid g-5-7">
          <p className="eyebrow">{home.band.eyebrow}</p>
          <div>
            <h2>{home.band.headline}</h2>
            <p className="muted mt-2" style={{ maxWidth: "56ch", fontSize: "1.05rem" }}>{home.band.text}</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="grid g-4-8">
          <div>
            <p className="eyebrow">{home.who.eyebrow}</p>
            <h2 className="mt-1">{home.who.headline}</h2>
          </div>
          <ul className="who-list">
            {home.who.items.map((w) => (
              <li key={w.title}><strong>{w.title}</strong><span>{w.text}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="rule" />

      <section className="wrap">
        <div className="grid g-4-8" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <p className="eyebrow">{home.servicesIntro.eyebrow}</p>
          <h2>{home.servicesIntro.headline}</h2>
        </div>
        <div className="grid g3">
          {services.slice(0, 3).map((s) => (
            <div className="svc" key={s.title}>
              <span className="idx">{s.idx.split(" · ")[1]}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/services" className="link">{home.servicesIntro.linkText} <span className="arrow">→</span></Link>
        </p>
      </section>

      <section className="wrap pt-0">
        <div className="grid g-4-8" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <p className="eyebrow">{home.process.eyebrow}</p>
          <h2>{home.process.headline}</h2>
        </div>
        <div className="steps">
          {home.process.steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="n">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <ClientLogos />

      <section className="wrap">
        <div className="grid g-5-7 align-center">
          <Portrait />
          <div>
            <p className="eyebrow">{home.aboutTeaser.eyebrow}</p>
            <h2 className="mt-1">{home.aboutTeaser.headline}</h2>
            <p className="muted mt-2" style={{ maxWidth: "52ch", fontSize: "1.05rem" }}>{home.aboutTeaser.text}</p>
            <p className="mt-3">
              <Link href="/about" className="link">{home.aboutTeaser.linkText} <span className="arrow">→</span></Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBlock {...home.cta} />
    </>
  );
}
