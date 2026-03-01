// src/app/page.tsx
import Hero from "@/components/Hero";
import  ProjectSection  from "@/components/ProjectSection"; // This is where our Firestore cards live

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
    </main>
  );
}