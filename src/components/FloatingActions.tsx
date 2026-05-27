import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, handleWhatsAppClick } from "@/lib/whatsapp";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={buildWhatsAppUrl("Bonjour Mahefa, j'aimerais discuter d'un projet.")}
        target="_blank"
        rel="noreferrer"
        onClick={(event) => handleWhatsAppClick(event, "Bonjour Mahefa, j'aimerais discuter d'un projet.")}
        aria-label="WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition-all hover:scale-110"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Discuter sur WhatsApp
        </span>
      </a>

      <button
        type="button"
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.82_0.14_86/0.5)] transition-all hover:-translate-y-1 ${
          show ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
