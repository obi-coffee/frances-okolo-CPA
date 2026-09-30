import { clientLogos, site } from "@/content/site";

export default function ClientLogos() {
  if (!site.features.clientLogos || clientLogos.items.length === 0) return null;
  return (
    <section className="wrap tight">
      <p className="eyebrow">{clientLogos.eyebrow}</p>
      <div className="logos">
        {clientLogos.items.map((l) => (
          <div className="logo" key={l.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt={l.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
