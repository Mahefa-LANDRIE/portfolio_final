import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 900);
    const t2 = setTimeout(() => setHidden(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-gold/20 border-t-gold" />
          <div className="absolute inset-2 rounded-full bg-gold/10" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-gold">
            M
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Loading</p>
      </div>
    </div>
  );
}
