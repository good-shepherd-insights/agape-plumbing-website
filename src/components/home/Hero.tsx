
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-16 md:py-24 border-b-4 border-black">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary border-l-2 border-b-2 border-black"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-white text-plumbing-900 px-4 py-2 font-mono uppercase text-sm font-bold mb-6 border-2 border-black">
              Available 24/7 For Emergencies
            </span>
            <h1 className="mb-6 uppercase">
              Your Trusted <br className="hidden md:block" />
              <span className="text-primary-200">Plumbing Experts</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Agape Plumbing & Rooter is your reliable, licensed Southern California plumbing contractor. From minor repairs to major installations, we deliver exceptional service at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black hover:bg-gray-100 hover:translate-y-[-4px]">
                Schedule Service
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold hover:translate-y-[-4px]">
                View Our Services
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="bg-white rounded-none p-2 mr-4 border-2 border-black">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm uppercase font-mono">Call For Immediate Service</p>
                <p className="text-2xl font-bold">(800) 878-4242</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="bg-white p-8 rounded-none border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="text-plumbing-800 text-2xl font-bold mb-4 uppercase">
                Request Service Online
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 brutalist-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 brutalist-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 brutalist-input"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full p-3 brutalist-input"
                  ></textarea>
                </div>
                <Button className="w-full text-lg font-bold py-6 bg-plumbing-800 border-2 border-black hover:translate-y-[-4px]" size="lg">
                  Submit Request
                </Button>
              </form>
              <p className="text-center text-sm text-gray-600 mt-4">
                We'll contact you promptly to schedule your service
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white py-2 px-4 border-2 border-black">
              <p className="font-bold">Free Estimates Available!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
