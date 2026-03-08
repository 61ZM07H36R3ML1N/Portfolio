import { Suspense } from "react";
import { getJBLabsProjects } from "@/lib/projects";
import { ProjectDashboard } from "@/components/portfolio/project-dashboard";
import { ArchitectsSection } from "@/components/portfolio/architects-section";
import { ArchitectsSkeleton } from "@/components/portfolio/architects-skeleton";

export default async function Home() {
  // We fetch projects at the top level so they render immediately
  const projects = await getJBLabsProjects();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto py-24 px-6 space-y-32">
        
        {/* Brand Header */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-1 bg-blue-600" />
            <h1 className="text-8xl font-black tracking-tighter leading-none uppercase">
              JB LABS<span className="text-blue-600">.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] pt-4 border-t border-zinc-900">
            <span>[ System Status: Online ]</span>
            <span>[ Environment: Production ]</span>
            <span>[ Specialist: TTRPG & Web Tools ]</span>
          </div>
        </section>

        {/* Active Deployments Section */}
        <section className="space-y-12">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em]">
              Active Deployments
            </h2>
            <span className="text-[10px] font-mono text-zinc-600">
              Total_Projects: {projects.length}
            </span>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectDashboard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Meet the Architects - Wrapped in Suspense */}
        <Suspense fallback={<ArchitectsSkeleton />}>
          <ArchitectsSection />
        </Suspense>

        {/* Simple Footer */}
        <footer className="pt-20 pb-10 border-t border-zinc-900 flex justify-between items-center text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          <p>Built with Next.js 15 + Firebase</p>
          <p>© 2026 JB Labs / All Rights Reserved</p>
        </footer>
      </div>
    </main>
  );
}
