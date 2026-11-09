import { useState, useEffect } from 'react';
import { ServiceContent } from './use-service-content';
import { getLocationBySlug, Location } from '@/content/locations';

// Service benefits mapping for meta title template
const serviceBenefits: Record<string, string> = {
  'drain-cleaning': 'Fast Clog Removal & Prevention',
  'emergency-plumbing': '24/7 Emergency Response',
  'faucets-fixtures': 'Expert Installation & Repair',
  'kitchen-plumbing': 'Complete Kitchen Solutions',
  'pipe-repair': 'Professional Leak Detection',
  'sewer-services': 'Advanced Sewer Solutions',
  'toilet-services': 'Reliable Toilet Repair',
  'water-heater-services': 'Efficient Water Heating'
};

// Generate meta title using template: {Service} Near Me | {City}, {State Abbreviation} | Agape Drain & Plumbing
const generateLocationServiceTitle = (serviceTitle: string, location: Location, serviceSlug: string): string => {
  const cleanServiceTitle = serviceTitle.replace(/\s+(Services?|Service)\s*$/i, '').trim();
  return `${cleanServiceTitle} in ${location.name}, MD | Agape Drain And Plumbing`;
};

// Service content mapping (same as existing)
const serviceContentMap: Record<string, () => Promise<any>> = {
  'drain-cleaning': () => import('@/content/services/drainCleaning').then(m => m.drainCleaningCopy),
  'emergency-plumbing': () => import('@/content/services/emergencyPlumbing').then(m => m.emergencyPlumbingCopy),
  'faucets-fixtures': () => import('@/content/services/faucetsFixtures').then(m => m.faucetsFixturesCopy),
  'kitchen-plumbing': () => import('@/content/services/kitchenPlumbing').then(m => m.kitchenPlumbingCopy),
  'pipe-repair': () => import('@/content/services/pipeRepair').then(m => m.pipeRepairCopy),
  'sewer-services': () => import('@/content/services/sewerServices').then(m => m.sewerServicesCopy),
  'toilet-services': () => import('@/content/services/toiletServices').then(m => m.toiletServicesCopy),
  'water-heater-services': () => import('@/content/services/waterHeaterServices').then(m => m.waterHeaterServicesCopy),
};

interface LocationServiceContent extends ServiceContent {
  location: Location;
}

interface UseLocationServiceContentReturn {
  content: LocationServiceContent | null;
  loading: boolean;
  error: boolean;
}

export const useLocationServiceContent = (
  locationSlug: string | undefined,
  serviceSlug: string | undefined
): UseLocationServiceContentReturn => {
  const [content, setContent] = useState<LocationServiceContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      if (!locationSlug || !serviceSlug) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        // Get location data
        const location = getLocationBySlug(locationSlug);
        if (!location) {
          setError(true);
          setLoading(false);
          return;
        }

        // Get service content
        const serviceLoader = serviceContentMap[serviceSlug];
        if (!serviceLoader) {
          setError(true);
          setLoading(false);
          return;
        }

        const baseContent = await serviceLoader();
        
        // Customize content for location
        const locationContent = customizeContentForLocation(baseContent, location, serviceSlug);
        
        setContent({
          ...locationContent,
          location
        });
      } catch (err) {
        console.error('Error loading location service content:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [locationSlug, serviceSlug]);

  return { content, loading, error };
};

// Function to customize content for specific location
const customizeContentForLocation = (baseContent: ServiceContent, location: Location, serviceSlug: string): ServiceContent => {
  const frederickServiceDetails: Record<string, { description: string; intro: string; meta: string }> = {
    'drain-cleaning': {
      description: 'Need drain cleaning in Frederick, MD? Agape helps with clogged kitchen sinks, slow bathtub and shower drains, bathroom sink blockages, and sewer backups. Call (227) 223-9057 to discuss your drain problem and schedule service.',
      intro: 'For drain cleaning in Frederick, Maryland, we help identify the source of slow drains, recurring clogs, and wastewater backups. We discuss the symptoms, assess the affected drain, and recommend an appropriate cleaning or repair approach. Call to confirm service availability for your address.',
      meta: 'Drain cleaning in Frederick, MD for clogged sinks, shower drains and sewer backups. Call Agape Drain And Plumbing at (227) 223-9057 to schedule service.'
    },
    'emergency-plumbing': {
      description: 'Need a 24/7 emergency plumber in Frederick, MD? Call Agape at (227) 223-9057 for burst pipes, leaking water lines, overflowing toilets and urgent drain backups. Confirm current availability and arrival time by phone.',
      intro: 'For urgent plumbing problems in Frederick, Maryland, Agape offers 24/7 emergency plumbing service. If water is leaking, shut off the water supply if it is safe to do so. Call (227) 223-9057 to describe the issue, confirm coverage and check the earliest available service window.',
      meta: '24/7 emergency plumber in Frederick, MD for burst pipes, major leaks and drain backups. Call Agape at (227) 223-9057 to check availability.'
    }
  };
  const localDetails = location.slug === 'frederick' ? frederickServiceDetails[serviceSlug] : undefined;
  
  return {
    ...baseContent,
    hero: {
      ...baseContent.hero,
      title: `${baseContent.hero.title} in ${location.fullName}`,
      description: localDetails?.description ?? baseContent.hero.description.replace(
        /Frederick, MD|Gaithersburg|Rockville/g, 
        location.fullName
      ),
      imageAlt: `${baseContent.hero.imageAlt.replace('Frederick, MD', location.fullName)}`,
    },
    intro: {
      ...baseContent.intro,
      description: `${localDetails?.intro ?? baseContent.intro.description} Our team proudly serves ${location.neighborhoods.join(', ')} and surrounding areas in ${location.county}. ${location.commonIssues.length > 0 ? `We understand the unique challenges in ${location.name}, including ${location.commonIssues.join(', ')}.` : ''}`,
    },
    cta: {
      ...baseContent.cta,
      title: `${baseContent.cta.title} in ${location.name}?`,
      description: baseContent.cta.description.replace(
        /Frederick, Gaithersburg, Rockville, and surrounding areas/g,
        `${location.name}, ${location.serviceAreas.join(', ')}`
      ),
    },
    meta: {
      ...baseContent.meta,
      title: generateLocationServiceTitle(baseContent.hero.title, location, serviceSlug),
      description: localDetails?.meta ?? baseContent.meta.description.replace(
        /Frederick, MD|Frederick County, Gaithersburg, Rockville/g,
        `${location.fullName}, ${location.county}`
      ),
      keywords: baseContent.meta.keywords.replace(
        /frederick/gi,
        location.slug
      ),
      canonical: `https://agapeplumbinginc.com/services/${location.slug}/${serviceSlug}`,
    },
  };
};