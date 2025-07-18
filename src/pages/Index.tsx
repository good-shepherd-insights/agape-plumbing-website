
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.home.title} />
        <meta name="twitter:description" content={meta.home.description} />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <ServicesList />
        <WhyChooseUs />
        <ServiceAreas />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Index;
