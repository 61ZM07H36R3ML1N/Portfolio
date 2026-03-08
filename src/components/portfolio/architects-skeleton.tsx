export function ArchitectsSkeleton() {
  return (
    <section className="py-24 border-t border-zinc-900 bg-black animate-pulse">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-4 w-32 bg-zinc-800 mb-12 rounded" />
        <div className="grid md:grid-cols-2 gap-16">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-12 w-64 bg-zinc-800 rounded" />
              <div className="h-4 w-24 bg-zinc-900 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-zinc-900 rounded" />
                <div className="h-4 w-3/4 bg-zinc-900 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}