import { whatsappUrl } from "@/lib/site";
import { WhatsApp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="Chat on WhatsApp">
      <WhatsApp />
    </a>
  );
}
