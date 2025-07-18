import { useState, useEffect } from 'react';

// Service content mapping
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

export interface ServiceContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    description: string;
  };
  whyChooseUs: {
    title: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  relatedServices?: {
    title: string;
    services: Array<{
      title: string;
      description: string;
      link: string;
    }>;
  };
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonical?: string;
  };
}

interface UseServiceContentReturn {
  content: ServiceContent | null;
  loading: boolean;
  error: boolean;
}

export function useServiceContent(serviceSlug: string | undefined): UseServiceContentReturn {
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      if (!serviceSlug || !serviceContentMap[serviceSlug]) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const serviceContent = await serviceContentMap[serviceSlug]();
        setContent(serviceContent);
      } catch (err) {
        console.error('Error loading service content:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [serviceSlug]);

  return { content, loading, error };
}

// Export the service content map for potential use in other components
export function getServiceSlugs(): string[] {
  return Object.keys(serviceContentMap);
}