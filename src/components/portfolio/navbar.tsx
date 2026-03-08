import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-black border-b border-zinc-800">
      {/* ... other links ... */}
      
      <Link href="/inquiries">
        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 
          transition-all duration-300
          shadow-[0_0_20px_rgba(37,99,235,0.4)] 
          hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]
          hover:scale-105">
          Inquiries
        </Button>
      </Link>
    </nav>
  );
}
