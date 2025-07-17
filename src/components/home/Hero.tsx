import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';

const Hero = () => {
  const { home, company } = useContent();
  
  return (
    <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-14 md:py-14 border-b-4 border-black overflow-hidden">
      {/* Simplified background for mobile performance */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-plumbing-200 transform -rotate-12"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-8">
            <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              {home.hero.emergencyBanner}
            </span>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
                {home.hero.trustedHeading} <br className="hidden md:block" />
                <span className="text-plumbing-200">{home.hero.expertSubheading}</span>
              </h1>
              {/* Optimized LCP element with critical CSS class */}
              <p className="hero-text-critical text-xl md:text-2xl mb-8 max-w-xl leading-relaxed font-medium">
                {company.name} {home.hero.description2}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={`tel:${company.phone.replace(/\D/g, '')}`}>
                <Button 
                  size="lg" 
                  className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] transition-all duration-300 px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {home.hero.cta}
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold rounded-md hover:translate-y-[-4px] transition-all duration-300 px-8 py-4"
              >
                <Link to="/services" className="flex items-center">
                  {home.hero.serviceButtonText}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="bg-white rounded-md p-3 mr-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                  <Phone className="h-6 w-6 text-plumbing-800" />
                </div>
                <div>
                  <p className="text-sm uppercase font-mono font-bold text-plumbing-200">{home.hero.callText}</p>
                  <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="text-2xl font-black hover:underline">
                    {company.phone}
                  </a>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-4 text-plumbing-200">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="text-sm font-bold">24/7 Service</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-sm font-bold">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 md:p-10 rounded-lg border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)] transform hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black mr-4">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h2 className="text-plumbing-800 text-2xl md:text-3xl font-black uppercase">
                  {home.hero.requestFormTitle}
                </h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder={home.hero.form.placeholders.name} 
                    className="w-full p-4 brutalist-input text-lg text-black" 
                    aria-label="Your Name"
                  />
                  <input 
                    type="tel" 
                    placeholder={home.hero.form.placeholders.phone} 
                    className="w-full p-4 brutalist-input text-lg text-black" 
                    aria-label="Phone Number"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder={home.hero.form.placeholders.email} 
                  className="w-full p-4 brutalist-input text-lg text-black" 
                  aria-label="Email Address"
                />
                <textarea 
                  placeholder={home.hero.form.placeholders.message} 
                  rows={4} 
                  className="w-full p-4 brutalist-input text-lg resize-none text-black" 
                  aria-label="Message"
                ></textarea>
                
                <Button 
                  className="w-full text-lg font-bold py-6 bg-plumbing-800 border-2 border-black rounded-md hover:translate-y-[-4px] transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]" 
                  size="lg"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  {home.hero.requestFormButton}
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 border-2 border-gray-200 rounded-md">
                <p className="text-center text-sm text-gray-600 font-medium">
                  {home.hero.requestFormConfirmation}
                </p>
              </div>
            </div>
            
            {/* Trust indicators */}
            {/* <div className="absolute -bottom-4 -right-4 bg-plumbing-600 text-white py-3 px-6 border-2 border-black rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <p className="font-bold text-sm uppercase">Free Estimates</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;