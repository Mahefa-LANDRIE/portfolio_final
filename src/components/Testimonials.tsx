import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "Rakoto H.",
    role: "Project Manager · BPO",
    text: "Mahefa a livré un dataset annoté avec une précision irréprochable et dans les délais. Très professionnel et rigoureux.",
    initials: "RH",
  },
  {
    name: "École Cendrillon",
    role: "Directrice pédagogique",
    text: "Notre site web a transformé notre image. Communication claire, livraison rapide et résultats SEO concrets.",
    initials: "EC",
  },
  {
    name: "Sarah M.",
    role: "Fondatrice · Startup IA",
    text: "Excellente collaboration sur l'annotation vidéo. Mahefa comprend les enjeux techniques d'un modèle Computer Vision.",
    initials: "SM",
  },
  {
    name: "Jean P.",
    role: "Responsable Marketing",
    text: "Campagnes Google Ads bien structurées, ROI au rendez-vous. Je recommande sans hésiter.",
    initials: "JP",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Témoignages
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Ce que disent <span className="text-gradient-gold">mes clients</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14">
            <div className="relative overflow-hidden rounded-3xl gold-border bg-surface/50 p-8 md:p-12">
              <Quote className="absolute -top-3 left-8 h-16 w-16 text-gold/15" />
              <div className="relative min-h-[180px]">
                {items.map((it, idx) => (
                  <div
                    key={it.name}
                    className={`absolute inset-0 transition-all duration-700 ${
                      idx === i
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-6 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                      « {it.text} »
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold">
                        {it.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{it.name}</p>
                        <p className="text-xs text-muted-foreground">{it.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Témoignage ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-4 bg-border hover:bg-gold/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
