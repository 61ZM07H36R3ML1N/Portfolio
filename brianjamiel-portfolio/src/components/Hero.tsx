import { RetroGrid } from "@/components/ui/retro-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Retro Grid with your Primary color */}
      <RetroGrid className="opacity-40" />

      <div className="z-10 flex flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
          Brian <span className="text-secondary">Jamiel</span>
        </h1>
        
        <div className="max-w-xl text-lg font-mono text-muted md:text-xl">
          <TypingAnimation duration={40} delay={800}>
            {"> IT Assistant by day, Architect of digital worlds by night. Currently crafting Astro Inferno."}
          </TypingAnimation>
        </div>

        {/* Call to action button with Electric Violet shadow */}
        <button className="mt-4 rounded-md bg-primary px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-105">
          Access Database
        </button>
      </div>
    </section>
  );
}