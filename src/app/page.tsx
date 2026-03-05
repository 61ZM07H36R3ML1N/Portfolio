import { getProjects } from "@/lib/projects";

export default async function HomePage() {
  const projects = await getProjects(); // Core logic: Fetching data on the server

  return (
    <main>
      <h1>Brian Jamiel | Portfolio</h1>
      <div>
        {projects.map((project: any) => (
          <section key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* We will swap these basic tags for MagicUI later */}
          </section>
        ))}
      </div>
    </main>
  );
}