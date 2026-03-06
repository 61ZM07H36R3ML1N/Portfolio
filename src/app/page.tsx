import { getJBLabsProjects } from "@/lib/projects";
import { getJBLabsArchitects } from "@/lib/architects";

export default async function Home() {
  const [projects, architects] = await Promise.all([
    getJBLabsProjects(),
    getJBLabsArchitects(),
  ]);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 space-y-32">
      {/* Hero / Projects Section */}
      <section>
        <h1 className="text-6xl font-black tracking-tighter mb-12">JB LABS</h1>
        <div className="grid gap-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
               {/* ... Your project display logic from before ... */}
            </div>
          ))}
        </div>
      </section>

      {/* Architects Section */}
      <section className="border-t border-zinc-900 pt-20">
        <h2 className="text-3xl font-bold mb-12 italic text-zinc-500">// THE ARCHITECTS</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {architects.map((person) => (
            <div key={person.id} className="space-y-4">
              <h3 className="text-2xl font-bold uppercase tracking-tight">{person.name}</h3>
              <p className="text-zinc-500 font-mono text-sm">{person.role}</p>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                {person.bio}
              </p>
              <div className="flex gap-4 pt-2">
                {person.github && <a href={person.github} className="text-xs underline text-zinc-600 hover:text-white">GITHUB</a>}
                {person.linkedin && <a href={person.linkedin} className="text-xs underline text-zinc-600 hover:text-white">LINKEDIN</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}