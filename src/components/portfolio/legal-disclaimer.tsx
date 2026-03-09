export function LegalDisclaimer() {
  return (
    <div className="mt-12 p-4 border-l-2 border-zinc-800 bg-zinc-950/50 text-[10px] font-mono leading-relaxed text-zinc-500 uppercase tracking-widest">
      <p>
        <span className="text-zinc-300 font-bold">{/* ATTRIBUTION: */}</span> Astro Inferno and all related 
        world-building, mechanics, and terminology are the intellectual property of 
        <span className="text-blue-500"> Häxan Studios</span>. All rights reserved to their respective owners. 
        The JB Labs Companion App is an unofficial tool developed using publicly available manual data 
        for the sole purpose of enhancing the tabletop experience.
      </p>
    </div>
  );
}