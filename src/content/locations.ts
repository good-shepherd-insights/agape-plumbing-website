export interface Location {
  slug: string;
  name: string;
  fullName: string;
  county: string;
  neighborhoods: string[];
  landmarks: string[];
  commonIssues: string[];
  serviceAreas: string[];
  phoneNumber?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const locations: Record<string, Location> = {
  'frederick': {
    slug: 'frederick',
    name: 'Frederick',
    fullName: 'Frederick, MD',
    county: 'Frederick County',
    neighborhoods: ['Downtown Frederick', 'Clover Hill', 'Baker Park', 'Historic District'],
    landmarks: ['Baker Park', 'Frederick Historic District', 'Carroll Creek Park'],
    commonIssues: ['Older pipe systems in historic homes', 'Hard water issues', 'Seasonal pipe freezing'],
    serviceAreas: ['Frederick City', 'Frederick County', 'Surrounding areas'],
  },
  'gaithersburg': {
    slug: 'gaithersburg',
    name: 'Gaithersburg',
    fullName: 'Gaithersburg, MD',
    county: 'Montgomery County',
    neighborhoods: ['Kentlands', 'Crown', 'Washingtonian Woods', 'Diamond Farms'],
    landmarks: ['Kentlands', 'Rio Washingtonian Center', 'Bohrer Park'],
    commonIssues: ['Modern home plumbing updates', 'Water pressure issues', 'Garbage disposal problems'],
    serviceAreas: ['Gaithersburg City', 'Montgomery County', 'Surrounding areas'],
  },
  'rockville': {
    slug: 'rockville',
    name: 'Rockville',
    fullName: 'Rockville, MD',
    county: 'Montgomery County',
    neighborhoods: ['Rockville Town Center', 'King Farm', 'Fallsgrove', 'Twinbrook'],
    landmarks: ['Rockville Town Square', 'King Farm', 'Cabin John Regional Park'],
    commonIssues: ['High-rise plumbing systems', 'Water heater replacements', 'Bathroom renovations'],
    serviceAreas: ['Rockville City', 'Montgomery County', 'Surrounding areas'],
  },
  // Add more locations as needed
};

export const getLocationBySlug = (slug: string): Location | null => {
  return locations[slug] || null;
};

export const getAllLocations = (): Location[] => {
  return Object.values(locations);
};