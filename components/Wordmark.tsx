import Link from "next/link";
import { site } from "@/content/site";
import WordmarkSvg from "./WordmarkSvg";

export default function Wordmark({ height = 30, className = "" }: { height?: number; className?: string }) {
  return (
    <Link href="/" className={`wordmark ${className}`} aria-label={`${site.name} — home`}>
      <WordmarkSvg height={height} />
    </Link>
  );
}
