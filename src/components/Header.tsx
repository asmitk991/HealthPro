import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Link';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-black text-white p-1">iVF</span>
              <span className="ml-1 text-xl">Pulse</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/donor">Donor Programme</Link>
            <Link href="/preservation">Fertility Preservation</Link>
            <Link href="/treatments">Advanced Treatments</Link>
            <Link href="/infertility">Infertility Treatments</Link>
            <Link href="/testing">IVF Testing</Link>
            <Link href="/about">About Us</Link>
          </nav>

          <div className="flex items-center">
            <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Talk to Us →
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}