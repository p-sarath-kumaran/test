import { Reveal } from "../Reveal";

const promises = [
  { title: "To listen", text: "Even between the words. Especially between them." },
  { title: "To choose you", text: "On the bright days. And the heavy ones. Always." },
  { title: "To grow with you", text: "Side by side. Roots tangled, branches reaching." },
  { title: "To laugh with you", text: "Loudly, often, until our cheeks ache." },
  { title: "To be your home", text: "Wherever the world takes us." },
  { title: "To love you, slowly", text: "And then all at once. Forever and on purpose." },
];

export function Promises() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-center text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
            Promises for the future
          </p>
          <h2 className="text-center text-5xl md:text-6xl text-gradient mb-16">
            What I vow, gently
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:glow">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rose-gradient opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-gradient text-background">
                    ♥
                  </div>
                  <h3 className="mb-3 font-display text-3xl text-[var(--blush)]">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
