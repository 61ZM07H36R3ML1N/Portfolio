import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";

// Next.js 15 requires params to be a Promise
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 1. Unwrap the params first
  const { id } = await params;

  // 2. Use the unwrapped ID for Firestore
  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return notFound();
  }

  const project = docSnap.data();

  return (
    <main className="max-w-4xl mx-auto py-24 px-6 space-y-12">
      <section className="space-y-4">
        <h1 className="text-7xl font-black tracking-tighter uppercase italic text-brand-blue">
          {project.title}
        </h1>
        <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
          {`// Deployment_ID: ${id} // Status: ${project.status}`}
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-12 border-y border-zinc-900 py-12">
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">System Engine</h3>
          <p className="text-xl font-bold">{project.engine}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">Dice Mechanics</h3>
          <p className="text-xl font-bold">{project.dice_system}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase mb-4 tracking-widest">Current Version</h3>
          <p className="text-xl font-bold">{project.version}</p>
        </div>
      </div>

      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold italic underline decoration-brand-blue underline-offset-8 uppercase tracking-tight">
          Project Lore & Mechanics
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mt-8">
          {project.description}
        </p>
      </article>

{/* Technical Deep Dive Section */}
<section className="pt-16 space-y-12">
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-zinc-900" />
    <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em]">Technical_Deep_Dive</h2>
    <div className="h-px flex-1 bg-zinc-900" />
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Mechanic 1: Blackjack Engine */}
    <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50 hover:border-brand-blue/30 transition-colors">
      <h3 className="text-brand-blue font-bold uppercase tracking-tight mb-2">Blackjack Engine</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        A unique d20 Roll-Under system where players aim to get as close to their attribute score as possible without going over. This creates a high-tension &quot;push your luck&quot; dynamic in every encounter.
      </p>
    </div>

    {/* Mechanic 2: Looter-Shooter Progression */}
    <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50 hover:border-brand-blue/30 transition-colors">
      <h3 className="text-brand-blue font-bold uppercase tracking-tight mb-2">Looter-Shooter Progression</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        Integrating ARPG-style loot drops into a tabletop environment. Weaponry and gear feature procedural traits, managed seamlessly via the companion app&apos;s inventory system.
      </p>
    </div>

    {/* Mechanic 3: Real-Time Companion Sync */}
    <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50 hover:border-brand-blue/30 transition-colors">
      <h3 className="text-brand-blue font-bold uppercase tracking-tight mb-2">Real-Time Sync</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        Built with Firebase and React, the Astro Inferno Companion App ensures that character health, ammo, and loot updates are reflected instantly across the GM&apos;s terminal and player devices.
      </p>
    </div>

    {/* Mechanic 4: Custom VTT Integration */}
    <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/50 hover:border-brand-blue/30 transition-colors">
      <h3 className="text-brand-blue font-bold uppercase tracking-tight mb-2">Custom VTT Engine</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        A streamlined Virtual Tabletop designed specifically for Astro Inferno’s space-combat distance tracking and atmospheric environmental effects.
      </p>
    </div>
  </div>
</section>

    </main>
  );
}