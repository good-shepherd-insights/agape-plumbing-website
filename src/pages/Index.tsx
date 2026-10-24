
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
                { image: 'https://lh3.googleusercontent.com/HxssyisuAJCOy4TI9KRqv4tprQBayIXRY2FpJwflJkfVZqQHB-f8QSSynSwaKGRLY4NGohB98peKE7gf=s0', title: 'Single-handle shower valve replacement', link: '/services/faucets-fixtures' },
                { image: 'https://lh3.googleusercontent.com/f7a9Qiy21rUVMzZteru3lhHFxl1cQdSi9JxgZWF9rVQr9nzfJFnAWht74IkdjbV9vLf04-SsRRxZGD9w=s0', title: 'Water shutoff valve replacement', link: '/services/pipe-repair' },
                { image: 'https://lh3.googleusercontent.com/rT2k6We1CB3BlXO552muL9_iYU6Ve_VS4p5xAULgBEz22guLYN8dUtHYJn0bq_68dwu7HsXQZcWHAEw2=s0', title: 'Toilet flange replacement', link: '/services/toilet-services' },
                { image: 'https://lh3.googleusercontent.com/mmKuBLDD6-RQhDfUUumoZFGTr2xk_YIb7Fh5IbucNzEKEDsSBv_ejSBZOEGjduS-_tircDmFkkGyJ-2S=s0', title: 'Water supply valve and copper piping replacement', link: '/services/pipe-repair' },
                { image: '/water-heater-replacement.webp', title: 'Water heater replacement', link: '/services/water-heater-services' },
                { image: '/bathroom-faucet-valves.webp', title: 'Bathroom faucet and shutoff valve replacement', link: '/services/faucets-fixtures' },
                { image: '/shower-fixture-replacement.webp', title: 'Shower fixture replacement', link: '/services/faucets-fixtures' },
                { image: '/kitchen-faucet-replacement.webp', title: 'Kitchen faucet replacement', link: '/services/kitchen-plumbing' },
                { image: '/toilet-replacement.webp', title: 'Toilet replacement', link: '/services/toilet-services' },
                { image: '/pipe-valve-repair.webp', title: 'Pipe and valve repair', link: '/services/pipe-repair' },
                { image: '/kitchen-sink-faucet-drain-garbage-disposal-before-after.webp', title: 'Kitchen sink, faucet, drain and disposal installation', link: '/services/kitchen-plumbing' },
              ].map((project) => (
                <a key={project.image} href={project.link} className="block overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <img src={project.image} alt={`Before-and-after photos of ${project.title.toLowerCase()} completed by Agape Drain And Plumbing`} loading="lazy" decoding="async" width="640" height="640" className="w-full aspect-square object-contain bg-gray-50" />
                  <h3 className="p-4 text-lg font-bold text-plumbing-800">{project.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="frederick-plumbing-heading" className="py-14 bg-sky-50">
          <div className="container-custom px-4 max-w-5xl">
            <h2 id="frederick-plumbing-heading" className="text-3xl md:text-4xl font-bold text-plumbing-800 mb-4">Drain Cleaning and Plumbing Help in Frederick, MD</h2>
            <p className="text-gray-700 text-lg mb-5">Dealing with a slow sink, clogged shower, leaking pipe, or water heater problem? Agape Drain And Plumbing, LLC serves Frederick and nearby Maryland communities. Tell us what is happening so we can discuss the next steps and appointment availability.</p>
            <nav aria-label="Popular Frederick plumbing services" className="flex flex-wrap gap-3">
              <a className="inline-block rounded-lg border border-sky-300 bg-white px-4 py-3 font-semibold text-plumbing-800 hover:bg-sky-100" href="/services/drain-cleaning">Drain cleaning</a>
              <a className="inline-block rounded-lg border border-sky-300 bg-white px-4 py-3 font-semibold text-plumbing-800 hover:bg-sky-100" href="/services/sewer-services">Sewer services</a>
              <a className="inline-block rounded-lg border border-sky-300 bg-white px-4 py-3 font-semibold text-plumbing-800 hover:bg-sky-100" href="/services/emergency-plumbing">Emergency plumbing</a>
              <a className="inline-block rounded-lg border border-sky-300 bg-white px-4 py-3 font-semibold text-plumbing-800 hover:bg-sky-100" href="/areas/frederick">Plumbing in Frederick</a>
              <a className="inline-block rounded-lg bg-plumbing-800 px-4 py-3 font-semibold text-white hover:opacity-90" href="/contact">Request plumbing service</a>
            </nav>
          </div>
        </section>
        <section aria-labelledby="local-service-links-heading" className="py-12 bg-white">
          <div className="container-custom px-4">
            <h2 id="local-service-links-heading" className="text-2xl md:text-3xl font-bold text-plumbing-800 mb-3">Plumbing and Drain Services by City</h2>
            <p className="text-gray-700 mb-5">Explore plumbing services in the Maryland communities we serve.</p>
            <nav aria-label="Local plumbing and drain service pages" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <a href="/services/frederick/drain-cleaning" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Frederick drain cleaning</a>
              <a href="/services/frederick/emergency-plumbing" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Frederick emergency plumbing</a>
              <a href="/services/gaithersburg/drain-cleaning" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Gaithersburg drain cleaning</a>
              <a href="/services/gaithersburg/emergency-plumbing" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Gaithersburg emergency plumbing</a>
              <a href="/services/rockville/emergency-plumbing" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Rockville emergency plumbing</a>
              <a href="/services/rockville/pipe-repair" className="rounded-lg border p-4 text-plumbing-800 font-semibold hover:bg-sky-50">Rockville pipe repair</a>
            </nav>
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
