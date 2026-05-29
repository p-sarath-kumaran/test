import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-aurora animate-aurora opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--blush)]"
        >
          ✦ A Love Story ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient glow-text text-6xl leading-[1.05] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          For You,
          <br />
          <em className="font-display italic">My Forever</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          Scroll gently. Every word, every glow, every heartbeat below was made for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-3 text-[var(--blush)]"
        >
          <span className="text-xs uppercase tracking-[0.3em]">begin the journey</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-[var(--blush)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
