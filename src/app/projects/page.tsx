import { getJBLabsProjects } from "@/lib/projects";
import { ProjectDashboard } from "@/components/portfolio/project-dashboard";
import { ComingSoonCard } from "@/components/portfolio/coming-soon-card";

export default async function ProjectsPage() {
  const projects = await getJBLabsProjects();

  return (
    <main className="max-w-6xl mx-auto py-24 px-6 space-y-12">
      <section className="space-y-4">
        <h1 className="text-6xl font-black tracking-tighter uppercase italic">
          Deployments<span className="text-blue-600">.</span>
        </h1>
        <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase pb-8 border-b border-zinc-900">
          {`// Total_Active_Projects: ${projects.length}`}
        </p>
      </section>

      <div className="grid gap-12">
        {projects.map((project) => (
          <ProjectDashboard key={project.id} project={project} />
        ))}
{/* Future Lab Deployments */}
        <ComingSoonCard 
          title="Project: GitS:Arise" 
          estimate="Q3 2026 - Q1 2027" 
        />
      </div>
    </main>
  );
}