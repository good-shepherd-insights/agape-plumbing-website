
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Emergency Plumbing',
    description: '24/7 emergency services for urgent plumbing issues including burst pipes, flooding, and sewer backups.',
    link: '/services/emergency',
    features: ['Available 24/7/365', 'Fast response times', 'Licensed professionals']
  },
  {
    id: 2,
    title: 'Repairs & Maintenance',
    description: 'Expert repairs and ongoing maintenance for all your household plumbing fixtures and systems.',
    link: '/services/repairs',
    features: ['Leak detection & repair', 'Fixture repairs', 'Preventative maintenance']
  },
  {
    id: 3,
    title: 'Installations & Replacements',
    description: 'Professional installation of new plumbing systems, fixtures, and appliances for your home or business.',
    link: '/services/installations',
    features: ['Fixture installations', 'Pipe replacement', 'Appliance hookups']
  },
  {
    id: 4,
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance for all types of water heaters including tankless systems.',
    link: '/services/water-heaters',
    features: ['Tankless water heaters', 'Traditional tanks', 'Energy-efficient options']
  },
  {
    id: 5,
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services to remove clogs and prevent future blockages in your plumbing.',
    link: '/services/drain-cleaning',
    features: ['Hydro jetting', 'Camera inspections', 'Preventative maintenance']
  },
  {
    id: 6,
    title: 'Commercial Plumbing',
    description: 'Specialized services for businesses, restaurants, multi-family dwellings, and commercial properties.',
    link: '/services/commercial',
    features: ['Minimal business disruption', 'Code compliance', 'Scheduled maintenance plans']
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 brutalist-section">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Services</span>
          <h2 className="text-plumbing-800 mb-4 uppercase">Our Professional Services</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            From emergency repairs to new installations, our experienced plumbers provide a comprehensive range of services to meet all your plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
                <Button variant="outline" className="w-full border-2 border-black hover:translate-y-[-4px]">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="border-2 border-black bg-plumbing-800 hover:translate-y-[-4px]">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
