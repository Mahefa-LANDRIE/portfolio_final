import { useEffect, useRef, useState } from "react";

export function CountUp({
  end,
  suffix = "",
  duration = 1800,
  pause = 2500,
  loop = true,
  className = "",
}: {
  end: number;
  suffix?: string;
  duration?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const visibleRef = useRef(false);
  const cancelledRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    cancelledRef.current = false;

    const animateOnce = () =>
      new Promise<void>((resolve) => {
        const t0 = performance.now();
        const step = (t: number) => {
          if (cancelledRef.current) return resolve();
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });

    const sleep = (ms: number) =>
      new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      while (!cancelledRef.current) {
        if (!visibleRef.current) {
          await sleep(300);
          continue;
        }
        setVal(0);
        await animateOnce();
        if (!loop) return;
        await sleep(pause);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visibleRef.current = e.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);

    // Kick off immediately; visibility gate is inside run()
    visibleRef.current = true;
    run();

    return () => {
      cancelledRef.current = true;
      obs.disconnect();
    };
  }, [end, duration, pause, loop]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}
