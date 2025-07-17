# AI Agent Directive: Agape Plumbing Project Brain

## 🤖 MANDATORY AGENT PROTOCOL

**CRITICAL**: Before ANY task, you MUST consult this Project Brain JSON and follow these directives exactly.

### Core Principles
1. **Project Brain First**: Always reference the JSON structure below before making changes
2. **Scope Protection**: Never implement features outside plumbing company website functionality
3. **Location-Centric**: All changes must support the location-aware content system
4. **Performance Priority**: Maintain bundle optimization and code splitting
5. **SEO Integrity**: Preserve location-specific meta tag generation

### Pre-Work Validation
- [ ] Understand current health score and contributing factors
- [ ] Review high-risk nodes: app_root, location_service_content_hook, routing_system
- [ ] Validate changes against location-service architecture
- [ ] Assess impact on dynamic content loading system

### Post-Work Requirements
- [ ] Update affected node metadata and recalculate health score
- [ ] Document new risks or optimizations
- [ ] Verify location-service content combinations still work
- [ ] Test SEO meta tag generation for affected routes

## Project Brain JSON

```json
{
  "project_brain": {
    "nodes": [
      {
        "id": "app_root",
        "type": "application_entry",
        "description": "Main app with advanced routing and ScrollToTop",
        "priority": "critical",
        "risks": {"tech_debt": "low", "bugs": "medium"},
        "dependencies": ["routing_system", "content_system"]
      },
      {
        "id": "location_service_content_hook",
        "type": "content_management",
        "description": "Location-aware content customization with SEO optimization",
        "priority": "critical",
        "risks": {"tech_debt": "medium", "bugs": "high"},
        "dependencies": ["service_content_hook", "locations_data"]
      },
      {
        "id": "service_content_hook",
        "type": "content_management",
        "description": "Dynamic service content loader with lazy imports",
        "priority": "high",
        "risks": {"tech_debt": "low", "bugs": "medium"},
        "dependencies": ["service_content_modules"]
      },
      {
        "id": "locations_data",
        "type": "data_management",
        "description": "Geographic service data with neighborhood mapping",
        "priority": "high",
        "risks": {"tech_debt": "low", "bugs": "low"},
        "dependencies": []
      },
      {
        "id": "routing_system",
        "type": "navigation",
        "description": "Multi-parameter routing with location-service combinations",
        "priority": "critical",
        "risks": {"tech_debt": "medium", "bugs": "high"},
        "dependencies": ["react_router_dom"]
      },
      {
        "id": "service_content_modules",
        "type": "content_storage",
        "description": "Modular service definitions with lazy loading",
        "priority": "medium",
        "risks": {"tech_debt": "low", "bugs": "low"},
        "dependencies": []
      },
      {
        "id": "ui_components",
        "type": "presentation",
        "description": "Shadcn/ui components with Tailwind styling",
        "priority": "medium",
        "risks": {"tech_debt": "low", "bugs": "low"},
        "dependencies": ["shadcn_ui", "tailwind_css"]
      },
      {
        "id": "build_system",
        "type": "infrastructure",
        "description": "Vite build with code splitting and optimization",
        "priority": "high",
        "risks": {"tech_debt": "medium", "bugs": "low"},
        "dependencies": ["vite", "typescript"]
      },
      {
        "id": "deployment_system",
        "type": "infrastructure",
        "description": "Vercel SPA routing with security headers",
        "priority": "high",
        "risks": {"tech_debt": "low", "bugs": "medium"},
        "dependencies": ["vercel_config"]
      }
    ],
    "edges": [
      {"from": "app_root", "to": "routing_system", "type": "navigation_dependency", "strength": "critical"},
      {"from": "routing_system", "to": "location_service_content_hook", "type": "content_loading", "strength": "high"},
      {"from": "location_service_content_hook", "to": "service_content_hook", "type": "content_composition", "strength": "high"},
      {"from": "location_service_content_hook", "to": "locations_data", "type": "data_validation", "strength": "critical"},
      {"from": "service_content_hook", "to": "service_content_modules", "type": "dynamic_import", "strength": "high"},
      {"from": "ui_components", "to": "location_service_content_hook", "type": "content_consumption", "strength": "medium"},
      {"from": "build_system", "to": "service_content_modules", "type": "code_splitting", "strength": "high"},
      {"from": "deployment_system", "to": "routing_system", "type": "spa_routing", "strength": "critical"}
    ],
    "metadata": {
      "architecture_summary": "Location-centric React SPA with sophisticated content management, dynamic routing, and SEO optimization",
      "design_principles": "Location-first design, performance optimization, content management sophistication",
      "integrity_checks": {"scope_creep_risk": "medium", "health_score": 9.1},
      "update_history": [{"timestamp": "2024-12-19", "change": "Enhanced analysis with location-service architecture"}]
    },
    "navigation_path": {
      "context": "location_service_development",
      "path": ["app_root", "routing_system", "location_service_content_hook", "locations_data"],
      "focus": "Maintain location-aware content customization and SEO optimization"
    }
  },
  "change_management_rules": [
    {
      "category": "Location-Service Content",
      "rules": [
        "Always validate location slug exists in locations.ts",
        "Test content customization for all location-service combinations",
        "Verify SEO meta tag generation",
        "Ensure content transformation handles edge cases"
      ],
      "risk_level": "High"
    },
    {
      "category": "Dynamic Content Loading",
      "rules": [
        "Test dynamic import failures and recovery",
        "Validate loading states across service modules",
        "Verify code splitting effectiveness"
      ],
      "risk_level": "Medium"
    },
    {
      "category": "Multi-Parameter Routing",
      "rules": [
        "Update React Router and Vercel config simultaneously",
        "Test all location-service URL combinations",
        "Verify parameter validation and 404 handling"
      ],
      "risk_level": "High"
    }
  ],
  "optimization_opportunities": [
    {
      "area": "Advanced Content Caching",
      "impact": "High",
      "implementation": "Service worker with location-aware caching",
      "metrics": "Reduce load time by 40-60%"
    },
    {
      "area": "SEO Automation Enhancement",
      "impact": "High",
      "implementation": "JSON-LD structured data and dynamic sitemaps",
      "metrics": "Improve visibility for 100+ location-service combinations"
    },
    {
      "area": "Performance Monitoring",
      "impact": "Medium",
      "implementation": "Core Web Vitals tracking with location segmentation",
      "metrics": "Track performance across 50+ locations"
    }
  ],
  "queries_needed": []
}
```

