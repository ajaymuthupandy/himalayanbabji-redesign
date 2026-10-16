import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid size-11 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <FaWhatsapp className="size-5" aria-hidden />
    </a>
  );
}
