import { useEffect } from 'react';

interface CanonicalValidationConfig {
  expectedCanonical: string;
  pageIdentifier: string;
  enableLogging?: boolean;
}

/**
 * Simple hook to validate canonical URLs and detect conflicts
 */
export const useCanonicalValidation = ({
  expectedCanonical,
  pageIdentifier,
  enableLogging = process.env.NODE_ENV === 'development'
}: CanonicalValidationConfig) => {
  useEffect(() => {
    if (!enableLogging) return;

    const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
    const actualCanonical = (canonicalLinks[0] as HTMLLinkElement)?.href;
    const normalizedExpected = normalizeUrl(expectedCanonical);
    const normalizedActual = actualCanonical ? normalizeUrl(actualCanonical) : '';
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;

    const validationChecks = {
      missingCanonical: {
        condition: () => canonicalLinks.length === 0,
        action: () => console.warn(`[Canonical] No canonical link found on ${pageIdentifier}`)
      },
      multipleCanonicals: {
        condition: () => canonicalLinks.length > 1,
        action: () => console.error(`[Canonical] Multiple canonical links found on ${pageIdentifier}:`, 
          Array.from(canonicalLinks).map(link => (link as HTMLLinkElement).href))
      },
      urlMismatch: {
        condition: () => normalizedExpected !== normalizedActual,
        action: () => console.warn(`[Canonical] URL mismatch on ${pageIdentifier}:`, {
          expected: normalizedExpected,
          actual: normalizedActual
        })
      },
      ogUrlMismatch: {
        condition: () => ogUrl && normalizeUrl(ogUrl.content) !== normalizedActual,
        action: () => console.warn(`[Canonical] OG URL mismatch on ${pageIdentifier}:`, {
          canonical: normalizedActual,
          ogUrl: ogUrl.content
        })
      }
    };

    // Execute validation checks in order
    for (const [checkName, check] of Object.entries(validationChecks)) {
      if (check.condition()) {
        check.action();
        return;
      }
    }

    console.log(`[Canonical] ✓ Valid on ${pageIdentifier}`);
  }, [expectedCanonical, pageIdentifier, enableLogging]);
};

/**
 * Normalize URL for comparison
 */
const normalizeUrl = (url: string): string => {
  return url
    .replace(/\/$/, '') // Remove trailing slash
    .replace(/^http:/, 'https:'); // Ensure HTTPS
};

/**
 * Generate canonical URL from path
 */
export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://agapeplumbinginc.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Build canonical path from location and service
 */
export const buildCanonicalPath = (location?: string, service?: string): string => {
  const pathPatterns = {
    locationAndService: {
      condition: () => Boolean(location && service),
      path: () => `/services/${location}/${service}`
    },
    locationOnly: {
      condition: () => Boolean(location),
      path: () => `/areas/${location}`
    },
    default: {
      condition: () => true,
      path: () => '/'
    }
  };

  const pattern = Object.values(pathPatterns).find(p => p.condition());
  return pattern?.path() || '/';
};