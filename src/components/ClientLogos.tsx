const logos = [
  "CVAT",
  "Google Ads",
  "Meta Business",
  "WordPress",
  "QGIS",
  "Analytics 4",
  "OpenAI",
  "Hugging Face",
  "Notion",
  "Make",
];

export function ClientLogos() {
  const loop = [...logos, ...logos];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Outils & plateformes maîtrisés
        </p>
      </div>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-12 px-6 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-gold md:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
