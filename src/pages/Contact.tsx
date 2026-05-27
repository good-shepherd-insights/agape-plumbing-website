import React, { useRef, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';
import { sendContactEmail } from '@/lib/emailjs';

const Contact = () => {
  const { contact, meta, company } = useContent();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(form.current);
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{meta.contact.title}</title>
        <meta name="description" content={meta.contact.description} />
        <meta name="keywords" content={meta.contact.keywords} />
        <link rel="canonical" href={meta.contact.canonical} />
        <meta property="og:title" content={meta.contact.title} />
        <meta property="og:description" content={meta.contact.description} />
        <meta property="og:url" content={meta.contact.canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": meta.contact.title,
            "description": meta.contact.description,
            "url": meta.contact.canonical,
            "mainEntity": {
              "@type": "LocalBusiness",
              "@id": "https://agapeplumbinginc.com/#localbusiness",
              "name": "Agape Drain & Plumbing LLC",
              "telephone": "+1-240-416-7902",
              "email": "agape7plumbing@gmail.com",
              "url": "https://agapeplumbinginc.com/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "109 Wheeler Ln",
                "addressLocality": "Frederick",
                "addressRegion": "MD",
                "postalCode": "21702",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-240-416-7902",
                  "contactType": "customer service",
                  "availableLanguage": "English",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "description": "24/7 Emergency Service Available"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "email": "agape7plumbing@gmail.com",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              ]
            },
            "hasPart": {
              "@type": "FAQPage",
              "mainEntity": contact.faq.questions.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
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
                  "name": "Contact",
                  "item": "https://agapeplumbinginc.com/contact"
                }
              ]
            }
          })}
        </script>
        {/* <meta property="og:image" content={meta.contact.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Agape Drain & Plumbing LLC - Professional Plumbing Services in Frederick, MD" /> */}
        <meta property="og:site_name" content="Agape Drain & Plumbing LLC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.contact.title} />
        <meta name="twitter:description" content={meta.contact.description} />
        {/* <meta name="twitter:image" content={meta.contact.ogImage} /> */}
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-20 md:py-32 border-b-4 border-black overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center px-4">
              <span className="inline-block bg-white text-plumbing-900 px-6 py-3 font-mono uppercase text-sm font-bold mb-8 border-2 border-black rounded-md">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                {contact.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold uppercase tracking-wide">
                {contact.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {company.phone}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold rounded-md px-8 py-4"
                  onClick={() => {
                    document.getElementById('message-us-form')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 md:py-32">
          <div className="container-custom px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <div className="text-center lg:text-left mb-16">
                  <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Contact Info</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">
                    {contact.contactInfo.title}
                  </h2>
                </div>
                
                <div className="space-y-8 mb-12">
                  <div className="brutalist-card group transition-all duration-300">
                    <div className="flex items-start p-8">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black mr-6 group-hover:bg-plumbing-700 transition-colors">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase mb-2">{contact.contactInfo.phone.title}</h3>
                        <p className="text-2xl font-bold text-plumbing-800 mb-2">{company.phone}</p>
                        <p className="text-gray-600">{contact.contactInfo.phone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="brutalist-card group transition-all duration-300">
                    <div className="flex items-start p-8">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black mr-6 group-hover:bg-plumbing-700 transition-colors">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase mb-2">{contact.contactInfo.email.title}</h3>
                        <p className="text-lg font-bold text-plumbing-800 mb-2">{company.email}</p>
                        <p className="text-gray-600">{contact.contactInfo.email.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="brutalist-card group transition-all duration-300">
                    <div className="flex items-start p-8">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black mr-6 group-hover:bg-plumbing-700 transition-colors">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase mb-2">{contact.contactInfo.address.title}</h3>
                        <p className="text-lg font-bold text-plumbing-800">{company.address.poBox}</p>
                        <p className="text-lg font-bold text-plumbing-800 mb-2">{company.address.city}, {company.address.state} {company.address.zip}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="brutalist-card group transition-all duration-300">
                    <div className="flex items-start p-8">
                      <div className="bg-plumbing-800 text-white p-4 rounded-md border-2 border-black mr-6 group-hover:bg-plumbing-700 transition-colors">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase mb-2">{contact.contactInfo.hours.title}</h3>
                        <div className="border-l-4 border-plumbing-800 pl-4 mt-2">
                          {contact.contactInfo.hours.schedule.map((item, index) => (
                            <p key={index} className="text-lg font-medium mb-1">{item}</p>
                          ))}
                        </div>
                        <p className="font-bold mt-3 text-plumbing-800">{contact.contactInfo.hours.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Areas Card */}
                <div className="brutalist-card bg-plumbing-800 text-white p-8 transition-all duration-300">
                  <h3 className="text-2xl font-black uppercase mb-6">{contact.serviceAreas.title}</h3>
                  <p className="text-lg mb-6">
                    {contact.serviceAreas.description}
                  </p>
                  <div className="bg-white text-plumbing-800 p-4 border-2 border-black rounded-md">
                    <p className="font-mono text-sm font-bold">
                      {contact.serviceAreas.note}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div id="message-us-form" className="brutalist-card p-8 md:p-12 bg-gray-50 transition-all duration-300 self-start">
                <div className="text-center mb-8">
                  <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Message Us</span>
                  <h2 className="text-3xl font-black uppercase text-plumbing-800 mb-6">{contact.contactForm.title}</h2>
                </div>
                
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.firstName}</label>
                      <input
                        type="text"
                        id="firstName"
                        name="first_name"
                        className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.lastName}</label>
                      <input
                        type="text"
                        id="lastName"
                        name="last_name"
                        className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all appearance-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="user_phone"
                      className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.service}</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service_type"
                        className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all appearance-none pr-10"
                      >
                         {contact.contactForm.serviceOptions.map((option, index) => (
                           <option key={index} value={index === 0 ? "" : option.toLowerCase().replace(/\s+/g, '')}>{option}</option>
                         ))}
                       </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-plumbing-800">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-3 font-bold uppercase text-sm text-plumbing-800">{contact.contactForm.fields.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-4 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-plumbing-800 focus:border-plumbing-800 bg-white text-black transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-bold border-2 border-black bg-plumbing-800 hover:bg-plumbing-700 text-white rounded-md active:translate-y-0 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] transition-all duration-200 uppercase disabled:opacity-50 disabled:cursor-not-allowed" 
                    size="lg"
                  >
                    <ArrowRight className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Sending...' : contact.contactForm.submitButton}
                  </Button>
                  
                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div className={`p-4 border-2 rounded-md transition-all duration-300 ${
                      submitStatus === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <p className={`text-center text-sm font-medium ${
                        submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! We\'ll get back to you soon.' 
                          : 'Failed to send message. Please try again or call us directly.'
                        }
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="FAQ" className="bg-gray-50">
          <div className="container-custom px-4">
            <div className="text-center mb-16">
              <span className="inline-block font-mono uppercase text-sm font-bold mb-4 border-b-2 border-black">Questions</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-plumbing-800 mb-6">{contact.faq.title}</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Find answers to common questions about our plumbing services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contact.faq.questions.map((item, index) => (
                <div key={index} className="brutalist-card bg-white p-8 group transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-plumbing-800 text-white p-3 rounded-md border-2 border-black mr-6 group-hover:bg-plumbing-700 transition-colors flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase mb-4">{item.question}</h3>
                      <p className="text-gray-700 border-l-4 border-plumbing-800 pl-4 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 md:py-32">
          <div className="container-custom px-4">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-10 md:p-16 border-4 border-black rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300">
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                  Plumbing Emergency?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Don't wait! Our emergency plumbing team is available 24/7 to help you.
                </p>
                <Button size="lg" className="text-xl font-bold bg-white text-red-600 border-2 border-black rounded-md hover:bg-gray-100 px-10 py-6">
                  <Phone className="h-6 w-6 mr-2" />
                  Emergency Service: {company.phone}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
