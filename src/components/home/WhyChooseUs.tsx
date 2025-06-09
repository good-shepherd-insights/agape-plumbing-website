import { Check } from 'lucide-react';
import { useContent } from '@/hooks/use-content';

const WhyChooseUs = () => {
  const { home } = useContent();
  
  return (
    <section className="py-16 md:py-24 brutalist-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="font-mono uppercase text-sm font-bold border-b-2 border-black">{home.sections.whyChooseUs}</span>
              <h2 className="mt-2 uppercase">{home.whyChooseUs.heading}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              {home.whyChooseUs.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {home.whyChooseUs.reasons.map(reason => <div key={reason.id} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 border-2 border-black rounded-sm bg-plumbing-800 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-1 uppercase">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-plumbing-800 p-8 border-4 border-black rounded-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] text-white">
              <h3 className="text-2xl font-bold mb-6 uppercase">{home.whyChooseUs.testimonial.title}</h3>
              <blockquote className="text-lg italic mb-6">
                {home.whyChooseUs.testimonial.quote}
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white border-2 border-black rounded-md flex items-center justify-center text-plumbing-800 font-bold text-xl mr-4">
                  {home.whyChooseUs.testimonial.initials}
                </div>
                <div>
                  <p className="font-bold">{home.whyChooseUs.testimonial.name}</p>
                  <p className="text-sm uppercase font-mono">{home.whyChooseUs.testimonial.location}</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
                <span className="ml-2">{home.whyChooseUs.testimonial.rating}</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-plumbing-900 p-4 border-2 border-black rounded-md">
              <p className="font-bold uppercase text-white">{home.whyChooseUs.testimonial.reviewCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section> );
};
export default WhyChooseUs;