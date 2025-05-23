
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';

const About = () => {
  const { about, meta } = useContent();
  
  return (
    <>
      <Helmet>
        <title>{meta.about.title}</title>
        <meta name="description" content={meta.about.description} />
        <meta name="keywords" content={meta.about.keywords} />
        <link rel="canonical" href={meta.about.canonical} />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="mb-4">{about.hero.title}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {about.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-plumbing-700 mb-4">{about.story.title}</h2>
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-lg text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{about.milestones.title}</h3>
                <ul className="space-y-6">
                  {about.milestones.events.map((event, index) => (
                    <li key={index} className="flex">
                      <div className="font-bold text-primary mr-4">{event.year}</div>
                      <div>
                        <p>{event.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">{about.mission.title}</h3>
                <p className="text-gray-700">
                  {about.mission.description}
                </p>
              </div>
              
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">{about.vision.title}</h3>
                <p className="text-gray-700">
                  {about.vision.description}
                </p>
              </div>
              
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-3">{about.values.title}</h3>
                <ul className="text-gray-700 space-y-2">
                  {about.values.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Team */}
            <div className="mb-16">
              <h2 className="text-plumbing-700 mb-8 text-center">{about.team.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {about.team.members.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                    <p className="mt-2 text-gray-600">
                      {member.description}
                    </p>
                  </div>
                ))}
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
