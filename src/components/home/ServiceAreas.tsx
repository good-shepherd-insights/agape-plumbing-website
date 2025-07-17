
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import type { EmblaOptionsType } from 'embla-carousel';

const ServiceAreas = () => {
  const { contact, company } = useContent();
  const isMobile = useIsMobile();
  
  // Early return if contact or serviceAreas data is not available
  if (!contact || !contact.serviceAreas || !contact.serviceAreas.areas) {
    return null;
  }
  
  // Create a reference to the carousel API
  const [api, setApi] = React.useState<any>(null);
  
  // Preload only visible slides on mobile to improve performance
  const carouselOptions = React.useMemo<EmblaOptionsType>(() => ({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  }), []);
  
  // Render service area card content
  const renderAreaCard = (area: any, index: number) => (
    <div className="brutalist-card p-6">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-plumbing-800 mr-2" />
        <h3 className="text-xl font-bold uppercase">{area.name}</h3>
      </div>
      <ul className="mb-4 border-l-2 border-black pl-4">
        {area.cities?.map((city: string, cityIndex: number) => (
          <li key={cityIndex} className="mb-1 text-gray-600">{city}</li>
        )) || []}
      </ul>
      <Link to={`/areas`} className="text-plumbing-800 font-bold uppercase hover:underline inline-flex items-center">
        View all cities
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 brutalist-section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Locations</span>
          <h2 className="text-plumbing-800 mb-4 uppercase">{contact.serviceAreas.title}</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            {contact.serviceAreas.description}
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <Carousel
              opts={carouselOptions}
              setApi={setApi}
              className="w-full">
              <CarouselContent>
                {contact.serviceAreas.areas.map((area, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    {renderAreaCard(area, index)}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 translate-x-0 mr-2" />
                <CarouselNext className="static translate-y-0 translate-x-0 ml-2" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contact.serviceAreas.areas.map((area, index) => (
              <div key={index}>
                {renderAreaCard(area, index)}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">{contact.serviceAreas.cta.description}</p>
          <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}>
          <Button size="lg" className="border-2 border-black bg-plumbing-800 rounded-md">{contact.serviceAreas.cta.text}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
