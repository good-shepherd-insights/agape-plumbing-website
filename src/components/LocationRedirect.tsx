import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLocationBySlug } from '@/content/locations';
import { getServiceSlugs } from '@/hooks/use-service-content';
import ServiceDetail from '@/pages/services/ServiceDetail';

/**
 * Component that handles both service details and location redirects
 * - If the slug is a valid service, renders ServiceDetail
 * - If the slug is a valid location, redirects to /areas/:location
 * - Otherwise redirects to 404
 */
const ServiceOrLocationHandler = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (serviceSlug) {
      // First check if this is a service slug
      const serviceSlugs = getServiceSlugs();
      if (serviceSlugs.includes(serviceSlug)) {
        // This is a valid service slug, let ServiceDetail handle it
        return;
      }

      // Check if this is a location slug
      const locationData = getLocationBySlug(serviceSlug);
      
      if (locationData) {
        // This is a location slug, redirect to /areas/:location
        navigate(`/areas/${serviceSlug}`, { replace: true });
        return;
      }

      // Not a valid service or location slug, redirect to 404
      navigate('/404', { replace: true });
    } else {
      // If no parameter, redirect to services page
      navigate('/services', { replace: true });
    }
  }, [serviceSlug, navigate]);

  // If it's a valid service slug, render ServiceDetail
  if (serviceSlug && getServiceSlugs().includes(serviceSlug)) {
    return <ServiceDetail />;
  }

  // Return null for redirects
  return null;
};

export default ServiceOrLocationHandler;