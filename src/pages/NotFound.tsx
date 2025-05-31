
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useContent } from '@/hooks/use-content';

const NotFound = () => {
  const location = useLocation();
  const { notFound } = useContent();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
<Helmet>
  <title>404 Not Found | Agape Drain & Plumbing LLC</title>
  <meta
    name="description"
    content="The page you're looking for doesn't exist. Return to Agape Drain & Plumbing LLC's homepage for expert plumbing services across Washington, D.C., Maryland, and Virginia."
  />
  <meta
    name="keywords"
    content="Agape Drain & Plumbing, 404 error, page not found, plumbing services DMV, Washington DC plumber, Maryland plumber, Virginia plumber"
  />
  <link rel="canonical" href="https://agapeplumbinginc.com/" />
</Helmet>
      
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center brutalist-section">
        <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Error</span>
        <h1 className="text-6xl md:text-7xl font-bold text-plumbing-700 mb-6 uppercase">{notFound.title}</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">{notFound.heading}</h2>
        <p className="text-xl text-gray-600 max-w-md mb-8 border-l-2 border-black pl-4 text-left">
          {notFound.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <Button size="lg" className="border-2 border-black bg-plumbing-800 rounded-none hover:translate-y-[-4px] transition-transform uppercase">{notFound.homeButton}</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-2 border-black rounded-none hover:translate-y-[-4px] transition-transform uppercase">{notFound.contactButton}</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
