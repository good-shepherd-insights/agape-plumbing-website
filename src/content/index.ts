import { company } from './company';
import { navigation } from './navigation';
import { meta } from './meta';
import { home } from './home';
import { services } from './services';
import { about } from './about';
import { contact } from './contact';
import { footer } from './footer';
import { servicesList } from './servicesList';
import { notFound } from './notFound';


export { company } from './company';
export { navigation } from './navigation';
export { meta } from './meta';
export { home } from './home';
export { services } from './services';
export { about } from './about';
export { contact } from './contact';
export { footer } from './footer';
export { servicesList } from './servicesList';
export { notFound } from './notFound';

// Legacy export for backward compatibility
export const siteCopy = {
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