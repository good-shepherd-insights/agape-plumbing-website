
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
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
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="font-medium hover:text-primary transition-colors">Services</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          <Button className="flex items-center gap-2 bg-plumbing-800 hover:bg-plumbing-700" size="lg">
            <Phone className="h-4 w-4" />
            <span className="font-bold">(800) 878-4242</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-background z-50 md:hidden transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 pt-8">
            <Link to="/" className="text-xl font-medium" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/services" className="text-xl font-medium" onClick={toggleMobileMenu}>Services</Link>
            <Link to="/about" className="text-xl font-medium" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="text-xl font-medium" onClick={toggleMobileMenu}>Contact</Link>
            <Button className="flex items-center gap-2 mt-4 bg-plumbing-800 hover:bg-plumbing-700" size="lg">
              <Phone className="h-4 w-4" />
              <span className="font-bold">(800) 878-4242</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
