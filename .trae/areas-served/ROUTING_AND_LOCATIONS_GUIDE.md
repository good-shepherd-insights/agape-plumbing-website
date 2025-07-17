# Routing and Locations Guide

## Overview

This guide provides step-by-step instructions for adding new routes and locations to the Agape Plumbing website. The project uses a sophisticated location-aware architecture that requires updates across multiple files to maintain consistency and functionality.

## Architecture Overview

The project follows a location-centric design pattern:
- **Location Data**: Centralized in `src/content/locations.ts`
- **Dynamic Routing**: Multi-parameter routes for location-service combinations
- **Content Customization**: Location-aware content loading with SEO optimization
- **Production Routing**: Vercel configuration for SPA routing

## Adding New Locations

### Step 1: Update Location Data

**File**: `src/content/locations.ts`

1. Add new location object to the `locations` export:

```typescript
export const locations = {
  // ... existing locations
  "new-location-slug": {
    slug: "new-location-slug",
    name: "Location Name",
    fullName: "Full Location Name, State",
    county: "County Name",
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2"
    ],
    landmarks: [
      "Notable Landmark 1",
      "Notable Landmark 2"
    ],
    commonIssues: [
      "Common plumbing issue 1",
      "Common plumbing issue 2"
    ],
    serviceAreas: [
      "Service Area 1",
      "Service Area 2"
    ]
  }
};
```

**Required Fields**:
- `slug`: URL-friendly identifier (lowercase, hyphens only)
- `name`: Display name for the location
- `fullName`: Complete name with state for SEO
- `county`: County name for grouping
- `neighborhoods`: Array of served neighborhoods
- `landmarks`: Notable landmarks for local SEO
- `commonIssues`: Location-specific plumbing issues
- `serviceAreas`: Broader service areas covered

### Step 2: Verify Location Integration

The location will automatically be available through:
- `getLocationBySlug(slug)` function
- `getAllLocations()` function
- Location-aware content hooks
- SEO meta tag generation

## Adding New Routes

### Step 1: Update React Router Configuration

**File**: `src/App.tsx`

Add new route to the Routes component:

```typescript
import { NewPageComponent } from './pages/NewPage';

// In the Routes component
<Routes>
  {/* ... existing routes */}
  <Route path="/new-route" element={<NewPageComponent />} />
  <Route path="/new-route/:parameter" element={<NewPageComponent />} />
</Routes>
```

### Step 2: Update Vercel Configuration

**File**: `vercel.json`

Add rewrite rule for production SPA routing:

```json
{
  "rewrites": [
    // ... existing rewrites
    {
      "source": "/new-route",
      "destination": "/index.html"
    },
    {
      "source": "/new-route/:parameter",
      "destination": "/index.html"
    }
  ]
}
```

### Step 3: Create Page Component

**File**: `src/pages/NewPage.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export function NewPage() {
  const { parameter } = useParams();

  return (
    <>
      <Helmet>
        <title>Page Title | Agape Plumbing</title>
        <meta name="description" content="Page description" />
        <link rel="canonical" href={`https://agapeplumbing.com/new-route${parameter ? `/${parameter}` : ''}`} />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Page content */}
      </div>
    </>
  );
}
```

## Location-Service Route Pattern

For location-specific service pages, follow this pattern:

### URL Structure
```
/services/{location-slug}/{service-slug}
/areas/{location-slug}/{service-slug}
/areas/{location-slug}
```

### Implementation Example

1. **Route Definition** (App.tsx):
```typescript
<Route path="/services/:location/:serviceSlug" element={<LocationServiceDetail />} />
```

2. **Vercel Rewrite** (vercel.json):
```json
{
  "source": "/services/:location/:serviceSlug",
  "destination": "/index.html"
}
```

3. **Component Implementation**:
```typescript
import { useLocationServiceContent } from '../hooks/use-location-service-content';

export function LocationServiceDetail() {
  const { location, serviceSlug } = useParams();
  const { content, loading, error } = useLocationServiceContent(location, serviceSlug);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;
  
  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={content.canonicalUrl} />
      </Helmet>
      {/* Component content */}
    </>
  );
}
```

## Content Hooks Usage

### useLocationServiceContent Hook

For location-specific service content:

```typescript
import { useLocationServiceContent } from '../hooks/use-location-service-content';

