
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Agape Plumbing | 24/7 Professional Plumbers</title>
        <meta name="description" content="Contact Agape Plumbing for 24/7 emergency service, free estimates, and professional plumbing solutions in Southern California. Call (800) 878-4242 or submit our online form." />
        <meta name="keywords" content="contact plumber, plumbing company phone number, emergency plumber contact, plumbing quote, plumbing estimate" />
        <link rel="canonical" href="https://agapeplumbing.com/contact" />
      </Helmet>
      
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-plumbing-800 text-white py-24">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="mb-4">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Need plumbing help? We're available 24/7 for emergencies and ready to assist with all your plumbing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-plumbing-700 mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Phone</h3>
                      <p className="text-xl font-bold text-plumbing-700">(800) 878-4242</p>
                      <p className="text-gray-600">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <p className="text-lg">info@agapeplumbing.com</p>
                      <p className="text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Office Address</h3>
                      <p className="text-lg">PO Box 3215</p>
                      <p className="text-lg">Lakewood, CA 90711</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Office Hours</h3>
                      <p className="text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-lg">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-lg">Sunday: Emergency Services Only</p>
                      <p className="font-bold mt-2">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                  <p className="mb-4">
                    We proudly serve all of Southern California, including Los Angeles County, Orange County, Riverside County, San Bernardino County, and Ventura County.
                  </p>
                  <p>
                    Not sure if we service your area? Give us a call and we'll be happy to assist.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-plumbing-700 mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium">Service Needed</label>
                    <select
                      id="service"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="repair">Repair & Maintenance</option>
                      <option value="installation">Installation</option>
                      <option value="waterheater">Water Heater Service</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="commercial">Commercial Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full py-6 text-lg font-bold" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-plumbing-700 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How quickly can you respond to an emergency?</h3>
                <p className="text-gray-700">
                  We aim to arrive within 60 minutes for emergency calls. Our technicians are on standby 24/7, including weekends and holidays.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer free estimates?</h3>
                <p className="text-gray-700">
                  Yes, we provide free estimates for most plumbing services. Contact us to schedule an appointment with one of our technicians.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Are your plumbers licensed?</h3>
                <p className="text-gray-700">
                  Absolutely. All our plumbers are fully licensed, bonded, and insured. We maintain CA Contractor's License #992416.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer any warranties?</h3>
                <p className="text-gray-700">
                  Yes, we stand behind our work with a satisfaction guarantee and provide warranties on parts and labor for all services we perform.
                </p>
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
