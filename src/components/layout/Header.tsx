
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useContent } from '@/hooks/use-content';
const logo = '/agape-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation, company } = useContent();
  
  // Early return if navigation or company data is not available
  if (!navigation || !company) {
    return null;
  }

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
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white border-b border-sky-100 py-2 shadow-sm' 
          : 'bg-white/95 py-3'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center group transition-transform hover:translate-y-[-2px] duration-200"
          aria-label={navigation.accessibility.companyLogo}
        >
          <div className="relative">
            <img 
              src={logo} 
              width={80} 
              height="auto" 
              alt={navigation.accessibility.companyLogo} 
              className="h-12 sm:h-16 lg:h-20 w-auto max-w-[200px] sm:max-w-[280px] lg:max-w-[340px] object-contain mr-3 transition-all duration-200" 
              loading="eager"
            />
          </div>
          </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-plumbing-800 hover:bg-plumbing-700 text-white border-2 border-black p-2 rounded-md transition-transform hover:translate-y-[-2px] active:translate-y-0 shadow-md hover:shadow-lg active:shadow-[2px_2px_0_0_#000] duration-200"
          onClick={toggleMobileMenu}
          aria-label={navigation.mobileMenu.toggle}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.links?.map((link, index) => (
            <Link 
              key={index}
              to={link.url} 
              className="font-bold uppercase text-sm tracking-wide relative px-1 py-2 group transition-colors hover:text-plumbing-800"
            >
              {link.title}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-plumbing-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )) || []}
          <a 
            href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 bg-plumbing-800 hover:bg-plumbing-700 text-white border border-sky-200 rounded-md hover:translate-y-[-2px] active:translate-y-0 shadow-md hover:shadow-lg active:shadow-[2px_2px_0_0_#000] transition-all duration-200 h-11 px-8 text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            <span className="font-bold md:hidden lg:inline">{company.phone}</span>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-200 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } border-l-4 border-black shadow-[-8px_0_12px_rgba(0,0,0,0.1)]`}
        >
          <div className="flex justify-between items-center p-4 border-b-4 border-black bg-plumbing-800 text-white">
            <span className="text-xl font-black uppercase">{navigation.mobileMenu.title}</span>
            <button 
              onClick={toggleMobileMenu}
              className="bg-white text-plumbing-800 border-2 border-black p-2 rounded-md"
              aria-label={navigation.mobileMenu.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col pt-6">
            {navigation.links?.map((link, index) => (
              <Link 
                key={index}
                to={link.url} 
                className="text-lg font-bold py-4 px-6 border-b-2 border-gray-200 uppercase flex items-center justify-between group" 
                onClick={toggleMobileMenu}
              >
                {link.title}
                <span className="text-plumbing-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
              </Link>
            )) || []}
            <div className="p-6">
              <a 
                href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 w-full bg-plumbing-800 hover:bg-plumbing-700 text-white border-2 border-black rounded-md shadow-md hover:shadow-lg active:shadow-[2px_2px_0_0_#000] hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200 h-11 px-8 text-sm font-medium justify-center"
                onClick={toggleMobileMenu}
              >
                <Phone className="h-4 w-4" />
                <span className="font-bold">{company.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
