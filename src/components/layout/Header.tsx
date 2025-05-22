
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white border-b-2 border-black py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-plumbing-800">Agape</span> <span className="text-plumbing-700">Plumbing & Rooter</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground border-2 border-black p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors uppercase text-sm">Home</Link>
          <Link to="/services" className="font-medium hover:text-primary transition-colors uppercase text-sm">Services</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors uppercase text-sm">About</Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors uppercase text-sm">Contact</Link>
          <Button className="flex items-center gap-2 bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black" size="lg">
            <Phone className="h-4 w-4" />
            <span className="font-bold">(800) 878-4242</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } border-l-2 border-black`}
        >
          <div className="flex justify-between p-4 border-b-2 border-black">
            <span className="text-xl font-bold">Menu</span>
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground border-2 border-black p-1"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col pt-8">
            <Link to="/" className="text-xl font-medium py-4 px-6 border-b border-gray-200 uppercase" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/services" className="text-xl font-medium py-4 px-6 border-b border-gray-200 uppercase" onClick={toggleMobileMenu}>Services</Link>
            <Link to="/about" className="text-xl font-medium py-4 px-6 border-b border-gray-200 uppercase" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="text-xl font-medium py-4 px-6 border-b border-gray-200 uppercase" onClick={toggleMobileMenu}>Contact</Link>
            <div className="p-6">
              <Button className="flex items-center gap-2 w-full bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black" size="lg">
                <Phone className="h-4 w-4" />
                <span className="font-bold">(800) 878-4242</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
