
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
        <title>Agape Plumbing | Professional Plumbing Services in Southern California</title>
        <meta name="description" content="Trusted plumbing contractors serving Southern California with 24/7 emergency services, repairs, installations, and more. Licensed, bonded, and insured." />
        <meta name="keywords" content="plumbing contractor, emergency plumber, plumbing repairs, plumbing installation, Southern California plumber" />
        <link rel="canonical" href="https://agapeplumbing.com/" />
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
