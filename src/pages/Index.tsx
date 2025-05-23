
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ServicesList from '../components/home/ServicesList';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServiceAreas from '../components/home/ServiceAreas';
import Cta from '../components/home/Cta';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
<Helmet>
  <title>Agape Drain & Plumbing LLC | Trusted Plumbing Services in the DMV Area</title>
  <meta
    name="description"
    content="Agape Drain & Plumbing LLC offers expert plumbing services across Washington DC, Maryland, and Virginia. Our licensed professionals provide 24/7 emergency repairs, installations, and maintenance for residential and commercial clients."
  />
  <meta
    name="keywords"
    content="Agape Drain & Plumbing, emergency plumber DMV, pipe repair Washington DC, faucet installation Maryland, toilet repair Virginia, sump pump services, water heater replacement, garbage disposal repair, licensed plumber DMV"
  />
  <link rel="canonical" href="https://brand.site/AgapePlumbing" />
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