const { content, loading, error } = useLocationServiceContent(locationSlug, serviceSlug);
```

**Features**:
- Automatic location validation
- Content customization based on location data
- SEO meta tag generation
- Error handling for invalid combinations

### useServiceContent Hook

For general service content:

```typescript
import { useServiceContent } from '../hooks/use-service-content';

const { content, loading, error } = useServiceContent(serviceSlug);
```

## SEO Considerations

### Meta Tags
Each page should include:
- Title with location and service specificity
- Meta description with local keywords
- Canonical URL
- Open Graph tags for social sharing

### URL Structure
- Use hyphens for word separation
- Keep URLs concise but descriptive
- Include location and service identifiers
- Maintain consistency across similar pages

## Testing Checklist

After adding new routes or locations:

### Development Testing
- [ ] Route loads correctly in development
- [ ] Parameters are parsed correctly
- [ ] Content loads without errors
- [ ] Navigation works from other pages
- [ ] Back/forward browser navigation works

### Production Testing
- [ ] Route works after deployment
- [ ] Direct URL access works (not just navigation)
- [ ] SEO meta tags are generated correctly
- [ ] Canonical URLs are correct
- [ ] 404 handling works for invalid parameters

### Content Validation
- [ ] Location data is accessible via hooks
- [ ] Content customization works correctly
- [ ] Loading states display properly
- [ ] Error states handle gracefully

## Common Patterns

### Navigation Links

When creating links to location-service pages:

```typescript
import { Link } from 'react-router-dom';

<Link to={`/services/${locationData.slug}/${service.slug}`}>
  {service.name} in {locationData.name}
</Link>
```

### Breadcrumbs

```typescript
<nav className="breadcrumbs">
  <Link to="/">Home</Link>
  <Link to="/services">Services</Link>
  <Link to={`/areas/${locationData.slug}`}>{locationData.name}</Link>
  <span>{service.name}</span>
</nav>
```

### Dynamic Content

```typescript
const customizedContent = {
  ...baseContent,
  title: `${baseContent.title} in ${locationData.name}`,
  description: baseContent.description.replace(
    '{location}', 
    locationData.fullName
  ),
  localizedContent: {
    neighborhoods: locationData.neighborhoods,
    commonIssues: locationData.commonIssues
  }
};
```

## Troubleshooting

### Route Not Loading
1. Check React Router configuration in App.tsx
2. Verify Vercel rewrite rule in vercel.json
3. Ensure component is properly imported
4. Check for TypeScript errors

### Content Not Loading
1. Verify location slug exists in locations.ts
2. Check service slug is valid
3. Review hook implementation for errors
4. Check browser console for JavaScript errors

### SEO Issues
1. Verify Helmet configuration
2. Check canonical URL generation
3. Test meta tag rendering
4. Validate structured data if applicable

### Production Issues
1. Check Vercel deployment logs
2. Verify build completed successfully
3. Test direct URL access
4. Check for caching issues

## File Checklist

When adding new routes/locations, update these files:

- [ ] `src/content/locations.ts` (for new locations)
- [ ] `src/App.tsx` (for new routes)
- [ ] `vercel.json` (for production routing)
- [ ] Create new page component
- [ ] Update navigation components if needed
- [ ] Update sitemap if applicable

## Best Practices

1. **Consistency**: Follow existing naming conventions
2. **Validation**: Always validate location and service parameters
3. **Error Handling**: Implement proper loading and error states
4. **SEO**: Include comprehensive meta tags
5. **Performance**: Use lazy loading for large content
6. **Testing**: Test both development and production environments
7. **Documentation**: Update this guide when patterns change

## AI Implementation Notes

For AI agents working on this project:

1. **Always consult** the Project Brain analysis before making changes
2. **Follow the mandatory protocol** for route and location changes
3. **Update health scores** after modifications
4. **Test thoroughly** in both development and production
5. **Document changes** in the project brain analysis
6. **Maintain consistency** with existing patterns and conventions

This ensures the sophisticated location-aware architecture remains intact and functional across all changes.