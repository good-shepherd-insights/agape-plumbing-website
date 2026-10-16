import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { Check, Phone, Wrench, Clock, Star, ArrowRight } from 'lucide-react';
import { useContent } from '@/hooks/use-content';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';

const Services = () => {
  const { services, meta } = useContent();
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>{meta.services.title}</title>
        <meta name="description" content={meta.services.description} />
        <meta name="keywords" content={meta.services.keywords} />
        <link rel="canonical" href={meta.services.canonical} />
        <meta property="og:title" content={meta.services.title} />
        <meta property="og:description" content={meta.services.description} />
        <meta property="og:url" content={meta.services.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": meta.services.title,
            "description": meta.services.description,
            "url": meta.services.canonical,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Professional Plumbing Services",
              "description": "Comprehensive plumbing services for residential and commercial customers",
              "itemListElement": services.additionalServices.map((service, index) => ({
                "@type": "Service",
                "name": service.title,
                "description": service.features.join(", "),
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://agapeplumbinginc.com/#localbusiness",
                  "name": "Agape Drain And Plumbing, LLC"
                },
                "position": index + 1
              }))
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://agapeplumbinginc.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://agapeplumbinginc.com/services"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://agapeplumbinginc.com/#organization",
              "name": "Agape Drain And Plumbing, LLC"
            }
          })}
        </script>
        {/* <meta property="og:image" content={meta.services.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agape Drain & Plumbing LLC - Professional Plumbing Services in Frederick, MD" /> */}
        <meta property="og:site_name" content="Agape Drain And Plumbing, LLC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.services.title} />
        <meta name="twitter:description" content={meta.services.description} />
        {/* <meta name="twitter:image" content={meta.services.ogImage} /> */}
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black">
          <div className="container-custom relative z-10">
            <div className="text-center px-4">
              <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
                Professional Services
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                {services.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
                {services.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md  hover:bg-gray-100 h-11">
                  <a href="tel:+12272239057" className="inline-flex items-center"><Phone className="h-5 w-5 mr-2" />Call Now: (227) 223-9057</a>
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
                  Request an Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container-custom px-4">
            
            {/* Emergency Services Section */}
            <section className="mb-20 md:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">{services.sections.emergency}</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{services.emergency.title}</h2>
                  <p className="mb-6 text-lg text-gray-700">
                    {services.emergency.description}
                  </p>
                  <ul className="space-y-4 mb-8 border-l-4 border-plumbing-800 pl-6">
                    {services.emergency.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 font-medium">{services.emergency.conclusion}</p>
                </div>
                <div className="brutalist-card bg-white p-8 md:p-12">
                  <h3 className="text-xl md:text-2xl font-black mb-6 uppercase text-black-100">{services.emergencyBenefits.title}</h3>
                  <ul className="space-y-6">
                    {services.emergencyBenefits.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-plumbing-800 text-white border-2 border-black w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">{index + 1}</div>
                        <div>
                          <h4 className="font-black uppercase text-plumbing-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-700">{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Installation Services Section */}
            <section className="mb-20 md:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 brutalist-card bg-white p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl md:text-2xl font-black uppercase text-black">{services.installationProcess.title}</h3>
                  </div>
                  <ol className="space-y-6">
                    {services.installationProcess.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-plumbing-800 text-white border-2 border-black w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">{index + 1}</div>
                        <div>
                          <h4 className="font-black uppercase text-plumbing-900 mb-2">{step.title}</h4>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">{services.sections.installations}</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{services.installations.title}</h2>
                  <p className="mb-6 text-lg text-gray-700">
                    {services.installations.description}
                  </p>
                  <ul className="space-y-4 mb-8 border-l-4 border-plumbing-800 pl-6">
                    {services.installations.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 font-medium">{services.installations.conclusion}</p>
                </div>
              </div>
            </section>

            {/* Additional Services Section */}
            <section className="brutalist-section bg-white p-12 md:p-16 mb-20 md:mb-32">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">{services.sections.moreServices}</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{services.sections.additionalServices}</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Comprehensive plumbing solutions for every need
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.additionalServices.map((service, index) => {
                  // Create the service slug based on the title format in servicesList.ts
                  const serviceSlug = service.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
                  
                  return (
                    <Link 
                      key={index} 
                      to={`/services/${serviceSlug}`}
                      className="brutalist-card bg-gray-50 p-8 border-t-4 border-plumbing-800 hover:translate-y-[-4px] transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-6">
                        <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-flex items-center justify-center mr-4">
                          <Wrench className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black uppercase group-hover:text-plumbing-900">{service.title}</h3>
                      </div>
                      <ul className="space-y-3 border-l-4 border-plumbing-800 pl-6 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="bg-plumbing-800 text-white p-1 rounded-md border-2 border-black mr-3 flex-shrink-0">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-plumbing-800 font-semibold group-hover:text-plumbing-900">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="brutalist-section bg-gray-50 p-12 md:p-16">
              <div className="text-center mb-16">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">{services.sections.whyChooseUs}</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                  Professional Excellence
                </h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-600">
                  Trusted by homeowners and businesses throughout the region
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: '24/7 Emergency Service',
                    description: 'Round-the-clock emergency plumbing services when you need us most',
                    icon: Clock
                  },
                  {
                    title: 'Licensed & Insured',
                    description: 'Fully licensed, bonded, and insured for your peace of mind',
                    icon: Star
                  },
                  {
                    title: 'Expert Technicians',
                    description: 'Highly trained and experienced plumbing professionals',
                    icon: Wrench
                  },
                  {
                    title: 'Quality Guarantee',
                    description: 'We stand behind our work with comprehensive warranties',
                    icon: Check
                  }
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="brutalist-card bg-white p-8 text-center transition-all duration-300">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black inline-flex items-center justify-center mb-6">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-black uppercase mb-4 text-black">
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
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Services;
