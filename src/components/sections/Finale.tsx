import { motion } from "motion/react";

const phrase = "You Mean Everything to Me";

export function Finale() {
  const words = phrase.split(" ");
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      {/* radiant glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-gradient opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blush)] opacity-30 blur-3xl"
      />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-8 text-sm uppercase text-[var(--gold)]"
        >
          ✦ a final whisper ✦
        </motion.p>

        <h2 className="font-display text-5xl leading-tight sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.4 + i * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-gradient glow-text mr-4 inline-block italic"
            >
              {w}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 flex justify-center"
        >
          <span
            className="inline-block animate-pulse-glow text-7xl"
            style={{ color: "var(--rose)" }}
          >
            ♥
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 3 }}
          className="mt-12 font-display text-2xl italic text-[var(--blush)]"
        >
          and I always will.
        </motion.p>
      </div>
    </section>
  );
}
