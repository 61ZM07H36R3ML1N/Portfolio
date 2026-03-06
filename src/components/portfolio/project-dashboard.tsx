import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ProjectDashboard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-900 bg-black p-8 shadow-2xl transition-all duration-300 hover:border-brand-blue/50">
      {/* Interactive Gradient Background (Hidden by default, fades in on hover) */}
      <div className="absolute -inset-px bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase group-hover:text-brand-blue transition-colors">
              {project.title}
            </h2>
            <p className="text-zinc-500 font-mono text-sm mt-1">
              ID: {project.id} {"\u00A0\u00A0"} VER: {project.version}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-brand-blue/50 text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tech Stack Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Environment</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-zinc-950 text-zinc-300 text-xs rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* System Specs Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Mechanical Specs</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span className="text-zinc-500">Engine:</span>
                <span className="text-zinc-200">{project.engine}</span>
              </li>
              {project.dice_system && (
                <li className="flex justify-between border-b border-zinc-900 pb-1">
                  <span className="text-zinc-500">System:</span>
                  <span className="text-zinc-200">{project.dice_system}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Description Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Objective</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
