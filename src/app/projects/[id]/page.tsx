import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const docRef = doc(db, "projects", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return notFound();
  }

  const project = docSnap.data();

  return (
    <main className="max-w-4xl mx-auto py-24 px-6 space-y-12">
      <section className="space-y-4">
        <h1 className="text-7xl font-black tracking-tighter uppercase">{project.title}</h1>
        <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
          Project_ID: {params.id} {/* Status: */} {project.status}
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
        <h2 className="text-2xl font-bold italic underline decoration-blue-500 underline-offset-8">Project Lore & Mechanics</h2>
        <p className="text-zinc-400 text-lg leading-relaxed mt-8">
          {project.description}
        </p>
        {/* You can add more detailed lore sections here manually or from Firestore */}
      </article>
    </main>
  );
}