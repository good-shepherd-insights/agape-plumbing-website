import { company } from '@/content/company';
import { navigation } from '@/content/navigation';
import { meta } from '@/content/meta';
import { home } from '@/content/home';
import { services } from '@/content/services';
import { about } from '@/content/about';
import { contact } from '@/content/contact';
import { footer } from '@/content/footer';
import { servicesList } from '@/content/servicesList';
import { notFound } from '@/content/notFound';

// Create the same structure as the original siteCopy for backward compatibility
const siteCopy = {
  company,
  navigation,
  meta,
  home,
  services,
  about,
  contact,
  footer,
  servicesList,
  notFound
};

export function useContent() {
  return siteCopy;
}