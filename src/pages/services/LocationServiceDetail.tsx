import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, MapPin, Clock, Shield, CheckCircle, Wrench, Star } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cta from '../../components/home/Cta';
import { Button } from '@/components/ui/button';
import { useLocationServiceContent } from '@/hooks/use-location-service-content';

const LocationServiceDetail = () => {
  const { location, serviceSlug } = useParams<{ location: string; serviceSlug: string }>();
  const { content, loading, error } = useLocationServiceContent(location, serviceSlug);

  if (loading) {
    return (
      <>
        <Header />
        <main className="py-24">
          <div className="container-custom text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !content) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="keywords" content={content.meta.keywords} />
        {content.meta.canonical && (
          <link rel="canonical" href={content.meta.canonical} />
        )}
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-plumbing-200 transform -rotate-12"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center px-4">
            <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              Local Expert Service
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide opacity-90">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (227) 223-9057
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold rounded-md hover:translate-y-[-4px] px-8 py-4"
              >
                Get Free Estimate
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                <Wrench className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                {content.intro.title}
              </h2>
            </div>
            <div className="prose prose-lg mx-auto max-w-4xl">
              <div className="bg-gray-50 p-8 border-l-4 border-plumbing-800 rounded-md">
                <p className="text-lg leading-relaxed text-gray-700 mb-0">{content.intro.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                {content.whyChooseUs.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="brutalist-card bg-white p-8 border-l-4 border-plumbing-800 hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black mr-6 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase mb-3 group-hover:text-plumbing-900">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-block mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                Expert Local Service in {content.location.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proudly serving {content.location.fullName} and {content.location.county} with professional plumbing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Areas */}
              <div className="brutalist-card bg-white p-8 border-t-4 border-plumbing-800">
                <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black inline-block mb-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-plumbing-800">Areas We Serve</h3>
                <ul className="space-y-3 border-l-4 border-plumbing-800 pl-6">
                  {content.location.neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                        <CheckCircle className="h-3 w-3" />
                      </div>
                      <span className="font-medium">{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Local Issues */}
              <div className="brutalist-card bg-white p-8 border-t-4 border-plumbing-800">
                <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black inline-block mb-6">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-plumbing-800">Common Local Issues</h3>
                <ul className="space-y-3 border-l-4 border-plumbing-800 pl-6">
                  {content.location.commonIssues.map((issue, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                        <Clock className="h-3 w-3" />
                      </div>
                      <span className="font-medium text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Landmarks */}
              <div className="brutalist-card bg-white p-8 border-t-4 border-plumbing-800">
                <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black inline-block mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4 text-plumbing-800">Local Landmarks</h3>
                <ul className="space-y-3 border-l-4 border-plumbing-800 pl-6">
                  {content.location.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                        <MapPin className="h-3 w-3" />
                      </div>
                      <span className="font-medium text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-16 bg-plumbing-800 text-white border-t-4 border-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white text-plumbing-800 p-4 rounded-md border-2 border-black inline-block mb-6">
              <Clock className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
              24/7 Emergency Service in {content.location.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Plumbing emergencies don't wait for business hours. Our local team is ready to respond quickly to protect your {content.location.fullName} property.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-xl font-bold bg-white text-plumbing-800 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-10 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Call: (227) 223-9057
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default LocationServiceDetail;