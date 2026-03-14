import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LegalDisclaimer } from "@/components/portfolio/legal-disclaimer";

// Next.js 15 requires params to be a Promise
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;

  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return notFound();
  }

  const project = docSnap.data();

  return (
    <main className="max-w-4xl mx-auto py-24 px-6 space-y-12">
      {/* Project Header */}
      <section className="space-y-4">
        <h1 className="text-7xl font-black tracking-tighter uppercase italic text-blue-600">
          {project.title}
        </h1>
        <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
          {"// Deployment_ID: "}{id}{" // Status: "}{project.status}
        </p>
      </section>

      {/* Mechanical Breakdown Grid */}
      <div className="grid md:grid-cols-3 gap-12 border-y border-zinc-900 py-12">
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">System Engine</h3>
          <p className="text-xl font-bold text-white">{project.engine}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">Dice Mechanics</h3>
          <p className="text-xl font-bold text-white">{project.dice_system}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">Current Version</h3>
          <p className="text-xl font-bold text-white">{project.version}</p>
        </div>
      </div>

      {/* Main Lore & Description with Escaped Entities */}
      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold italic underline decoration-blue-600 underline-offset-8 uppercase tracking-tight">
          Project Lore & Mechanics
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mt-8">
          {/* Fix: Using &apos; and &quot; for ESLint compliance */}
          The Astro Inferno companion app is designed to translate the complex tabletop 
          experience into a streamlined digital interface. Featuring a &quot;Blackjack&quot; 
          roll-under engine, it honors the original vision while providing real-time 
          synchronization for the GM&apos;s terminal.
        </p>
        <p className="text-zinc-400 text-lg leading-relaxed">
          {project.description}
        </p>
      </article>

      {/* Technical Deep Dive */}
      <section className="pt-16 space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-900" />
          <h2 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">Development_Analysis</h2>
          <div className="h-px flex-1 bg-zinc-900" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50">
            <h3 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">Unofficial Companion Logic</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Engineered to translate Häxan Studios&apos; manual mechanics into a high-performance React interface.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50">
            <h3 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">Real-Time Sync</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Utilizing Firebase to synchronize character health and equipment across the JB Labs terminal.
            </p>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <LegalDisclaimer />
      
      {/* Footer Navigation: Fix using <Link> instead of <a> */}
      <div className="pt-12 border-t border-zinc-900">
        <Link href="/projects" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-blue-500 transition-colors">
          &larr; Return_to_Deployments
        </Link>
      </div>
    </main>
  );
}