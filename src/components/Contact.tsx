import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl, handleWhatsAppClick } from "@/lib/whatsapp";

const socials = [
  { Icon: Github, href: "https://github.com/mahefa-landrie", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mahefa-landrie", label: "LinkedIn" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/landriejames@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: String(new FormData(form).get("name") || ""),
          email: String(new FormData(form).get("email") || ""),
          message: String(new FormData(form).get("message") || ""),
          _subject: "Nouveau message depuis le portfolio",
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json();
      if (!res.ok || json.success === "false") {
        throw new Error(json.message || "Erreur lors de l'envoi");
      }
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur réseau, réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] gold-border bg-surface/60 p-8 md:p-14">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Travaillons ensemble
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                Un projet en <br />
                <span className="text-gradient-gold">tête ?</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                IA Data Expert & Web Marketer — disponible pour des missions en
                annotation IA, contrôle qualité data, SEO/SEA et développement web.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/MahefaCV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download="Mahefa-Landrie-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)]"
                >
                  <Download className="h-4 w-4" />
                  Mon CV
                </a>
                <a
                  href={buildWhatsAppUrl("Bonjour Mahefa, j'aimerais discuter d'un projet.")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => handleWhatsAppClick(event, "Bonjour Mahefa, j'aimerais discuter d'un projet.")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-5 py-2.5 text-sm font-semibold text-[#25D366] gold-border transition-all hover:bg-[#25D366]/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full gold-border text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:landriejames@gmail.com"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">landriejames@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+261349174020"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone</p>
                  <p className="text-sm font-medium">+261 34 91 740 20</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mahefa-landrie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4 transition-all hover:bg-gold/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium">mahefa-landrie</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl gold-border bg-background/30 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Adresse</p>
                  <p className="text-sm font-medium">Soavimasoandro, Antananarivo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative mt-10 rounded-3xl gold-border bg-background/30 p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold">Envoyez-moi un message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Décrivez votre projet — je vous réponds sous 24h.
            </p>
            <form onSubmit={onSubmit} className="mt-5 grid gap-4 md:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Votre nom"
                className="rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Votre email"
                className="rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Parlez-moi de votre projet…"
                className="resize-none rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 md:col-span-2"
              />
              {error && (
                <p className="text-sm font-medium text-destructive md:col-span-2">{error}</p>
              )}
              {sent && (
                <p className="text-sm font-medium text-[#25D366] md:col-span-2">
                  ✓ Message bien reçu — je vous réponds rapidement !
                </p>
              )}
              <div className="flex items-center justify-between gap-4 md:col-span-2">
                <p className="text-xs text-muted-foreground">
                  Réponse rapide · Confidentialité garantie
                </p>
                <button
                  type="submit"
                  disabled={loading || sent}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_oklch(0.82_0.14_86/0.5)] disabled:opacity-60"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Envoyé !
                    </>
                  ) : loading ? (
                    "Envoi…"
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-12 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-3">
          <div>
            <p className="font-display text-base font-bold text-foreground">
              Landrie<span className="text-gold">.</span>Mahefa
            </p>
            <p className="mt-2">IA Data Expert & Web Marketer · Antananarivo, Madagascar</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Navigation</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="#about" className="hover:text-gold">À propos</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#projects" className="hover:text-gold">Projets</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Contact rapide</p>
            <ul className="mt-3 space-y-1.5">
              <li><a href="mailto:landriejames@gmail.com" className="hover:text-gold">landriejames@gmail.com</a></li>
              <li><a href="tel:+261349174020" className="hover:text-gold">+261 34 91 740 20</a></li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => handleWhatsAppClick(event)}
                  className="hover:text-gold"
                >
                  WhatsApp direct
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mahefa Landrie — Crafted with <span className="text-gold">♦</span> care.
        </p>
      </div>
    </section>
  );
}
