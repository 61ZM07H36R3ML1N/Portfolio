import { getJBLabsProjects } from "@/lib/projects";
import { ProjectDashboard } from "@/components/portfolio/project-dashboard";

export default async function Home() {
  const projects = await getJBLabsProjects();

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto py-24 px-6 space-y-20">
        
        {/* Brand Header */}
        <section className="space-y-4">
          <h1 className="text-8xl font-black tracking-tighter leading-none">JB LABS.</h1>
          <p className="text-xl text-zinc-500 max-w-xl">
            Collaborative development specializing in TTRPG mechanics and web-based gaming tools.
          </p>
        </section>

        {/* Projects Dashboard List */}
        <section className="space-y-12">
          {projects.map((project) => (
            <ProjectDashboard key={project.id} project={project} />
          ))}
        </section>

      </div>
    </main>
  );
}