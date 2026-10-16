
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import ServicesList from '@/components/home/ServicesList';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServiceAreas from '@/components/home/ServiceAreas';
import Cta from '@/components/home/Cta';

const Index = () => {
  const { meta } = useContent();
  
  return (
    <>
      <Helmet>
        <title>{meta.home.title}</title>
        <meta name="description" content={meta.home.description} />
        <meta name="keywords" content={meta.home.keywords} />
        <link rel="canonical" href={meta.home.canonical} />
        <meta property="og:title" content={meta.home.title} />
        <meta property="og:description" content={meta.home.description} />
        <meta property="og:url" content={meta.home.canonical} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://agapeplumbinginc.com/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Agape Drain & Plumbing LLC - Professional Plumbing Services in Frederick, MD" /> */}
        <meta property="og:site_name" content="Agape Drain And Plumbing, LLC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.home.title} />
        <meta name="twitter:description" content={meta.home.description} />
        {/* <meta name="twitter:image" content="https://agapeplumbinginc.com/og-image.svg" /> */}
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <ServicesList />
        <WhyChooseUs />

        <section aria-labelledby="recent-work-heading" className="py-16 bg-white">
          <div className="container-custom px-4">
            <h2 id="recent-work-heading" className="text-3xl md:text-4xl font-black text-plumbing-800 mb-4">Our Recent Plumbing Work</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">See before-and-after photos from real plumbing projects completed by Agape Drain And Plumbing, LLC.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { image: '/water-heater-replacement.webp', title: 'Water heater replacement', link: '/services' },
                { image: '/bathroom-faucet-valves.webp', title: 'Bathroom faucet and shutoff valve replacement', link: '/services' },
                { image: '/shower-fixture-replacement.webp', title: 'Shower fixture replacement', link: '/services' },
                { image: '/kitchen-faucet-replacement.webp', title: 'Kitchen faucet replacement', link: '/services' },
                { image: '/toilet-replacement.webp', title: 'Toilet replacement', link: '/services' },
                { image: '/pipe-valve-repair.webp', title: 'Pipe and valve repair', link: '/services' },
                { image: '/kitchen-sink-faucet-drain-garbage-disposal-before-after.webp', title: 'Kitchen sink, faucet, drain and disposal installation', link: '/services' },
              ].map((project) => (
                <a key={project.image} href={project.link} className="block overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <img src={project.image} alt={`Before-and-after photos of ${project.title.toLowerCase()} completed by Agape Drain And Plumbing`} loading="lazy" decoding="async" className="w-full aspect-square object-contain bg-gray-50" />
                  <h3 className="p-4 text-lg font-bold text-plumbing-800">{project.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
        <ServiceAreas />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Index;
