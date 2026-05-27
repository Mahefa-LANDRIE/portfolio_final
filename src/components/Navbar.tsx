import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass" : ""
          }`}
        >
          <a href="#home" className="font-display text-xl font-bold tracking-tight">
            Landrie<span className="text-gold">.</span>Mahefa
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="/MahefaCV.pdf"
            target="_blank"
            rel="noreferrer"
            download="Mahefa-Landrie-CV.pdf"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)] md:inline-block"
          >
            Mon CV
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          >
            <span className={`h-0.5 w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/MahefaCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-gold px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Télécharger mon CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
