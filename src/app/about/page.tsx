export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-24 px-6 space-y-20">
      {/* Brand Mission */}
      <section className="space-y-6">
        <h1 className="text-7xl font-black tracking-tighter uppercase italic">
          The Lab<span className="text-blue-600">.</span>
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          JB Labs is a collaborative development studio founded by Brian and RJ. 
          We specialize in bridging the gap between digital efficiency and 
          analog tabletop depth, creating tools for games that push the 
          boundaries of the chosen genre.
        </p>
      </section>

      {/* Philosophy Grid */}
      <section className="grid md:grid-cols-2 gap-12 border-t border-zinc-900 pt-12">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">{`// Our_Vision`}</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            To build a cohesive ecosystem for TTRPG players where the companion app 
            isn&apos;t just a utility, but an immersive extension of the game world.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">{`// The_Stack`}</h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Utilizing Next.js 15, Firebase, and Tailwind v4 to ensure our 
            deployments are as fast as they are functional.
          </p>
        </div>
      </section>

      {/* CTA to Projects */}
      <section className="bg-zinc-950 border border-zinc-900 p-12 rounded-2xl text-center space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Ready to see our deployments?</h3>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">
          Explore the current state of Astro Inferno and our other experimental web tools.
        </p>
        <div className="pt-4">
          <a href="/projects" className="inline-block bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors">
            View_Projects
          </a>
        </div>
      </section>
    </main>
  );
}