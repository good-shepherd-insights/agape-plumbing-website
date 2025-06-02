import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cta from '../../components/home/Cta';
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {content.hero.description}
            </p>
            <div className="bg-white/10 p-4 rounded-lg inline-block">
              <p className="text-sm">
              HELOOO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {content.intro.title}
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>{content.intro.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {content.whyChooseUs.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Local Service in {content.location.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Areas We Serve</h3>
                <ul className="space-y-2">
                  {content.location.neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Common Local Issues</h3>
                <ul className="space-y-2">
                  {content.location.commonIssues.map((issue, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
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