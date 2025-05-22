
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Info, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-plumbing-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Agape Plumbing</h3>
            <p className="mb-4">Professional plumbing services with integrity and dedication. Licensed, bonded, and insured for your peace of mind.</p>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              <span>(800) 878-4242</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@agapeplumbing.com</span>
            </div>
            <div className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 mt-1" />
              <span>PO Box 3215<br />Lakewood, CA 90711</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/emergency" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/services/repairs" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/installations" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Installations
                </Link>
              </li>
              <li>
                <Link to="/services/water-heaters" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Water Heaters
                </Link>
              </li>
              <li>
                <Link to="/services/drain-cleaning" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Drain Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="flex items-center hover:text-primary-300 transition-colors">
                  <Check className="h-4 w-4 mr-2" />
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/areas/los-angeles" className="hover:text-primary-300 transition-colors">
                  Los Angeles County
                </Link>
              </li>
              <li>
                <Link to="/areas/orange-county" className="hover:text-primary-300 transition-colors">
                  Orange County
                </Link>
              </li>
              <li>
                <Link to="/areas/riverside" className="hover:text-primary-300 transition-colors">
                  Riverside County
                </Link>
              </li>
              <li>
                <Link to="/areas/san-bernardino" className="hover:text-primary-300 transition-colors">
                  San Bernardino County
                </Link>
              </li>
              <li>
                <Link to="/areas/ventura" className="hover:text-primary-300 transition-colors">
                  Ventura County
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-primary-300 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-primary-300 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-plumbing-700 text-center">
          <p>© {new Date().getFullYear()} Agape Plumbing. All Rights Reserved. CA License #992416.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-primary-300 transition-colors">
              Facebook
            </a>
            <a href="https://instagram.com" className="hover:text-primary-300 transition-colors">
              Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-primary-300 transition-colors">
              LinkedIn
            </a>
            <a href="https://yelp.com" className="hover:text-primary-300 transition-colors">
              Yelp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
