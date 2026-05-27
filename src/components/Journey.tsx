import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2025",
    title: "Certification GitHub Foundation & Copilot AI",
    place: "GitHub",
    desc: "Développeur certifié exploitant la puissance de l'IA pour accroître la productivité et la qualité du code.",
  },
  {
    year: "2017 — 2019",
    title: "DTS en Informatique de Gestion",
    place: "CNTEMAD",
    desc: "Concepteur Développeur WordPress: PHP (Laravel) / JavaScript (React, Vue.js, Node.js) / Python.",
  },
  {
    year: "2019",
    title: "Formation Graphic Design",
    place: "INISMA Ankazomanga",
    desc: "Spécialité Graphic Designer.",
  },
];

const experience = [
  {
    year: "Depuis 2021",
    title: "Spécialiste Annotation de Données & QA IA",
    place: "Ingedata",
    desc: "Développement de solutions IA via le labeling avancé de données visuelles. Projets d'envergure (SAFRAN) : annotation sur CVAT/QGIS, contrôle qualité rigoureux.",
  },
  {
    year: "2022 — 2025",
    title: "Contrôleur Qualité Data IA",
    place: "Telesourcia (4 ans)",
    desc: "Garant de la précision des datasets pour Amazon. Audit des annotations images/vidéos, analyse de performance, optimisation des process qualité.",
  },
  {
    year: "2021 — 2022",
    title: "Chargé de Marketing Digital (SEO/SEA)",
    place: "Smartelia",
    desc: "Stratégies d'acquisition multicanales. Amélioration du positionnement organique, campagnes SEA, analyse fine des KPI.",
  },
];

function Timeline({ items, Icon }: { items: typeof education; Icon: typeof GraduationCap }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="relative pl-14">
            <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full gold-border bg-background">
              <Icon className="h-4 w-4 text-gold" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {item.year}
            </p>
            <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
              {item.title}
            </h4>
            <p className="text-sm text-muted-foreground">{item.place}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Mon parcours
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Diplômes & <span className="text-gradient-gold">Expériences</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-8 font-display text-xl font-semibold uppercase tracking-wide text-foreground/80">
              Diplômes
            </h3>
            <Timeline items={education} Icon={GraduationCap} />
          </div>
          <div>
            <h3 className="mb-8 font-display text-xl font-semibold uppercase tracking-wide text-foreground/80">
              Expériences
            </h3>
            <Timeline items={experience} Icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}
