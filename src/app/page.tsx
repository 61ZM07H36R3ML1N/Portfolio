import { getJBLabsProjects } from "@/lib/projects";
import { ProjectDashboard } from "@/components/portfolio/project-dashboard";

export default async function Home() {
  const projects = await getJBLabsProjects();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-blue selection:text-white">
      <div className="max-w-7xl mx-auto py-24 px-6 space-y-24">
        
        {/* Brand Header: High Contrast & Minimal */}
        <section className="space-y-6 border-l-4 border-brand-blue pl-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase italic">
            JB <span className="text-brand-blue">Labs</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-500 font-mono uppercase tracking-widest text-sm">
            <span>[ System Status: Online ]</span>
            <span className="hidden md:block">|</span>
            <span>[ Environment: Production ]</span>
            <span className="hidden md:block">|</span>
            <span>[ Specialist: TTRPG & Web Tools ]</span>
          </div>
        </section>

        {/* Projects Grid: Responsive & High Performance */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-sm font-bold text-brand-purple uppercase tracking-[0.3em]">
              Active Deployments
            </h3>
            <span className="text-zinc-600 text-xs font-mono">
              Total_Projects: {projects.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <ProjectDashboard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Footer Hint */}
        <footer className="pt-12 border-t border-zinc-900 flex justify-between text-[10px] text-zinc-700 uppercase tracking-widest font-mono">
          <span>Built with Next.js 15 + Firebase</span>
          <span>© 2026 JB Labs / All Rights Reserved</span>
        </footer>
      </div>
    </main>
  );
}
