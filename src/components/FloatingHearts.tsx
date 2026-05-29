import { useMemo } from "react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 8 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 200,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up text-[var(--rose)]"
          style={{
            left: `${h.left}%`,
            bottom: 0,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
            // @ts-expect-error css var
            "--drift": `${h.drift}px`,
            filter: "drop-shadow(0 0 6px oklch(0.78 0.16 350 / 0.8))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export function Starfield({ count = 80 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px oklch(0.95 0.05 80 / 0.9)",
          }}
        />
      ))}
    </div>
  );
}
