import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter hover:text-blue-500 transition-colors">
          JB LABS<span className="text-blue-500">.</span>
        </Link>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Deployments</Link>
          <Link href="#architects" className="hover:text-white transition-colors">Architects</Link>
          <Link href="/contact" className="hover:text-white transition-colors underline decoration-blue-500 underline-offset-4">Inquiries</Link>
        </div>
      </div>
    </nav>
  );
}