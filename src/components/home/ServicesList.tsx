
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useContent } from '@/hooks/use-content';

const ServicesList = () => {
  const { servicesList } = useContent();
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 brutalist-section">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Services</span>
          <h2 className="text-plumbing-800 mb-4 uppercase">{servicesList.title}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            {servicesList.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.services.map((service) => (
            <div key={service.id} className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-3 text-plumbing-700 uppercase">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <Button variant="outline" className="w-full border-2 border-black rounded-md hover:translate-y-[-4px]">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
        
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
