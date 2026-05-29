import { motion } from "motion/react";
import { Reveal } from "../Reveal";

const moments = [
  {
    when: "The First Glance",
    text: "The world quieted. I didn't know it yet, but everything had just begun.",
  },
  {
    when: "The First Conversation",
    text: "Hours felt like minutes. Words that mattered, and words that didn't, all glowed the same.",
  },
  {
    when: "The First 'Us'",
    text: "Two stories pressed gently into one. Soft, certain, undeniable.",
  },
  {
    when: "The Quiet Tuesdays",
    text: "Tea, laughter, your hand near mine. The kind of magic no one writes poems about — but they should.",
  },
  {
    when: "Today",
    text: "Still choosing you. Still amazed by you. Still writing this love into every hour.",
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-center text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
            Memorable Moments
          </p>
          <h2 className="text-center text-5xl md:text-6xl text-gradient mb-20">
            Moments I'll never lose
          </h2>
        </Reveal>

        <div className="relative">
          {/* glowing spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[var(--rose)] via-[var(--blush)] to-[var(--gold)] md:left-1/2"
          />

          <div className="space-y-20">
            {moments.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={m.when} delay={0.05 * i}>
                  <div
                    className={`relative flex items-center ${
                      left ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* dot */}
                    <span className="absolute left-6 -translate-x-1/2 md:left-1/2">
                      <span className="block h-4 w-4 animate-pulse-glow rounded-full bg-rose-gradient" />
                    </span>

                    <div
                      className={`ml-16 w-full md:ml-0 md:w-[45%] ${
                        left ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 md:p-8">
                        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                          {m.when}
                        </p>
                        <p className="font-display text-2xl leading-snug md:text-3xl">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
