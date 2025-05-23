import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useContent } from '@/hooks/use-content';

const Cta = () => {
  const { home, company } = useContent();
  
  return <section className="py-16 bg-plumbing-800 text-white overflow-hidden relative border-t-4 border-black">
      {/* Brutalist geometric shapes */}
      
      
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="font-mono uppercase text-sm mb-2 inline-block">{home.cta.title}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">{home.cta.heading}</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-0">
              {home.cta.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="flex items-center gap-2 bg-white text-plumbing-800 hover:bg-gray-100 border-2 border-black rounded-md hover:translate-y-[-4px]">
              <Phone className="h-5 w-5" />
              <span className="font-bold">{company.phone}</span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white rounded-md hover:translate-y-[-4px] text-slate-950">
              {home.cta.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Cta;