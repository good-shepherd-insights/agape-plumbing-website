
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useContent } from '@/hooks/use-content';
import { getAllLocations } from '@/content/locations';
import { servicesList } from '@/content/servicesList';

const NotFound = () => {
  const location = useLocation();
  const { notFound } = useContent();
  const locations = getAllLocations();
  const popularServices = servicesList.services.slice(0, 4); // Get first 4 services
  const popularLocations = locations.slice(0, 4); // Get first 4 locations

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
<Helmet>
  <title>{notFound.meta.title}</title>
  <meta name="description" content={notFound.meta.description} />
  <meta name="keywords" content={notFound.meta.keywords} />
  <meta name="robots" content="noindex, follow" />
  <meta property="og:title" content={notFound.meta.title} />
  <meta property="og:description" content={notFound.meta.description} />
  <meta property="og:url" content={notFound.meta.canonical} />
  <meta property="og:type" content="website" />
  {/* <meta property="og:image" content="https://agapeplumbinginc.com/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agape Plumbing - Professional Plumbing Services" /> */}
  <meta property="og:site_name" content="Agape Plumbing" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={notFound.meta.title} />
  <meta name="twitter:description" content={notFound.meta.description} />
  {/* <meta name="twitter:image" content="https://agapeplumbinginc.com/og-image.svg" /> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="404 Not Found | Agape Drain And Plumbing, LLC" />
  <meta name="twitter:description" content="Page not found. Return to Agape Plumbing's homepage for expert plumbing services in Frederick, Maryland." />
</Helmet>
      
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center brutalist-section">
        <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Error</span>
        <h1 className="text-6xl md:text-7xl font-bold text-plumbing-700 mb-6 uppercase">{notFound.title}</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">{notFound.heading}</h2>
        <p className="text-xl text-gray-600 max-w-md mb-8 border-l-2 border-black pl-4 text-left">
          {notFound.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/">
            <Button size="lg" className="border-2 border-black bg-plumbing-800 rounded-none hover:translate-y-[-4px] transition-transform uppercase">{notFound.homeButton}</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-2 border-black rounded-none hover:translate-y-[-4px] transition-transform uppercase">{notFound.contactButton}</Button>
          </Link>
        </div>
        
        {/* Helpful Navigation Links */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Popular Services */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-black pb-2">Popular Services</h3>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.link} 
                    className="text-plumbing-700 hover:text-plumbing-800 hover:underline transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              to="/services" 
              className="inline-block mt-3 text-sm text-gray-600 hover:text-plumbing-700 hover:underline transition-colors"
            >
              View all services →
            </Link>
          </div>
          
          {/* Service Areas */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-black pb-2">Service Areas</h3>
            <ul className="space-y-2">
              {popularLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link 
                    to={`/services/${loc.slug}`} 
                    className="text-plumbing-700 hover:text-plumbing-800 hover:underline transition-colors"
                  >
                    {loc.fullName}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              to="/areas" 
              className="inline-block mt-3 text-sm text-gray-600 hover:text-plumbing-700 hover:underline transition-colors"
            >
              View all areas →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
