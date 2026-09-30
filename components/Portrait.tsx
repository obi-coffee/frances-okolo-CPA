import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

/**
 * Headshot. Drop the client's photo at /public/headshot.jpg and it appears
 * automatically; until then a styled placeholder renders.
 */
export default function Portrait({ alt = "Frances Okolo" }: { alt?: string }) {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "headshot.jpg"));
  return (
    <div className="portrait">
      {hasPhoto ? (
        <Image src="/headshot.jpg" alt={alt} fill sizes="(max-width: 860px) 100vw, 40vw" priority />
      ) : (
        <span>Headshot placeholder</span>
      )}
    </div>
  );
}
