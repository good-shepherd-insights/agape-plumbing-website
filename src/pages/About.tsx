
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Agape Plumbing | Southern California's Trusted Plumbers</title>
        <meta name="description" content="Learn about Agape Plumbing - a family-owned business providing professional plumbing services in Southern California since 2002. Licensed, bonded, and insured." />
        <meta name="keywords" content="about Agape Plumbing, plumbing company history, plumbing contractors Southern California, licensed plumbers" />
        <link rel="canonical" href="https://agapeplumbing.com/about" />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="mb-4">About Agape Plumbing</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Southern California's trusted plumbing professionals since 2002. Licensed, bonded, and insured for your peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-plumbing-700 mb-4">Our Story</h2>
                <p className="mb-4 text-lg text-gray-700">
                  Agape Plumbing was founded in 2002 by master plumber David Johnson with a simple mission: to provide honest, reliable, and professional plumbing services to the Southern California community.
                </p>
                <p className="mb-4 text-lg text-gray-700">
                  What began as a small family operation has grown into a trusted plumbing company with a team of licensed technicians serving both residential and commercial customers across the region.
                </p>
                <p className="mb-4 text-lg text-gray-700">
                  Throughout our growth, we've maintained our founding principles of integrity, quality workmanship, and exceptional customer service. Our name "Agape" reflects our approach to business—serving others with selfless care and dedication.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we're proud to be among Southern California's most trusted plumbing contractors, with thousands of satisfied customers and a reputation for excellence in everything we do.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Company Milestones</h3>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2002</div>
                    <div>
                      <p>Founded by David Johnson as a small residential service company</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2007</div>
                    <div>
                      <p>Expanded services to include commercial properties</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2010</div>
                    <div>
                      <p>Received CA Contractor's License #992416</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2015</div>
                    <div>
                      <p>Introduced 24/7 emergency plumbing services</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2018</div>
                    <div>
                      <p>Expanded service area to cover all Southern California counties</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">2020</div>
                    <div>
                      <p>Achieved 10,000+ completed service calls</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="font-bold text-primary mr-4">Today</div>
                    <div>
                      <p>Continuing to grow while maintaining our commitment to quality</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver exceptional plumbing services that exceed customer expectations through technical excellence, reliability, and unwavering integrity.
                </p>
              </div>
              
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted name in plumbing across Southern California, recognized for our quality workmanship, customer-first approach, and technological innovation.
                </p>
              </div>
              
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Integrity in all our dealings</li>
                  <li>• Excellence in workmanship</li>
                  <li>• Respect for customers and their property</li>
                  <li>• Continuous improvement and learning</li>
                  <li>• Community involvement and service</li>
                </ul>
              </div>
            </div>

            {/* Team */}
            <div className="mb-16">
              <h2 className="text-plumbing-700 mb-8 text-center">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    DJ
                  </div>
                  <h3 className="text-xl font-bold">David Johnson</h3>
                  <p className="text-primary font-medium">Founder & CEO</p>
                  <p className="mt-2 text-gray-600">
                    Master plumber with over 25 years of experience in the industry.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    MM
                  </div>
                  <h3 className="text-xl font-bold">Michael Martinez</h3>
                  <p className="text-primary font-medium">Operations Manager</p>
                  <p className="mt-2 text-gray-600">
                    Oversees daily operations and ensures superior service quality.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    ST
                  </div>
                  <h3 className="text-xl font-bold">Sarah Thompson</h3>
                  <p className="text-primary font-medium">Customer Service Director</p>
                  <p className="mt-2 text-gray-600">
                    Dedicated to creating positive experiences for every customer.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 p-8 rounded-lg mb-16">
              <h2 className="text-plumbing-700 mb-6 text-center">Our Certifications & Affiliations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <div className="text-3xl font-bold text-primary">CA</div>
                  </div>
                  <p className="font-medium">CA Contractor's License #992416</p>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <div className="text-3xl font-bold text-primary">BBB</div>
                  </div>
                  <p className="font-medium">Better Business Bureau A+ Rating</p>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <div className="text-3xl font-bold text-primary">EPA</div>
                  </div>
                  <p className="font-medium">EPA Certified</p>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                    <div className="text-3xl font-bold text-primary">PHCC</div>
                  </div>
                  <p className="font-medium">Plumbing-Heating-Cooling Contractors Association</p>
                </div>
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

export default About;
