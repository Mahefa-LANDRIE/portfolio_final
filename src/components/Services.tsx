import { Database, LineChart, ImageIcon, Video, Keyboard, Search, Megaphone, Bot } from "lucide-react";
import { ProcessSteps } from "./ProcessSteps";

const services = [
  {
    Icon: Keyboard,
    title: "Data Entry",
    desc: "Saisie, structuration et nettoyage de données à grande échelle avec précision.",
  },
  {
    Icon: ImageIcon,
    title: "Data Annotation Image",
    desc: "Bounding box, polygones, segmentation sémantique pour Computer Vision.",
  },
  {
    Icon: Video,
    title: "Data Annotation Vidéo",
    desc: "Tracking, key-frames, classification d'actions pour modèles IA.",
  },
  {
    Icon: LineChart,
    title: "Web Marketing",
    desc: "Stratégie digitale, Google Analytics, Facebook & Google Ads.",
  },
  {
    Icon: Search,
    title: "SEO / SEA",
    desc: "Optimisation du référencement naturel et campagnes payantes.",
  },
  {
    Icon: Database,
    title: "Data Quality & Audit",
    desc: "Contrôle qualité, audit, feedback loop sur datasets IA.",
  },
  {
    Icon: Bot,
    title: "Automatisation IA",
    desc: "Scripts Python, intégration d'outils IA et workflows automatisés.",
  },
  {
    Icon: Megaphone,
    title: "Community & Content",
    desc: "Animation de communauté, création de contenu et copywriting.",
  },
];

export function Services() {
  // Duplicate for seamless marquee loop
  const loop = [...services, ...services];

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Mes services
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Des solutions <span className="text-gradient-gold">sur-mesure</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            De l'annotation de données IA au web marketing — un accompagnement complet
            pour vos projets data & digital.
          </p>
        </div>
      </div>

      <div
        className="group relative mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]">
          {loop.map(({ Icon, title, desc }, i) => (
            <article
              key={`${title}-${i}`}
              className="relative w-[300px] shrink-0 overflow-hidden rounded-3xl gold-border bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-surface hover:shadow-[0_25px_60px_-25px_oklch(0.82_0.14_86/0.45)]"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>

      <ProcessSteps />
    </section>
  );
}
