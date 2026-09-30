import Link from "next/link";
import { site } from "@/content/site";

/**
 * Type-set wordmark placeholder. To use the designed wordmark, drop an SVG at
 * /public/wordmark.svg and replace the inner text with:
 *   <img src="/wordmark.svg" alt={site.name} height={28} />
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`wordmark ${className}`} aria-label={`${site.name} — home`}>
      {site.shortName} <small>{site.credential}</small>
    </Link>
  );
}
