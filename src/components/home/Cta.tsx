
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-16 bg-plumbing-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dottedPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dottedPattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plumbing Emergency?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-0">
              Don't wait! Our expert plumbers are on call 24/7 to solve your plumbing problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="flex items-center gap-2 bg-white text-plumbing-800 hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              <span className="font-bold">(800) 878-4242</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-plumbing-800">
              Schedule Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
