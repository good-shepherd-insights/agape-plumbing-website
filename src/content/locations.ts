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
  'walkersville': {
  slug: 'walkersville',
  name: 'Walkersville',
  fullName: 'Walkersville, MD',
  county: 'Frederick County',
  neighborhoods: ['Sun Meadow', 'Glade Town', 'Deerfield', 'Colony Village'],
  landmarks: ['Walkersville Community Park', 'Heritage Farm Park', 'Glade Valley Golf Club'],
  commonIssues: ['Well water concerns', 'Septic system maintenance', 'Pipe aging in older developments'],
  serviceAreas: ['Walkersville Town', 'Frederick County', 'Surrounding areas'],
},
'middletown': {
  slug: 'middletown',
  name: 'Middletown',
  fullName: 'Middletown, MD',
  county: 'Frederick County',
  neighborhoods: ['Glenbrook', 'Foxfield at Middletown', 'Brookfield', 'Gambrill View'],
  landmarks: ['Main Street Historic District', 'Middletown Community Park', 'Catoctin Creek Park'],
  commonIssues: ['Septic tank inspections', 'Water pressure issues', 'Stormwater drainage'],
  serviceAreas: ['Middletown Town', 'Frederick County', 'Surrounding areas'],
},
'new-market': {
  slug: 'new-market',
  name: 'New Market',
  fullName: 'New Market, MD',
  county: 'Frederick County',
  neighborhoods: ['Woodspring', 'Brinkley Manor', 'Aspen North', 'The Orchard at New Market'],
  landmarks: ['Historic New Market', 'New Market Community Park', 'Lake Linganore'],
  commonIssues: ['Water quality issues', 'Well pump servicing', 'Drainage system repairs'],
  serviceAreas: ['New Market Town', 'Frederick County', 'Surrounding areas'],
},
'thurmont': {
  slug: 'thurmont',
  name: 'Thurmont',
  fullName: 'Thurmont, MD',
  county: 'Frederick County',
  neighborhoods: ['Jermae Estates', 'Catoctin Highlands', 'Graceham', 'Hunting Creek'],
  landmarks: ['Catoctin Mountain Park', 'Thurmont Trolley Trail', 'Main Street Thurmont'],
  commonIssues: ['Mountain runoff affecting water systems', 'Frozen pipes in winter', 'Well and septic maintenance'],
  serviceAreas: ['Thurmont Town', 'Frederick County', 'Surrounding areas'],
}
};

export const getLocationBySlug = (slug: string): Location | null => {
  return locations[slug] || null;
};

export const getAllLocations = (): Location[] => {
  return Object.values(locations);
};