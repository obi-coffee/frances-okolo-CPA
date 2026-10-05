import type { Metadata } from "next";
import { services, servicesPage } from "@/content/site";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Services",
  description: "Accounting, audit readiness, grant management, fractional services, and compliance for nonprofits.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero short wrap">
        <p className="eyebrow reveal">{servicesPage.eyebrow}</p>
        <h1 className="reveal" style={{ maxWidth: "14ch" }}>{servicesPage.headline}</h1>
        <p className="lede reveal">{servicesPage.lede}</p>
      </section>

      <section className="wrap pt-0">
        <div className="grid g3">
          {services.map((s) => (
            <div className="svc" key={s.title}>
              <span className="idx">{s.idx}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <ul>{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap grid g-5-7">
          <p className="eyebrow">{servicesPage.models.eyebrow}</p>
          <div className="grid g2" style={{ gap: "2rem" }}>
            {servicesPage.models.items.map((m) => (
              <div key={m.title}>
                <h3>{m.title}</h3>
                <p className="muted" style={{ marginTop: ".8rem" }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "clamp(4rem,9vw,8rem)" }} />
      <CtaBlock {...servicesPage.cta} />
    </>
  );
}
