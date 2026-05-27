import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 80,
  startDelay = 0,
  className = "",
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      const tick = () => {
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) {
          timer = setTimeout(tick, speed);
        } else {
          setDone(true);
          onDone?.();
        }
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={className}>
      {out}
      <span
        className={`inline-block w-[0.08em] -mb-1 ml-1 h-[0.9em] bg-gold align-middle ${
          done ? "animate-pulse" : ""
        }`}
        style={{ animation: "blink 1s steps(2) infinite" }}
      />
    </span>
  );
}
