import { getJBLabsProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getJBLabsProjects();

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-extrabold tracking-tighter mb-2">JB LABS</h1>
      <p className="text-zinc-500 mb-12">Experimental Development by Grem & RJ</p>

      <div className="grid gap-12">
        {projects.map((project) => (
          <section key={project.id} className="group border-l-2 border-zinc-800 pl-8 transition-colors hover:border-white">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <span className="text-xs uppercase tracking-widest bg-zinc-900 px-2 py-1 rounded text-zinc-400">
                {project.status}
              </span>
            </div>
            
            <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
              {project.description}
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="block text-zinc-600 uppercase text-[10px] font-bold">Engine</span>
                <p>{project.engine}</p>
              </div>
              <div>
                <span className="block text-zinc-600 uppercase text-[10px] font-bold">Version</span>
                <p>{project.version}</p>
              </div>
              {project.dice_system && (
                <div>
                  <span className="block text-zinc-600 uppercase text-[10px] font-bold">System</span>
                  <p>{project.dice_system}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}