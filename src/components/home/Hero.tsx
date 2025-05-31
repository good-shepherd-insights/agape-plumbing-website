import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';

const Hero = () => {
  const { home, company } = useContent();
  
  return <section className="relative bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-8 sm:py-16 border-b-4 border-black">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <span className="inline-block bg-white text-plumbing-900 px-4 py-2 font-mono uppercase text-sm font-bold mb-6 border-2 border-black rounded-md">
              {home.hero.emergencyBanner}
            </span>
            <h1 className="mb-6 uppercase">
              {home.hero.trustedHeading} <br className="hidden md:block" />
              <span className="text-primary-200">{home.hero.expertSubheading}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              {company.name} {home.hero.description2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg font-bold bg-white text-plumbing-900 border-2 border-black rounded-md hover:bg-gray-100 hover:translate-y-[-4px]">
                {home.hero.cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-plumbing-800 text-lg font-bold rounded-md hover:translate-y-[-4px]"
              >
                <Link  to="/services">{home.hero.serviceButtonText}</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="bg-white rounded-md p-2 mr-4 border-2 border-black">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm uppercase font-mono">{home.hero.callText}</p>
                <p className="text-2xl font-bold">{company.phone}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-lg border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)]">
              <h2 className="text-plumbing-800 text-2xl font-bold mb-4 uppercase">
                {home.hero.requestFormTitle}
              </h2>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full p-3 brutalist-input" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 brutalist-input" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full p-3 brutalist-input" />
                </div>
                <div>
                  <textarea placeholder="How can we help you?" rows={3} className="w-full p-3 brutalist-input"></textarea>
                </div>
                <Button className="w-full text-lg font-bold py-6 bg-plumbing-800 border-2 border-black rounded-md hover:translate-y-[-4px]" size="lg">
                  {home.hero.requestFormButton}
                </Button>
              </form>
              <p className="text-center text-sm text-gray-600 mt-4">
                {home.hero.requestFormConfirmation}
              </p>
            </div>
            {/* <div className="absolute -bottom-4 -right-4 bg-primary text-white py-2 px-4 border-2 border-black rounded-md">
              <p className="font-bold">{home.hero.estimatesAvailable}</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;