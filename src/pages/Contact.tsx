import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/use-content';

const Contact = () => {
  const { contact, meta, company } = useContent();
  
  return (
    <>
      <Helmet>
        <title>{meta.contact.title}</title>
        <meta name="description" content={meta.contact.description} />
        <meta name="keywords" content={meta.contact.keywords} />
        <link rel="canonical" href={meta.contact.canonical} />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="mb-4">{contact.hero.title}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {contact.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-plumbing-700 mb-8">{contact.contactInfo.title}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{contact.contactInfo.phone.title}</h3>
                      <p className="text-xl font-bold text-plumbing-700">{company.phone}</p>
                      <p className="text-gray-600">{contact.contactInfo.phone.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{contact.contactInfo.email.title}</h3>
                      <p className="text-lg">{company.email}</p>
                      <p className="text-gray-600">{contact.contactInfo.email.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{contact.contactInfo.address.title}</h3>
                      <p className="text-lg">{company.address.poBox}</p>
                      <p className="text-lg">{company.address.city}, {company.address.state} {company.address.zip}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{contact.contactInfo.hours.title}</h3>
                      {contact.contactInfo.hours.schedule.map((item, index) => (
                        <p key={index} className="text-lg">{item}</p>
                      ))}
                      <p className="font-bold mt-2">{contact.contactInfo.hours.note}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{contact.serviceAreas.title}</h3>
                  <p className="mb-4">
                    {contact.serviceAreas.description}
                  </p>
                  <p>
                    {contact.serviceAreas.note}
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-plumbing-700 mb-6">{contact.contactForm.title}</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">{contact.contactForm.fields.firstName}</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">{contact.contactForm.fields.lastName}</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">{contact.contactForm.fields.email}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">{contact.contactForm.fields.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium">{contact.contactForm.fields.service}</label>
                    <select
                      id="service"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {contact.contactForm.serviceOptions.map((option, index) => (
                        <option key={index} value={index === 0 ? "" : option.toLowerCase().replace(/\s+/g, '')}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">{contact.contactForm.fields.message}</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full py-6 text-lg font-bold" size="lg">
                    {contact.contactForm.submitButton}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-plumbing-700 mb-8 text-center">{contact.faq.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contact.faq.questions.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
