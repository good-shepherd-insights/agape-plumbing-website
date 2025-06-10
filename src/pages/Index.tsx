
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';

// Lazy load non-critical components
const ServicesList = React.lazy(() => import('@/components/home/ServicesList'));
const WhyChooseUs = React.lazy(() => import('@/components/home/WhyChooseUs'));
const ServiceAreas = React.lazy(() => import('@/components/home/ServiceAreas'));
const Cta = React.lazy(() => import('@/components/home/Cta'));

const Index = () => {
  const { meta } = useContent();
  
  return (
    <>
      <Helmet>
        <title>{meta.home.title}</title>
        <meta name="description" content={meta.home.description} />
        <meta name="keywords" content={meta.home.keywords} />
        <link rel="canonical" href={meta.home.canonical} />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <ServicesList />
          <WhyChooseUs />
          <ServiceAreas />
          <Cta />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Index;
