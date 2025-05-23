import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { useContent } from '@/hooks/use-content';

const Services = () => {
  const { services, meta } = useContent();
  
  return (
    <>
      <Helmet>
        <title>{meta.services.title}</title>
        <meta name="description" content={meta.services.description} />
        <meta name="keywords" content={meta.services.keywords} />
        <link rel="canonical" href={meta.services.canonical} />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24 brutalist-section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-white">Services</span>
              <h1 className="mb-4 uppercase">{services.hero.title}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {services.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 brutalist-section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Emergency</span>
                <h2 className="text-plumbing-700 mb-4 uppercase">{services.emergency.title}</h2>
                <p className="mb-4 text-lg text-gray-700">
                  {services.emergency.description}
                </p>
                <ul className="space-y-3 mb-6 border-l-2 border-black pl-4">
                  {services.emergency.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p>{services.emergency.conclusion}</p>
              </div>
              <div className="brutalist-card p-8">
                <h3 className="text-xl font-bold mb-4 uppercase">{services.emergencyBenefits.title}</h3>
                <ul className="space-y-4">
                  {services.emergencyBenefits.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-plumbing-800 text-white border-2 border-black h-8 w-8 flex items-center justify-center mr-3 mt-1">{index + 1}</div>
                      <div>
                        <h4 className="font-bold uppercase">{benefit.title}</h4>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div className="order-2 lg:order-1 brutalist-card p-8">
                <h3 className="text-xl font-bold mb-4 uppercase">{services.installationProcess.title}</h3>
                <ol className="space-y-4">
                  {services.installationProcess.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-plumbing-800 text-white border-2 border-black h-8 w-8 flex items-center justify-center mr-3 mt-1">{index + 1}</div>
                      <div>
                        <h4 className="font-bold uppercase">{step.title}</h4>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">Installations</span>
                <h2 className="text-plumbing-700 mb-4 uppercase">{services.installations.title}</h2>
                <p className="mb-4 text-lg text-gray-700">
                  {services.installations.description}
                </p>
                <ul className="space-y-3 mb-6 border-l-2 border-black pl-4">
                  {services.installations.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p>{services.installations.conclusion}</p>
              </div>
            </div>

            {/* Additional services highlights */}
            <div className="mb-12">
              <div className="text-center mb-12">
                <span className="inline-block font-mono uppercase text-sm font-bold mb-2 border-b-2 border-black">More Services</span>
                <h2 className="text-plumbing-700 uppercase mb-8">Additional Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.additionalServices.map((service, index) => (
                  <div key={index} className="brutalist-card p-6 border-t-4 border-black hover:translate-y-[-4px] transition-all">
                    <h3 className="text-xl font-bold mb-3 uppercase">{service.title}</h3>
                    <ul className="space-y-2 border-l-2 border-black pl-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Services;
