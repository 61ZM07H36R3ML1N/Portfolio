import { GlitchCard } from "@/components/ui/glitch-card";
import { getDynamicProjects } from "@/lib/projects";

export default async function ProjectSection() {
  const projects = await getDynamicProjects();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl mb-12 uppercase tracking-[0.3em] text-center">
          {"//_DATABASE_QUERY_RESULTS"}
        </h2>
        
        {projects.length === 0 ? (
          <p className="text-center font-mono text-muted-foreground animate-pulse">
            {"[!] NO_DATA_FOUND_IN_FIRESTORE"}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <GlitchCard 
                key={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
                tags={project.tags || []}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}