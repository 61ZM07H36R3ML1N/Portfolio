export function ComingSoonCard({ title, estimate }: { title: string; estimate: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-dashed border-zinc-800 bg-zinc-950/20 p-8 transition-all duration-500 hover:border-zinc-700">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">
            {/* Incoming_Transmission */}
          </span>
          <h2 className="text-4xl font-black tracking-tighter uppercase italic text-zinc-600">
            {title}
          </h2>
          <p className="text-zinc-700 font-mono text-xs uppercase tracking-widest">
            Est_Deployment: {estimate}
          </p>
        </div>
        
        <div className="px-6 py-2 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-700 uppercase tracking-widest">
          Status: Encrypted
        </div>
      </div>
      
      {/* Background Pattern for 'Coming Soon' look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
}