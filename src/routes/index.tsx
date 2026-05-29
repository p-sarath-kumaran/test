import { createFileRoute } from "@tanstack/react-router";
import { FloatingHearts, Starfield } from "@/components/FloatingHearts";
import { Hero } from "@/components/sections/Hero";
import { LoveLetter } from "@/components/sections/LoveLetter";
import { Timeline } from "@/components/sections/Timeline";
import { Promises } from "@/components/sections/Promises";
import { Finale } from "@/components/sections/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For You, My Forever — A Love Story" },
      {
        name: "description",
        content:
          "An interactive, animated love letter — memories, promises, and a final whisper made just for you.",
      },
      { property: "og:title", content: "For You, My Forever — A Love Story" },
      {
        property: "og:description",
        content: "An interactive, animated love letter made just for you.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Starfield />
      <FloatingHearts />
      <div className="relative z-10">
        <Hero />
        <LoveLetter />
        <Timeline />
        <Promises />
        <Finale />
        <footer className="relative z-10 py-12 text-center text-sm text-muted-foreground">
          Made with <span className="text-[var(--rose)]">♥</span> — for you, only you.
        </footer>
      </div>
    </main>
  );
}
