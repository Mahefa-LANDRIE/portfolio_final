const coding = [
  { name: "Python", value: 90, note: "Scripts d'automatisation, analyse de données, API" },
  { name: "HTML & CSS", value: 90, note: "Sémantique SEO, Flexbox/Grid, Responsive" },
  { name: "JavaScript", value: 80, note: "DOM, scripts interactifs, requêtes async" },
  { name: "WordPress & CMS", value: 85, note: "Thèmes, back-office, optimisation" },
];

const pro = [
  { name: "Data Labeling & Computer Vision", value: 95, note: "Annotation, Segmentation, Classification" },
  { name: "Assurance Qualité & Audit Data", value: 90, note: "Contrôle, anomalies, feedback loop" },
  { name: "Web Marketing & SEO/SEA", value: 85, note: "Google Ads, Facebook Ads, Analytics" },
  { name: "Gestion de Données & Outils IA", value: 90, note: "CVAT, QGIS, Excel, Copilot" },
];

function Bar({ name, value, note }: { name: string; value: number; note: string }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between">
        <h4 className="font-display text-base font-semibold">{name}</h4>
        <span className="font-display text-sm font-bold text-gold">{value}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-gold to-gold-soft transition-all duration-1000"
          style={{ width: `${value}%` }}
        >
          <div className="shimmer absolute inset-0" />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Mes compétences
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Un savoir-faire <span className="text-gradient-gold">complet</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="rounded-3xl gold-border bg-surface/40 p-8">
            <h3 className="mb-8 font-display text-xl font-semibold">Coding Skills</h3>
            <div className="space-y-7">
              {coding.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>
          <div className="rounded-3xl gold-border bg-surface/40 p-8">
            <h3 className="mb-8 font-display text-xl font-semibold">Compétences Professionnelles</h3>
            <div className="space-y-7">
              {pro.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
