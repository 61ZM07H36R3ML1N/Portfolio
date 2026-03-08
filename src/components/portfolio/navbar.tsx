import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="text-xl font-bold text-white">
        <Link href="/">Portfolio</Link>
      </div>
      <div className="space-x-8 text-sm font-medium text-gray-400">
        <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
      </div>
    </nav>
  );
};
