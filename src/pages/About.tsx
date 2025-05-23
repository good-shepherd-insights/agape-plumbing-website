
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
        <section className="bg-plumbing-800 text-white py-24 brutalist-section">
          <div className="container-custom">
            <div className="text-center">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-white">About Us</span>
              <h1 className="mb-4 uppercase">{about.hero.title}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {about.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 brutalist-section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Our Story</span>
                <h2 className="text-plumbing-700 mb-4 uppercase">{about.story.title}</h2>
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-lg text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="brutalist-card p-8">
                <h3 className="text-xl font-bold mb-4 uppercase">{about.milestones.title}</h3>
                <ul className="space-y-6 border-l-2 border-black pl-4">
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
              <div className="brutalist-card p-6 border-t-4 border-black">
                <h3 className="text-xl font-bold mb-3 uppercase">{about.mission.title}</h3>
                <p className="text-gray-700">
                  {about.mission.description}
                </p>
              </div>
              
              <div className="brutalist-card p-6 border-t-4 border-black">
                <h3 className="text-xl font-bold mb-3 uppercase">{about.vision.title}</h3>
                <p className="text-gray-700">
                  {about.vision.description}
                </p>
              </div>
              
              <div className="brutalist-card p-6 border-t-4 border-black">
                <h3 className="text-xl font-bold mb-3 uppercase">{about.values.title}</h3>
                <ul className="text-gray-700 space-y-2 border-l-2 border-black pl-4">
                  {about.values.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Team */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Our People</span>
                <h2 className="text-plumbing-700 uppercase">{about.team.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {about.team.members.map((member, index) => (
                  <div key={index} className="brutalist-card p-6">
                    <div className="w-32 h-32 bg-plumbing-800 rounded-none mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white border-2 border-black">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                    <p className="text-primary font-mono uppercase text-sm">{member.position}</p>
                    <p className="mt-2 text-gray-600 border-l-2 border-black pl-4 mt-4">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="brutalist-section p-8 mb-16">
              <div className="text-center mb-8">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Credentials</span>
                <h2 className="text-plumbing-700 uppercase">Our Certifications & Affiliations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                <div className="brutalist-card p-4">
                  <div className="text-3xl font-bold text-primary border-b-2 border-black pb-2 mb-3">CA</div>
                  <p className="font-medium uppercase text-sm">CA Contractor's License #992416</p>
                </div>
                <div className="brutalist-card p-4">
                  <div className="text-3xl font-bold text-primary border-b-2 border-black pb-2 mb-3">BBB</div>
                  <p className="font-medium uppercase text-sm">Better Business Bureau A+ Rating</p>
                </div>
                <div className="brutalist-card p-4">
                  <div className="text-3xl font-bold text-primary border-b-2 border-black pb-2 mb-3">EPA</div>
                  <p className="font-medium uppercase text-sm">EPA Certified</p>
                </div>
                <div className="brutalist-card p-4">
                  <div className="text-3xl font-bold text-primary border-b-2 border-black pb-2 mb-3">PHCC</div>
                  <p className="font-medium uppercase text-sm">Plumbing-Heating-Cooling Contractors Association</p>
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
