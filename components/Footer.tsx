import Link from "next/link";
import { nav, site } from "@/content/site";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <Wordmark height={26} />
            <p className="muted mt-1" style={{ maxWidth: "34ch", fontSize: ".95rem" }}>
              {site.description}
            </p>
          </div>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="fine">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
