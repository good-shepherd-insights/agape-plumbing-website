
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';
import { Users, Target, Eye, Heart, Award, Shield, Clock, CheckCircle, Link, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const { about, meta } = useContent();
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>{meta.about.title}</title>
        <meta name="description" content={meta.about.description} />
        <meta name="keywords" content={meta.about.keywords} />
        <link rel="canonical" href={meta.about.canonical} />
        <meta property="og:title" content={meta.about.title} />
        <meta property="og:description" content={meta.about.description} />
        <meta property="og:url" content={meta.about.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.about.title} />
        <meta name="twitter:description" content={meta.about.description} />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black">
          <div className="container-custom relative z-10">
            <div className="text-center px-4">
              <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
                About Us
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                {about.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
                {about.hero.description}
              </p>
            </div>
                          <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 h-11">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (227) 223-9057
                </Button>
                <Button 
                   onClick={() => {
                    navigate('/contact');
                    // Use setTimeout to ensure navigation completes before scrolling
                    setTimeout(() => {
                      document.getElementById('message-us-form')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }, 100);
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800"
                >
                  Get Free Estimate
                </Button>
              </div>
          </div>
        </section>

        <div className="py-20 md:py-32">
          <div className="container-custom px-4">
            
            {/* Company Story */}
            <section className="mb-20 md:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Our Story</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{about.story.title}</h2>
                  {about.story.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="brutalist-card p-8 md:p-12 bg-gray-50">
                  <div className="flex items-center mb-6">
                    <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-black">{about.milestones.title}</h3>
                  </div>
                  <ul className="space-y-6 border-l-4 border-plumbing-800 pl-6">
                    {about.milestones.events.map((event, index) => (
                      <li key={index} className="relative">
                        <div className="absolute -left-8 w-4 h-4 bg-plumbing-800 border-2 border-white rounded-full"></div>
                        <div className="font-black text-plumbing-900 text-lg mb-2">{event.year}</div>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="mb-20 md:mb-32">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Our Foundation</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                  What Drives Us Forward
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4 group-hover:text-plumbing-600">{about.mission.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {about.mission.description}
                  </p>
                </div>
                
                <div className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4 group-hover:text-plumbing-600">{about.vision.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {about.vision.description}
                  </p>
                </div>
                
                <div className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4 group-hover:text-plumbing-600">{about.values.title}</h3>
                  <ul className="text-gray-700 space-y-3 text-left">
                    {about.values.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-plumbing-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="mb-20 md:mb-32">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Our People</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{about.team.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Meet the dedicated professionals who make our exceptional service possible
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {about.team.members.map((member, index) => (
                  <div key={index} className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-plumbing-700 to-plumbing-900 mx-auto flex items-center justify-center text-3xl font-black text-white border-4 border-black rounded-md">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white border-2 border-black rounded-full p-2">
                        <Users className="h-4 w-4 text-plumbing-800" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black uppercase mb-2 group-hover:text-plumbing-600">{member.name}</h3>
                    <p className="text-plumbing-600 font-mono uppercase text-sm font-bold mb-4">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed border-l-4 border-plumbing-200 pl-4">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="brutalist-section bg-gray-50 p-12 md:p-16">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Credentials</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                  Our Certifications & Affiliations
                </h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Trusted credentials that demonstrate our commitment to excellence and professionalism
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="brutalist-card bg-white group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-black mb-3">MD</div>
                  <p className="font-bold uppercase text-sm text-gray-700">MD Contractor's License #992416</p>
                </div>
                
                <div className="brutalist-card bg-white group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-black mb-3">BBB</div>
                  <p className="font-bold uppercase text-sm text-gray-700">Better Business Bureau A+ Rating</p>
                </div>
                
                <div className="brutalist-card bg-white group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-black mb-3">EPA</div>
                  <p className="font-bold uppercase text-sm text-gray-700">EPA Certified</p>
                </div>
                
                <div className="brutalist-card bg-white group hover:translate-y-[-4px] transition-all duration-300 p-8 text-center">
                  <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-black mb-3">PHCC</div>
                  <p className="font-bold uppercase text-sm text-gray-700">Plumbing-Heating-Cooling Contractors Association</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default About;
