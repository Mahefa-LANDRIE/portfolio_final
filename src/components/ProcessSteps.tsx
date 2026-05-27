import { ClipboardList, Search, Wrench, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    Icon: ClipboardList,
    title: "Briefing",
    desc: "Découverte des besoins, objectifs et contraintes du projet.",
  },
  {
    Icon: Search,
    title: "Analyse",
    desc: "Audit, stratégie et planification des livrables.",
  },
  {
    Icon: Wrench,
    title: "Réalisation",
    desc: "Exécution avec points d'étape et qualité contrôlée.",
  },
  {
    Icon: Rocket,
    title: "Livraison",
    desc: "Validation finale, mise en ligne et accompagnement.",
  },
];

export function ProcessSteps() {
  return (
    <div className="mx-auto mt-20 max-w-6xl px-6">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Ma méthode
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
            Un process clair en <span className="text-gradient-gold">4 étapes</span>
          </h3>
        </div>
      </Reveal>

      <div className="relative mt-12 grid gap-6 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
        {steps.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl gold-border bg-background text-gold transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_oklch(0.82_0.14_86/0.5)]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h4 className="mt-5 font-display text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
