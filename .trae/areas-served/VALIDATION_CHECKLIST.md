# Route and Location Validation Checklist

## Quick Reference for AI Agents and Developers

### Pre-Implementation Validation

#### Project Health Check
- [ ] Current health score ≥ 9.0
- [ ] No critical issues in project brain analysis
- [ ] Bundle size within acceptable limits
- [ ] All existing tests passing

#### Architecture Compliance
- [ ] Change aligns with location-centric design
- [ ] Follows established URL patterns
- [ ] Maintains SEO optimization standards
- [ ] Preserves content hook architecture

### Location Addition Checklist

#### Data Structure Validation
- [ ] Location added to `src/content/locations.ts`
- [ ] All required fields present:
  - [ ] `slug` (lowercase, hyphens only)
  - [ ] `name` (display name)
  - [ ] `fullName` (with state)
  - [ ] `county` (for grouping)
  - [ ] `neighborhoods` (array)
  - [ ] `landmarks` (array)
  - [ ] `commonIssues` (array)
  - [ ] `serviceAreas` (array)

#### Integration Verification
- [ ] `getLocationBySlug()` returns new location
- [ ] `getAllLocations()` includes new location
- [ ] Location appears in Areas page
- [ ] Location-service combinations work
- [ ] SEO meta tags generate correctly

#### Testing Requirements
- [ ] Location loads in development
- [ ] All service combinations accessible
- [ ] Content customization works
- [ ] Error handling for invalid services
- [ ] Production deployment successful

### Route Addition Checklist

#### React Router Configuration
- [ ] Route added to `src/App.tsx`
- [ ] Component properly imported
- [ ] Parameters defined correctly
- [ ] Route order doesn't conflict

#### Vercel Configuration
- [ ] Rewrite rule added to `vercel.json`
- [ ] Source pattern matches route
- [ ] Destination points to `/index.html`
- [ ] No conflicts with existing rules

#### Component Implementation
- [ ] Component created in appropriate directory
- [ ] Helmet configuration for SEO
- [ ] Proper error handling
- [ ] Loading states implemented
- [ ] Consistent styling applied

#### SEO Implementation
- [ ] Title tag with location/service specificity
- [ ] Meta description with local keywords
- [ ] Canonical URL properly formatted
- [ ] Open Graph tags included
- [ ] Structured data if applicable

### Content Hook Usage Validation

#### useLocationServiceContent
- [ ] Location parameter validated
- [ ] Service parameter validated
- [ ] Loading state handled
- [ ] Error state handled
- [ ] Content structure matches expected format
- [ ] SEO data properly extracted

#### useServiceContent
- [ ] Service slug validated
- [ ] Dynamic import successful
- [ ] Fallback content available
- [ ] Error boundaries implemented

### URL Pattern Compliance

#### Location-Service URLs
- [ ] Format: `/services/{location-slug}/{service-slug}`
- [ ] Alternative: `/areas/{location-slug}/{service-slug}`
- [ ] Location-only: `/areas/{location-slug}`
- [ ] Hyphens for word separation
- [ ] Lowercase throughout
- [ ] No special characters

#### General URLs
- [ ] Descriptive but concise
- [ ] Consistent with existing patterns
- [ ] SEO-friendly structure
- [ ] No duplicate content issues

### Performance Validation

#### Bundle Size
- [ ] Total increase <10%
- [ ] Dynamic imports used appropriately
- [ ] Code splitting effective
- [ ] No unnecessary dependencies

#### Loading Performance
- [ ] Initial page load <3 seconds
- [ ] Content loads progressively
- [ ] Skeleton UI during loading
- [ ] Smooth transitions

#### SEO Performance
- [ ] Meta tags render correctly
- [ ] Canonical URLs unique
- [ ] No duplicate content
- [ ] Proper heading hierarchy

### Development Testing

#### Local Development
- [ ] `bun dev` starts successfully
- [ ] Route accessible at correct URL
- [ ] Parameters parsed correctly
- [ ] Content loads without errors
- [ ] Navigation works from other pages
- [ ] Browser back/forward functions

#### Error Scenarios
- [ ] Invalid location slug returns 404
- [ ] Invalid service slug returns 404
- [ ] Network errors handled gracefully
- [ ] Content loading failures managed
- [ ] Fallback content displays

#### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Production Testing

#### Deployment Verification
- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Vercel deployment successful

#### Live URL Testing
- [ ] Direct URL access works
- [ ] Returns 200 status code
- [ ] Content renders correctly
- [ ] SEO meta tags present
- [ ] Social sharing works

#### Performance Monitoring
- [ ] Core Web Vitals acceptable
- [ ] Page load speed optimal
- [ ] Mobile performance good
- [ ] No JavaScript errors

### SEO Validation

#### Meta Tags
- [ ] Title unique and descriptive
- [ ] Description under 160 characters
- [ ] Canonical URL absolute and correct
- [ ] Open Graph tags complete
- [ ] No duplicate meta tags

#### Content Quality
- [ ] Heading hierarchy logical (H1 → H2 → H3)
- [ ] Content relevant to location/service
- [ ] Local keywords included naturally
- [ ] Contact information visible
- [ ] Call-to-action clear

#### Technical SEO
- [ ] URL structure clean
- [ ] No broken internal links
- [ ] Images have alt text
- [ ] Page loads quickly
- [ ] Mobile-friendly design

### Security Validation

#### Input Validation
- [ ] URL parameters sanitized
- [ ] No XSS vulnerabilities
- [ ] No injection attacks possible
- [ ] Error messages don't expose sensitive data

#### Headers and Configuration
- [ ] Security headers present
- [ ] HTTPS enforced
- [ ] No sensitive data in URLs
- [ ] Proper CORS configuration

### Accessibility Validation

#### Basic Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible
- [ ] Alt text for images

#### ARIA Implementation
- [ ] Proper ARIA labels
- [ ] Landmark roles defined
- [ ] Form labels associated
- [ ] Error messages accessible

### Documentation Updates

#### Code Documentation
- [ ] Component documented
- [ ] Hook usage explained
- [ ] Complex logic commented
- [ ] TypeScript interfaces defined

#### Project Documentation
- [ ] Route added to this checklist
- [ ] Location added to location guide
- [ ] Patterns documented if new
- [ ] Troubleshooting notes updated

### Post-Implementation Monitoring

#### Health Score Tracking
- [ ] Recalculate project health score
- [ ] Document any score changes
- [ ] Address any degradation
- [ ] Update risk assessments

#### Performance Monitoring
- [ ] Monitor bundle size changes
- [ ] Track page load times
- [ ] Watch for error rates
- [ ] Check SEO rankings

#### User Experience
- [ ] Navigation intuitive
- [ ] Content helpful and relevant
- [ ] Contact forms functional
- [ ] Mobile experience smooth

## Emergency Rollback Checklist

If issues arise after implementation:

### Immediate Actions
- [ ] Identify specific problem
- [ ] Check error logs
- [ ] Assess impact scope
- [ ] Determine rollback necessity

### Rollback Process
- [ ] Revert code changes
- [ ] Update Vercel configuration
- [ ] Test rollback functionality
- [ ] Verify site stability
- [ ] Document incident

### Post-Rollback
- [ ] Analyze root cause
- [ ] Update validation process
- [ ] Improve testing procedures
- [ ] Document lessons learned

## Quick Command Reference

### Development
```bash
# Start development server
bun dev

# Build for production
bun run build

# Type checking
bun run type-check

# Linting
bun run lint
```

### Testing URLs
```bash
# Test route accessibility
curl -I http://localhost:5173/new-route

# Test production deployment
curl -I https://agapeplumbing.com/new-route
```

### File Locations
- Routes: `src/App.tsx`
- Locations: `src/content/locations.ts`
- Vercel Config: `vercel.json`
- Components: `src/pages/`
- Hooks: `src/hooks/`

## Success Criteria

A successful implementation should:
- [ ] Pass all checklist items
- [ ] Maintain project health score ≥ 9.0
- [ ] Load in <3 seconds
- [ ] Work across all browsers
- [ ] Generate proper SEO meta tags
- [ ] Handle errors gracefully
- [ ] Follow established patterns
- [ ] Include comprehensive documentation

**Remember**: This checklist ensures consistency, quality, and maintainability across all route and location implementations in the Agape Plumbing project.