import { useState, useEffect } from 'react';
import { ServiceContent } from './use-service-content';
import { getLocationBySlug, Location } from '@/content/locations';

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
        const locationContent = customizeContentForLocation(baseContent, location);
        
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
const customizeContentForLocation = (baseContent: ServiceContent, location: Location): ServiceContent => {
  const serviceName = baseContent.hero.title.toLowerCase();
  
  return {
    ...baseContent,
    hero: {
      ...baseContent.hero,
      title: `${baseContent.hero.title} in ${location.fullName}`,
      description: baseContent.hero.description.replace(
        /Frederick, MD|Gaithersburg|Rockville/g, 
        location.fullName
      ),
      imageAlt: `${baseContent.hero.imageAlt.replace('Frederick, MD', location.fullName)}`,
    },
    intro: {
      ...baseContent.intro,
      description: `${baseContent.intro.description} Our team proudly serves ${location.neighborhoods.join(', ')} and surrounding areas in ${location.county}. ${location.commonIssues.length > 0 ? `We understand the unique challenges in ${location.name}, including ${location.commonIssues.join(', ')}.` : ''}`,
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
      title: baseContent.meta.title.replace(/Frederick MD|Frederick, MD/g, location.fullName),
      description: baseContent.meta.description.replace(
        /Frederick, MD|Frederick County, Gaithersburg, Rockville/g,
        `${location.fullName}, ${location.county}`
      ),
      keywords: baseContent.meta.keywords.replace(
        /frederick/gi,
        location.slug
      ),
      canonical: `https://agapeplumbinginc.com/services/${location.slug}/${baseContent.meta.canonical?.split('/').pop()}`,
    },
  };
};