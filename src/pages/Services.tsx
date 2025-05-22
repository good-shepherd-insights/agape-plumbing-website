
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Professional Plumbing Services | Agape Plumbing</title>
        <meta name="description" content="Comprehensive plumbing services including repairs, installations, water heater services, drain cleaning, and 24/7 emergency support. Licensed plumbers serving Southern California." />
        <meta name="keywords" content="plumbing services, emergency plumbing, water heater installation, drain cleaning, plumbing repairs, commercial plumbing" />
        <link rel="canonical" href="https://agapeplumbing.com/services" />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="mb-4">Our Professional Plumbing Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                From emergency repairs to planned installations, our team of licensed plumbers is committed to providing quality service with integrity and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <h2 className="text-plumbing-700 mb-4">Emergency Plumbing Services</h2>
                <p className="mb-4 text-lg text-gray-700">
                  When plumbing emergencies strike, you need reliable help fast. Our 24/7 emergency response team is always ready to address urgent issues like:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Burst or leaking pipes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Overflowing toilets and major clogs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Water heater failures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Sewer backups and main line blockages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Gas line emergencies</span>
                  </li>
                </ul>
                <p>We arrive equipped with all the necessary tools and parts to handle most emergencies on the first visit, minimizing damage and restoring your plumbing system quickly.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Our Emergency Services?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-bold">Fast Response Time</h4>
                      <p className="text-gray-700">We aim to be at your door within 60 minutes when you have an emergency.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-bold">24/7/365 Availability</h4>
                      <p className="text-gray-700">Our team is ready any time of day or night, including weekends and holidays.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-bold">Fully Equipped Trucks</h4>
                      <p className="text-gray-700">Our service vehicles carry a comprehensive inventory of parts to solve most problems in one visit.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-bold">Transparent Pricing</h4>
                      <p className="text-gray-700">Clear, upfront pricing with no hidden fees or overtime charges.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Our Installation Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-plumbing-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-bold">Consultation and Assessment</h4>
                      <p className="text-gray-700">We evaluate your needs and provide professional recommendations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-plumbing-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-bold">Detailed Proposal</h4>
                      <p className="text-gray-700">You'll receive a clear, itemized quote before any work begins.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-plumbing-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-bold">Professional Installation</h4>
                      <p className="text-gray-700">Our licensed technicians complete the work according to code and best practices.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-plumbing-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-bold">Final Inspection and Testing</h4>
                      <p className="text-gray-700">We thoroughly test all installations to ensure proper function.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-plumbing-700 mb-4">Installations & Replacements</h2>
                <p className="mb-4 text-lg text-gray-700">
                  Whether you're upgrading fixtures or installing new plumbing systems, our installation services deliver quality results that stand the test of time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Water heater installation (tank and tankless)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Fixture installations (sinks, toilets, showers)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Pipe replacement and re-piping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Sump pump installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Water filtration systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Garbage disposal installation</span>
                  </li>
                </ul>
                <p>All installations are performed by licensed plumbers and backed by our workmanship guarantee.</p>
              </div>
            </div>

            {/* Additional services highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3">Drain & Sewer Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Hydro jetting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Drain cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Sewer line inspections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Sewer repairs & replacements</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3">Water Heater Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Tankless water heaters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Traditional tank systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Repairs & maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Efficiency upgrades</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-3">Commercial Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Restaurant plumbing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Office building maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Multi-family properties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span>Preventative maintenance plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Services;
