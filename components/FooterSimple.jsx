import Link from "next/link";
import { SITE } from "@/lib/site";
import CurrentYear from "./CurrentYear";

/** Minimal footer used on case study and service pages. */
export default function FooterSimple() {
  return (
    <footer>
      <div className="container">
        <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
          <p>
            © <CurrentYear /> {SITE.name}. All rights reserved.
          </p>
          <p>
            <Link href="/">Back to homepage</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
