
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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

const ServicesList = () => {
  const { servicesList } = useContent();
  const isMobile = useIsMobile();
  
  // Early return if servicesList is not available
  if (!servicesList || !servicesList.services) {
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
  
  // Render service card content
  const renderServiceCard = (service: any) => (
    <div className="brutalist-card p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-3 text-plumbing-800 uppercase">{service.title}</h3>
        <p className="mb-4 text-gray-600">{service.description}</p>
        <ul className="mb-6 space-y-2">
          {service.features?.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          )) || []}
        </ul>
      </div>
      <Link to={service.link}>
        <Button variant="outline" className="w-full border border-sky-200 rounded-lg hover:bg-sky-50 text-plumbing-800">
          <span>Learn more about {service.title}</span>
        </Button>
      </Link>
    </div>
  );
  
  return (
    <section className="py-16 md:py-24 bg-sky-50 brutalist-section">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Services</span>
          <h2 className="text-plumbing-800 mb-4 uppercase">{servicesList.title}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            {servicesList.description}
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <Carousel
              opts={carouselOptions}
              setApi={setApi}
              className="w-full">
              <CarouselContent>
                {servicesList.services.map((service) => (
                  <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                    {renderServiceCard(service)}
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
            {servicesList.services.map((service) => (
              <div key={service.id}>
                {renderServiceCard(service)}
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="border-2 border-black bg-plumbing-800 rounded-md hover:translate-y-[-4px]">{servicesList.cta}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
