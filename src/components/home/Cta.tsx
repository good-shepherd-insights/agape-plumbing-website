import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
const Cta = () => {
  return <section className="py-16 bg-plumbing-800 text-white overflow-hidden relative border-t-4 border-black">
      {/* Brutalist geometric shapes */}
      
      
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="font-mono uppercase text-sm mb-2 inline-block">Emergency Service</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Plumbing Emergency?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-0">
              Don't wait! Our expert plumbers are on call 24/7 to solve your plumbing problems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="flex items-center gap-2 bg-white text-plumbing-800 hover:bg-gray-100 border-2 border-black rounded-md hover:translate-y-[-4px]">
              <Phone className="h-5 w-5" />
              <span className="font-bold">(800) 878-4242</span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-plumbing-800 rounded-md hover:translate-y-[-4px]">
              Schedule Online
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Cta;