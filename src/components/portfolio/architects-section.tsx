import { getJBLabsArchitects } from "@/lib/architects";

export async function ArchitectsSection() {
  const architects = await getJBLabsArchitects();

  return (
    <section id="architects" className="py-24 border-t border-zinc-900">
      <h2 className="text-sm font-mono text-blue-500 mb-12 tracking-[0.3em] uppercase underline underline-offset-8">
        {/* Authorized_Architects */}
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        {architects.map((person) => (
          <div key={person.id} className="space-y-6 group">
            <div className="h-1 w-12 bg-blue-500 transition-all group-hover:w-24" />
            <h3 className="text-4xl font-black tracking-tighter uppercase italic">{person.name}</h3>
            <p className="text-zinc-500 font-mono text-xs tracking-wider">{person.role}</p>
            <p className="text-zinc-400 leading-relaxed max-w-md">{person.bio}</p>
            <div className="flex gap-6">
               {person.github && <a href={person.github} className="text-[10px] font-bold border-b border-zinc-800 pb-1 hover:border-white transition-colors">GITHUB_REPO</a>}
               {person.linkedin && <a href={person.linkedin} className="text-[10px] font-bold border-b border-zinc-800 pb-1 hover:border-white transition-colors">LINKEDIN_PROF</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}