
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="plumbingPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plumbingPattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Available 24/7 For Emergencies
            </span>
            <h1 className="mb-6">
              Your Trusted <br className="hidden md:block" />
              <span className="text-primary-200">Plumbing Experts</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Agape Plumbing & Rooter is your reliable, licensed Southern California plumbing contractor. From minor repairs to major installations, we deliver exceptional service at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg font-bold">
                Schedule Service
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold">
                View Our Services
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="bg-white rounded-full p-2 mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm">Call For Immediate Service</p>
                <p className="text-xl font-bold">(800) 878-4242</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-plumbing-800 text-2xl font-bold mb-4">
                Request Service Online
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button className="w-full text-lg font-bold py-6" size="lg">
                  Submit Request
                </Button>
              </form>
              <p className="text-center text-sm text-gray-600 mt-4">
                We'll contact you promptly to schedule your service
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white py-2 px-4 rounded-lg shadow-lg transform rotate-3">
              <p className="font-bold">Free Estimates Available!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
