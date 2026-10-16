import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Cta from '../../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { useServiceContent } from '@/hooks/use-service-content';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { content, loading, error } = useServiceContent(serviceSlug);

  if (loading) {
    return (
      <>
        <Header />
        <main className="py-32">
          <div className="container-custom text-center px-4">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto"></div>
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
        <meta property="og:url" content={content.meta.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": content.hero.title,
            "description": content.hero.description,
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://agapeplumbinginc.com/#localbusiness",
              "name": "Agape Drain And Plumbing, LLC",
              "telephone": "+1-227-223-9057",
              "email": "agape7plumbing@gmail.com",
              "url": "https://agapeplumbinginc.com/"
            },
            "serviceType": content.hero.title,
            "url": content.meta.canonical,
            "areaServed": {
              "@type": "State",
              "name": "Maryland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": content.hero.title,
              "itemListElement": content.whyChooseUs?.reasons?.map((reason, index) => ({
                "@type": "Offer",
                "name": reason.title,
                "description": reason.description,
                "position": index + 1
              })) || []
            }
          })}
        </script>
        {/* <meta property="og:image" content="https://agapeplumbinginc.com/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agape Drain & Plumbing LLC - Professional Plumbing Services in Frederick, MD" /> */}
        <meta property="og:site_name" content="Agape Drain And Plumbing, LLC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />
        {/* <meta name="twitter:image" content="https://agapeplumbinginc.com/og-image.svg" /> */}
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black">
          <div className="container-custom relative z-10">
            <div className="text-center px-4">
              <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
                {content.hero.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              {content.hero.title.includes('|') ? (
                  <>
                    {content.hero.title.split('|')[0].trim()}
                    <br />
                    <span className="text-plumbing-200">
                      {content.hero.title.split('|')[1]?.trim()}
                    </span>
                  </>
                ) : (
                  content.hero.title
                )}
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
                {content.hero.description}
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

        <div className="py-20">
          <div className="container-custom px-4">
            
            {/* Service Introduction */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Service Details</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                  {content.intro.title}
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="brutalist-card bg-white p-10 md:p-12">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {content.intro.description}
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="brutalist-section bg-gray-50 mb-20 p-12 md:p-16">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                  {content.whyChooseUs.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.whyChooseUs.reasons.map((reason, index) => (
                  <div key={index} className="brutalist-card bg-white p-8 border-l-4 border-plumbing-800">
                    <div className="flex items-start">
                      <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black mr-6 flex-shrink-0">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black uppercase mb-4">
                          {reason.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="mb-20">
              <div className="brutalist-card bg-plumbing-800 text-white p-10 md:p-16">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                    {content.cta.title}
                  </h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto">
                    {content.cta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button asChild size="lg" className="text-xl font-bold bg-white text-plumbing-800 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px] px-10 py-6">
                      <a href="tel:+12272239057" className="inline-flex items-center"><Phone className="h-6 w-6 mr-2" />{content.cta.buttonText}</a>
                    </Button>
                    <Button asChild
                      variant="outline" 
                      size="lg" 
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-xl font-bold rounded-md hover:translate-y-[-4px] px-10 py-6"
                    >
                      <Link to="/contact">Request an Estimate</Link>
                    </Button>
                  </div>
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

export default ServiceDetail;