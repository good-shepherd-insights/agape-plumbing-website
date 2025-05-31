import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cta from '../../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { useServiceContent } from '@/hooks/use-service-content';

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { content, loading, error } = useServiceContent(serviceSlug);

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
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24 brutalist-section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-white">
                {content.hero.subtitle}
              </span>
              <h1 className="mb-4 uppercase">{content.hero.title}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {content.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Introduction */}
        <section className="py-16 brutalist-section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-plumbing-700 mb-6 uppercase text-center">{content.intro.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.intro.description}
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Why Choose Us</span>
                <h2 className="text-plumbing-700 uppercase mb-8">{content.whyChooseUs.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.whyChooseUs.reasons.map((reason, index) => (
                  <div key={index} className="brutalist-card p-6 border-l-4 border-plumbing-800">
                    <h3 className="text-xl font-bold mb-3 uppercase">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center bg-gray-50 p-12 brutalist-card">
              <h2 className="text-plumbing-700 mb-4 uppercase">{content.cta.title}</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                {content.cta.description}
              </p>
              <button className="bg-plumbing-800 text-white px-8 py-3 border-2 border-black font-bold uppercase hover:translate-y-[-2px] transition-all">
                {content.cta.buttonText}
              </button>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;