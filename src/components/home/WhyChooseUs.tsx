
import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Licensed & Insured',
    description: 'CA License #992416. Fully bonded and insured for your protection and peace of mind.'
  },
  {
    id: 2,
    title: '24/7 Emergency Service',
    description: 'Available around the clock for urgent plumbing emergencies when you need help most.'
  },
  {
    id: 3,
    title: 'Experienced Technicians',
    description: 'Our team consists of skilled professionals with years of industry experience.'
  },
  {
    id: 4,
    title: 'Fair & Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide upfront pricing before any work begins.'
  },
  {
    id: 5,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee on all services.'
  },
  {
    id: 6,
    title: 'Latest Equipment & Techniques',
    description: 'We utilize modern technology and proven methods to solve your plumbing problems efficiently.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 brutalist-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="font-mono uppercase text-sm font-bold border-b-2 border-black">WHY CHOOSE US</span>
              <h2 className="mt-2 uppercase">Southern California's Most Trusted Plumbing Team</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              At Agape Plumbing, we combine technical expertise with exceptional customer service to deliver plumbing solutions that exceed expectations. Our commitment to quality and integrity has made us the preferred choice for residential and commercial plumbing services throughout Southern California.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 border-2 border-black bg-primary flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-plumbing-800 p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] text-white">
              <h3 className="text-2xl font-bold mb-6 uppercase">Customer Testimonial</h3>
              <blockquote className="text-lg italic mb-6">
                "Agape Plumbing saved us during a major emergency! They arrived quickly, diagnosed the issue, and fixed it professionally. Their team was courteous and kept us informed throughout the process. I highly recommend their services to anyone needing reliable plumbers."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center text-plumbing-800 font-bold text-xl mr-4">
                  JD
                </div>
                <div>
                  <p className="font-bold">John Davis</p>
                  <p className="text-sm uppercase font-mono">Lakewood, CA</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2">5.0 Rating</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 border-2 border-black">
              <p className="font-bold uppercase">300+ 5-Star Reviews!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
