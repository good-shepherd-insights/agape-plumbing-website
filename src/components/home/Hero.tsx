import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';

const Hero = () => {
  const { home, company } = useContent();
  
  return (
    <section className="bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-8 sm:py-16 border-b-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Simplified */}
          <div>
            <span className="inline-block bg-white text-plumbing-900 px-3 py-1 text-sm font-bold mb-4 border border-black rounded">
              {home.hero.emergencyBanner}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase leading-tight">
              {home.hero.trustedHeading} <br className="hidden md:block" />
              <span className="text-primary-200">{home.hero.expertSubheading}</span>
            </h1>
            <p className="text-lg mb-6 max-w-xl opacity-90">
              {company.name} {home.hero.description2}
            </p>
            
            {/* Simplified Button Layout */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button size="lg" className="bg-white text-plumbing-900 border border-black hover:bg-gray-100 font-bold">
                {home.hero.cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-transparent border-white text-white hover:bg-white hover:text-plumbing-800 font-bold"
              >
                <Link to="/services">{home.hero.serviceButtonText}</Link>
              </Button>
            </div>
            
            {/* Simplified Phone Section */}
            <div className="flex items-center">
              <div className="bg-white rounded p-2 mr-3 border border-black">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-mono uppercase opacity-80">{home.hero.callText}</p>
                <p className="text-xl font-bold">{company.phone}</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dramatically Simplified Form */}
          <div className="lg:pl-8">
            <div className="bg-white p-6 rounded border-2 border-black">
              <h2 className="text-plumbing-800 text-xl font-bold mb-4 uppercase">
                {home.hero.requestFormTitle}
              </h2>
              <form className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded focus:border-plumbing-800 focus:outline-none" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-gray-300 rounded focus:border-plumbing-800 focus:outline-none" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded focus:border-plumbing-800 focus:outline-none" 
                />
                <textarea 
                  placeholder="How can we help you?" 
                  rows={3} 
                  className="w-full p-3 border border-gray-300 rounded focus:border-plumbing-800 focus:outline-none resize-none"
                />
                <Button className="w-full bg-plumbing-800 text-white border border-black hover:bg-plumbing-700 font-bold py-3">
                  {home.hero.requestFormButton}
                </Button>
              </form>
              <p className="text-center text-sm text-gray-600 mt-3 opacity-80">
                {home.hero.requestFormConfirmation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;