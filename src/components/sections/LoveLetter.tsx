import { Reveal } from "../Reveal";

export function LoveLetter() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-4 text-center text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
            A Letter
          </p>
          <h2 className="text-center text-5xl md:text-6xl text-gradient mb-16">
            From my heart, to yours
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16 glow">
            <div className="absolute inset-0 animate-shimmer opacity-30" />
            <div className="relative space-y-6 font-display text-xl leading-relaxed md:text-2xl">
              <p className="text-[var(--blush)] text-3xl italic">My love,</p>
              <p>
                If I could collect every quiet morning, every shared laugh, every glance you didn't
                know I caught — I'd wear them like stars and never feel cold again.
              </p>
              <p>
                You are the soft hush after a long day. The reason ordinary songs feel like
                promises. You arrived in my life like a sunrise no one warned me about, and now I
                can't imagine the sky without you.
              </p>
              <p>
                Thank you for choosing me, again and again, in the smallest, loudest, most beautiful
                ways.
              </p>
              <p className="text-right text-[var(--gold)] italic">— Always yours</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
