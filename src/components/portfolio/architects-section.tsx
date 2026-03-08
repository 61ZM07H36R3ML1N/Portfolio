import { getJBLabsArchitects } from "@/lib/architects";

export async function ArchitectsSection() {
  const architects = await getJBLabsArchitects();

  return (
    <section id="architects" className="py-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-12">
          {/* THE_ARCHITECTS */}
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {architects.map((person) => (
            <div key={person.id} className="space-y-4">
              <h3 className="text-5xl font-black tracking-tighter uppercase italic">{person.name}</h3>
              <p className="text-zinc-500 font-mono text-xs">{person.role}</p>
              <p className="text-zinc-400 leading-relaxed max-w-md">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}