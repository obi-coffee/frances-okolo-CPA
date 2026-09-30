import Link from "next/link";

type Props = { eyebrow: string; headline: string; text: string; button: string };

export default function CtaBlock({ eyebrow, headline, text, button }: Props) {
  return (
    <section className="wrap pt-0">
      <div className="cta-block">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-1">{headline}</h2>
        </div>
        <div className="side">
          <p className="muted">{text}</p>
          <Link href="/contact" className="btn primary">
            {button} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
