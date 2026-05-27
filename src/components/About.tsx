import { Brain, LineChart, Code2, Database } from "lucide-react";
import { CountUp } from "./CountUp";

const highlights = [
  { Icon: Brain, label: "Computer Vision", desc: "CVAT, QGIS, segmentation" },
  { Icon: Database, label: "Data Quality", desc: "Audit & assurance qualité" },
  { Icon: LineChart, label: "Web Marketing", desc: "SEO, SEA, Analytics" },
  { Icon: Code2, label: "Développement", desc: "WordPress, JS, Python" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              À propos de moi
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Expert en <span className="text-gradient-gold">Données IA</span> & Solutions Web
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Spécialiste du <span className="text-foreground">Data Labeling</span> avec
              une expertise confirmée dans l'entraînement d'algorithmes de Computer Vision.
              Mon parcours en BPO, allié à une maîtrise des outils marketing (Google
              Analytics, Facebook Ads) et du développement WordPress, me permet de piloter
              des projets numériques complexes.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Je transforme les <span className="text-gold">données brutes</span> en actifs
              stratégiques tout en garantissant une présence web optimisée et performante.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <CountUp end={4} suffix="+" className="font-display text-3xl font-bold text-gold" />
                <p className="mt-1 text-xs text-muted-foreground">Années en IA</p>
              </div>
              <div>
                <CountUp end={20} suffix="+" className="font-display text-3xl font-bold text-gold" />
                <p className="mt-1 text-xs text-muted-foreground">Projets livrés</p>
              </div>
              <div>
                <CountUp end={3} className="font-display text-3xl font-bold text-gold" />
                <p className="mt-1 text-xs text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl gold-border bg-surface/50 p-6 transition-all hover:bg-surface hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold">{label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
