import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Star, ArrowRight, Wrench, Droplets, AlertTriangle, ChefHat, Trash2, Toilet, Flame } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getLocationBySlug } from '@/content/locations';
import { useCanonicalValidation, generateCanonicalUrl, buildCanonicalPath } from '@/hooks/useCanonicalValidation';

const LocationServices = () => {
  const { location } = useParams<{ location: string }>();
  const locationData = getLocationBySlug(location || '');

  if (!locationData) {
    return <Navigate to="/404" replace />;
  }

  // Validate canonical URL for this page
  const expectedCanonicalPath = buildCanonicalPath(location);
  const expectedCanonical = generateCanonicalUrl(expectedCanonicalPath);
  
  useCanonicalValidation({
    expectedCanonical,
    pageIdentifier: `Location Services - ${location}`,
    enableLogging: true
  });

  const services = [
    { 
      slug: 'drain-cleaning', 
      name: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services',
      icon: Droplets
    },
    { 
      slug: 'emergency-plumbing', 
      name: 'Emergency Plumbing',
      description: '24/7 emergency plumbing repair services',
      icon: AlertTriangle
    },
    { 
      slug: 'faucets-fixtures', 
      name: 'Faucets & Fixtures',
      description: 'Installation and repair of faucets and fixtures',
      icon: AlertTriangle
    },
    { 
      slug: 'kitchen-plumbing', 
      name: 'Kitchen Plumbing',
      description: 'Complete kitchen plumbing solutions',
      icon: ChefHat
    },
    { 
      slug: 'pipe-repair', 
      name: 'Pipe Repair',
      description: 'Professional pipe repair and replacement',
      icon: AlertTriangle
    },
    { 
      slug: 'sewer-services', 
      name: 'Sewer Services',
      description: 'Comprehensive sewer line services',
      icon: Trash2
    },
    { 
      slug: 'toilet-services', 
      name: 'Toilet Services',
      description: 'Toilet repair, installation, and maintenance',
      icon: Toilet
    },
    { 
      slug: 'water-heater-services', 
      name: 'Water Heater Services',
      description: 'Water heater installation and repair',
      icon: Flame
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description: `Deep knowledge of ${locationData.name} plumbing systems and local codes`,
      icon: MapPin
    },
    {
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency plumbing services when you need us most',
      icon: Clock
    },
    {
      title: 'Local Plumbing Experience',
      description: 'Family-owned plumbing service focused on clear communication and careful work',
      icon: Star
    },
    {
      title: 'Expert Technicians',
      description: 'Highly trained and experienced plumbing professionals',
      icon: Wrench
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Plumbing Services Near Me | ${locationData.name}, MD | Agape Drain And Plumbing, LLC`}</title>
        <meta name="description" content={`Plumbing and drain cleaning in ${locationData.fullName}, including 24/7 emergency plumbing. Call (227) 223-9057 for assistance.`} />
        <meta name="keywords" content={`plumbing services ${locationData.slug}, plumber ${locationData.slug}, ${locationData.county} plumbing`} />
        <link rel="canonical" href={`https://agapeplumbinginc.com/areas/${locationData.slug}`} />
        <meta property="og:title" content={`Plumbing Services Near Me | ${locationData.name}, MD | Agape Drain And Plumbing, LLC`} />
        <meta property="og:description" content={`Professional plumbing services in ${locationData.fullName}. Serving ${locationData.neighborhoods.join(', ')} and all of ${locationData.county}.`} />
        <meta property="og:url" content={`https://agapeplumbinginc.com/areas/${locationData.slug}`} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://agapeplumbinginc.com/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agape Plumbing - Professional Plumbing Services" /> */}
        <meta property="og:site_name" content="Agape Plumbing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Plumbing Services Near Me | ${locationData.name}, MD | Agape Drain And Plumbing, LLC`} />
        <meta name="twitter:description" content={`Professional plumbing services in ${locationData.fullName}. Serving ${locationData.neighborhoods.join(', ')} and all of ${locationData.county}.`} />
        {/* <meta name="twitter:image" content="https://agapeplumbinginc.com/og-image.svg" /> */}
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black">
        <div className="container-custom relative z-10">
          <div className="text-center px-4">
            <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
              Professional Plumbing Services
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              Plumbing Services in <br className="hidden md:block" />
              <span className="text-plumbing-200">{locationData.fullName}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
              Serving <span className="text-plumbing-300">{locationData.neighborhoods.join(', ')}</span> and all of <span className="text-plumbing-300">{locationData.county}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-8 py-4">
                <a href="tel:+12272239057" className="inline-flex items-center"><Phone className="h-5 w-5 mr-2" />Call Now: (227) 223-9057</a>
              </Button>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 hover:translate-y-[-4px]"
              >
                Request an Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20 md:py-32">
        <div className="container-custom px-4">
          
          {/* Services Grid */}
          <section className="mb-20 md:mb-32">
            <div className="text-center mb-16">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                Complete Plumbing Solutions
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                From emergency repairs to complete installations, we provide comprehensive plumbing services throughout {locationData.name}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${locationData.slug}/${service.slug}`}
                    className="brutalist-card group hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="p-8 text-center">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-black uppercase mb-4 group-hover:text-plumbing-600">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center text-black font-bold uppercase text-sm group-hover:translate-x-1 transition-transform">
                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="brutalist-section bg-gray-50 mb-20 md:mb-32 p-12 md:p-16">
            <div className="text-center mb-16">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                Your Trusted {locationData.name} Plumbers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Service Areas */}
          <section className="mb-20 md:mb-32">
            <div className="brutalist-card bg-plumbing-800 text-white p-10 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
                    Serving All of {locationData.county}
                  </h2>
                  <p className="text-lg mb-8">
                    We proudly serve {locationData.name} and surrounding areas with reliable, professional plumbing services.
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold uppercase mb-6">Service Areas Include:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {locationData.serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="h-4 w-4 mr-3 text-plumbing-200" />
                          <span className="text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 border-4 border-black rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
                  <h3 className="text-2xl font-bold mb-6 uppercase text-plumbing-800">
                    Request an Estimate
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Ready to solve your plumbing problems? Contact us today for a estimate.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full text-lg font-bold py-6 bg-plumbing-800 border-2 border-black rounded-md hover:translate-y-[-4px]" size="lg">
                      <a href="tel:+12272239057" className="inline-flex items-center"><Phone className="h-5 w-5 mr-2" />Call (227) 223-9057</a>
                    </Button>
                    <Button variant="outline" className="w-full border-2 border-black rounded-md hover:translate-y-[-4px] text-black" size="lg">
                      Request Online Quote
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
                Plumbing Emergency in {locationData.name}?
              </h2>
              <p className="text-xl mb-8">
                Don't wait! Our emergency plumbing team is available 24/7 to help you.
              </p>
              <Button size="lg" className="text-xl font-bold bg-white text-red-600 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-10 py-6">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Service: (227) 223-9057
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default LocationServices;