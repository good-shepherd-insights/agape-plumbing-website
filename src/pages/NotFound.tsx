
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
        <title>404 Not Found | Agape Plumbing</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to the homepage for professional plumbing services in Southern California." />
      </Helmet>
      
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-plumbing-700 mb-6">{notFound.title}</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{notFound.heading}</h2>
        <p className="text-xl text-gray-600 max-w-md mb-8">
          {notFound.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <Button size="lg">{notFound.homeButton}</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">{notFound.contactButton}</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
