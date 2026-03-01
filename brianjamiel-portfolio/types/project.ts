export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[]; // e.g., ["Next.js", "TypeScript", "Firebase"]
  
  // Professional metrics for Full-Stack/SysAdmin showcase
  metrics?: {
    latency?: string;
    uptime?: string;
    deployment: "Vercel" | "Firebase" | "Self-Hosted";
  };

  // Professional case study fields
  caseStudy: {
    challenge: string; // The technical problem solved
    solution: string;  // How the stack/architecture addressed it
  };

  links: {
    github: string;
    live?: string;
  };
}
