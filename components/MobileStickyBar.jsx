import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
        WhatsApp
      </a>
      <Link href="/#contact" className="btn btn-primary">
        Start a Project →
      </Link>
    </div>
  );
}
