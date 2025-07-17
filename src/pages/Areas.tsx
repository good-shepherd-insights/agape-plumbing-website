import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, ArrowRight, Users, Clock, Star } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getAllLocations } from '@/content/locations';
import { useNavigate } from 'react-router-dom';

const Areas = () => {
  const navigate = useNavigate();
  const allLocations = getAllLocations();
  
  // Group locations by county
  const locationsByCounty = allLocations.reduce((acc, location) => {
    if (!acc[location.county]) {
      acc[location.county] = [];
    }
    acc[location.county].push(location);
    return acc;
  }, {} as Record<string, typeof allLocations>);

  // Sort counties and locations within each county
  const sortedCounties = Object.keys(locationsByCounty).sort();
  sortedCounties.forEach(county => {
    locationsByCounty[county].sort((a, b) => a.name.localeCompare(b.name));
  });

  const benefits = [
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of regional plumbing systems and local codes',
      icon: Users
    },
    {
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency plumbing services when you need us most',
      icon: Clock
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind',
      icon: Star
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Professional Plumbing Services | Agape Plumbing</title>
        <meta name="description" content="Agape Plumbing serves Montgomery County, Frederick County and surrounding areas. Find professional plumbing services in your location." />
        <meta name="keywords" content="plumbing service areas, Montgomery County plumber, Frederick County plumber, Maryland plumbing services" />
        <link rel="canonical" href="https://agapeplumbinginc.com/areas" />
        <meta property="og:title" content="Service Areas | Professional Plumbing Services | Agape Plumbing" />
        <meta property="og:description" content="Agape Plumbing serves Montgomery County, Frederick County and surrounding areas. Find professional plumbing services in your location." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Professional Plumbing Services | Agape Plumbing" />
        <meta name="twitter:description" content="Agape Plumbing serves Montgomery County, Frederick County and surrounding areas. Find professional plumbing services in your location." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black">
        <div className="container-custom relative z-10">
          <div className="text-center px-4">
            <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
              Service Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              Areas We Serve
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
              Professional Plumbing Services Throughout <br className="hidden md:block" />
              <span className="text-plumbing-200">Montgomery & Frederick Counties</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 h-11">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (301) 658-0110
              </Button>
              <Button 
                onClick={() => {
                  navigate('/contact');
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
        </div>
      </section>

      <main className="py-20 md:py-32">
        <div className="container-custom px-4">
          
          {/* Service Areas by County */}
          <section className="mb-20 md:mb-32">
            <div className="text-center mb-16">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Our Coverage</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                Service Locations
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                We proudly serve communities throughout the region with reliable, professional plumbing services
              </p>
            </div>
            
            <div className="space-y-16">
              {sortedCounties.map((county) => (
                <div key={county} className="brutalist-section bg-white p-8 md:p-12">
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-plumbing-800 mb-4 border-b-4 border-plumbing-800 pb-4">
                      {county}
                    </h3>
                    <p className="text-gray-600">
                      Professional plumbing services throughout {county}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locationsByCounty[county].map((location) => (
                      <Link
                        key={location.slug}
                        to={`/areas/${location.slug}`}
                        className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300 bg-gray-50 border-l-4 border-plumbing-800"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-plumbing-800 group-hover:translate-x-1 transition-all" />
                          </div>
                          
                          <h4 className="text-xl font-black uppercase mb-2 group-hover:text-plumbing-600">
                            {location.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {location.fullName}
                          </p>
                          
                          <div className="space-y-2">
                            <div className="text-xs text-gray-500 uppercase font-bold">
                              Neighborhoods:
                            </div>
                            <div className="text-sm text-gray-600">
                              {location.neighborhoods.slice(0, 3).join(', ')}
                              {location.neighborhoods.length > 3 && '...'}
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center text-black font-bold uppercase text-sm group-hover:translate-x-1 transition-transform">
                              View Services <ArrowRight className="h-4 w-4 ml-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="brutalist-section bg-gray-50 mb-20 md:mb-32 p-12 md:p-16">
            <div className="text-center mb-16">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                Your Regional Plumbing Experts
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Trusted by homeowners and businesses throughout the region
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="brutalist-card bg-white p-8 text-center">
                    <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-black uppercase mb-4 text-plumbing-700">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Coverage Stats */}
          <section className="mb-20 md:mb-32">
            <div className="brutalist-card bg-plumbing-800 text-white p-10 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
                    Expanding Our Reach
                  </h2>
                  <p className="text-lg mb-8">
                    We're continuously growing our service area to better serve the communities throughout Maryland. 
                    Our commitment to excellence drives us to expand while maintaining the highest quality standards.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-black text-plumbing-200 mb-2">{allLocations.length}+</div>
                      <div className="text-sm uppercase font-bold">Cities Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-plumbing-200 mb-2">{sortedCounties.length}</div>
                      <div className="text-sm uppercase font-bold">Counties</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 border-4 border-black rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
                  <h3 className="text-2xl font-bold mb-6 uppercase text-plumbing-800">
                    Don't See Your Area?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We're always expanding! Contact us to see if we can serve your location or to request service in your area.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full text-lg font-bold py-6 bg-plumbing-800 border-2 border-black rounded-md hover:translate-y-[-4px]" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (301) 658-0110
                    </Button>
                    <Button 
                      onClick={() => {
                        navigate('/contact');
                        setTimeout(() => {
                          document.getElementById('message-us-form')?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }, 100);
                      }}
                      variant="outline" 
                      className="w-full border-2 border-black rounded-md hover:translate-y-[-4px] text-black" 
                      size="lg"
                    >
                      Request Service Area
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-10 md:p-16 border-4 border-black rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                Plumbing Emergency?
              </h2>
              <p className="text-xl mb-8">
                Don't wait! Our emergency plumbing team is available 24/7 throughout our service areas.
              </p>
              <Button size="lg" className="text-xl font-bold bg-white text-red-600 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-10 py-6">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Service: (301) 658-0110
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Areas;