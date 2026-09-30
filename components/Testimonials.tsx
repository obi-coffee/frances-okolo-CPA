import { site, testimonials } from "@/content/site";

export default function Testimonials() {
  if (!site.features.testimonials) return null;
  return (
    <section className="wrap">
      <div className="grid g-4-8" style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
        <p className="eyebrow">{testimonials.eyebrow}</p>
        <h2>{testimonials.headline}</h2>
      </div>
      <div className="grid g2">
        {testimonials.items.map((t) => (
          <figure className="quote" key={t.quote}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              {t.org}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