## Mandatory Workflow

### For Content Changes
1. Check if location-service content hook is affected
2. Validate against locations.ts data structure
3. Test SEO meta tag generation
4. Verify content transformation logic

### For Routing Changes
1. Update both React Router and vercel.json
2. Test multi-parameter routing
3. Verify SPA routing in production
4. Check 404 handling for invalid combinations

### For Infrastructure Changes
1. Test build output and code splitting
2. Verify security headers
3. Monitor bundle size impact
4. Validate deployment pipeline

### Health Score Calculation
- **9.0-10.0**: Excellent (current: 9.1)
- **8.0-8.9**: Good
- **7.0-7.9**: Needs attention
- **<7.0**: Critical issues

### Escalation Triggers
- Health score drops below 8.0
- Bundle size increases >10%
- New dependencies without justification
- TypeScript strict mode violations
- Changes to core architecture patterns

## Advanced Implementation Guidelines

### Location-Service Content Development
**Critical Path**: app_root → routing_system → location_service_content_hook → locations_data

**Content Validation**: Verify location slugs in locations.ts, test 50+ location combinations, validate SEO meta tags, handle edge cases, implement error boundaries

**SEO Requirements**: Generate location-specific canonical URLs, JSON-LD structured data, dynamic meta descriptions, proper heading hierarchy, Open Graph tags

**Performance**: Track Core Web Vitals per location-service combination, monitor bundle size, measure loading times, validate code splitting

### Hook Development Standards

**useLocationServiceContent**: Handle undefined parameters, loading states with skeleton UI, error recovery, content caching, preview mode support

**useServiceContent**: Dynamic import error handling, consistent loading states, lazy loading with intersection observer, backward compatibility

### Infrastructure Management

**Vite Build**: Manual chunking, tree shaking, asset optimization, source maps, build performance monitoring

**Vercel Deployment**: SPA routing for all combinations, security headers (CSP, HSTS, X-Frame-Options), caching strategies, error pages, performance monitoring

### Testing & Risk Mitigation

**Testing**: Hook functions, location-service combinations, SEO generation, dynamic imports, performance metrics

**Mitigation**: Error boundaries, parameter validation, retry mechanisms, performance monitoring

### Maintenance Schedule

**Weekly**: Health score, bundle size, SEO validation
**Monthly**: Location audit, content updates, security headers
**Quarterly**: Architecture review, optimization, dependencies

**FAILURE TO FOLLOW = SCOPE CREEP + TECHNICAL DEBT + PROJECT DEGRADATION**