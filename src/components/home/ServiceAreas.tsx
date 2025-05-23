
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';

const ServiceAreas = () => {
  const { contact } = useContent();
  
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contact.serviceAreas.areas.map((area, index) => (
            <div key={index} className="brutalist-card p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-xl font-bold uppercase">{area.name}</h3>
              </div>
              <ul className="mb-4 border-l-2 border-black pl-4">
                {area.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="mb-1 text-gray-600">{city}</li>
                ))}
              </ul>
              <Link to={`/areas/${area.name.toLowerCase().replace(' ', '-')}`} className="text-primary font-bold uppercase hover:underline inline-flex items-center">
                View all cities
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">{contact.serviceAreas.cta.description}</p>
          <Button size="lg" className="border-2 border-black bg-plumbing-800 rounded-md hover:translate-y-[-4px]">{contact.serviceAreas.cta.text}</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
