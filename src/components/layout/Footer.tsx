
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Info, Check } from 'lucide-react';
import { useContent } from '@/hooks/use-content';

const Footer = () => {
  const { footer, company } = useContent();
  
  // Early return if footer or company data is not available
  if (!footer || !company) {
    return null;
  }
  
  const currentYear = new Date().getFullYear();
  const copyright = footer.copyright?.replace('{year}', currentYear.toString()) || '';
  
  return (
    <footer className="bg-plumbing-900 text-white pt-16 pb-8 border-t border-sky-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase">{company.name}</h3>
            <p className="mb-3">{footer.description}</p><p className="text-sky-200 font-semibold mb-4">Faithful service. Honest work.</p>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="hover:text-sky-200">{company.phone}</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${company.email}`} className="hover:text-sky-200 break-all">{company.email}</a>
            </div>
            <div className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 mt-1" />
              <span>Based in {company.address.city}, {company.address.state}<br />Service calls by appointment; no walk-in visits</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {footer.services?.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className="flex items-center hover:text-sky-200 transition-colors">
                    <Check className="h-4 w-4 mr-2" />
                    {service.title}
                  </Link>
                </li>
              )) || []}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase border-b border-gray-700 pb-2">Service Areas</h3>
            <ul className="space-y-2">
              {footer.serviceAreas?.map((area, index) => (
                <li key={index}>
                  <Link to={area.link} className="hover:text-sky-200 transition-colors">
                    {area.title}
                  </Link>
                </li>
              )) || []}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks?.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="hover:text-sky-200 transition-colors">
                    {link.title}
                  </Link>
                </li>
              )) || []}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-plumbing-800 text-center">
          <p className="font-mono">{copyright}</p>
          <div className="flex justify-center space-x-4 mt-4">
            {footer.socialLinks?.map((social, index) => (
              <a key={index} href={social.link} className="hover:text-sky-200 transition-colors uppercase text-xs font-bold">
                {social.title}
              </a>
            )) || []}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
