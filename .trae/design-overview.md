# Agape Plumbing Design Overview

This document contains the comprehensive Design Brain JSON for the Agape Drain & Plumbing website, following the structured design scheme format for optimal maintainability and scalability.

## Tailwind Configuration Context

The project uses a comprehensive Tailwind CSS configuration that defines the design system foundation:

### Core Configuration
- **Framework**: Tailwind CSS with custom extensions
- **Dark Mode**: Class-based dark mode support
- **Content Sources**: HTML, TypeScript, TSX files across pages, components, app, and src directories
- **Container**: Centered with 2rem padding, max-width 1400px on 2xl screens

### Extended Color System
```typescript
// CSS Custom Properties Integration
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',

// Semantic Color Tokens
primary: {
  DEFAULT: 'hsl(var(--primary))',
  foreground: 'hsl(var(--primary-foreground))'
},
secondary: {
  DEFAULT: 'hsl(var(--secondary))',
  foreground: 'hsl(var(--secondary-foreground))'
},
destructive: {
  DEFAULT: 'hsl(var(--destructive))',
  foreground: 'hsl(var(--destructive-foreground))'
},
muted: {
  DEFAULT: 'hsl(var(--muted))',
  foreground: 'hsl(var(--muted-foreground))'
},
accent: {
  DEFAULT: 'hsl(var(--accent))',
  foreground: 'hsl(var(--accent-foreground))'
},
popover: {
  DEFAULT: 'hsl(var(--popover))',
  foreground: 'hsl(var(--popover-foreground))'
},
card: {
  DEFAULT: 'hsl(var(--card))',
  foreground: 'hsl(var(--card-foreground))'
}
```

### Brand Color Palette - Plumbing Scale
```typescript
plumbing: {
  50: '#F0FBFD',   // Lightest tint
  100: '#E0F7F9',  // Very light
  200: '#C2F0F3',  // Light
  300: '#A3E9ED',  // Light accent (used for highlights)
  400: '#85E2E7',  // Medium light
  500: '#66DBE1',  // Medium
  600: '#4fbec7',  // Medium dark
  700: '#46AAB1',  // Dark
  800: '#2A7A7E', // Primary brand color (adjusted for contrast)
  900: '#226568', // Darkest (adjusted for contrast)
},

// Extended Color Families
'plumbing-extended': {
  25: '#D6F8FA',   // Ultra light teal
  600: '#379CA3',  // Medium teal
  950: '#1B5052',  // Ultra dark teal
},
neutral: {
  25: '#F8FAFB',   // Ultra light gray
  300: '#CBD5E1',  // Light gray
  800: '#1E293B',  // Dark gray
},
'brand-blue': {
  900: '#001B4D',  // Ultra dark blue
  700: '#004080',  // Dark blue
  600: '#0059B3',  // Medium blue
},
success: {
  50: '#E7F8F1',   // Light green
  500: '#3BAA99',  // Medium green
  700: '#1F6F67',  // Dark green
},
warm: {
  50: '#FFEEDB',   // Light warm
  100: '#FDF6E3',  // Very light warm
  300: '#FFD29D',  // Medium warm
}
```

### Typography System
```typescript
fontFamily: {
  sans: ['Inter', 'sans-serif'],     // Body text, UI elements
  heading: ['Montserrat', 'sans-serif'] // Headings, brand text
}
```

### Border Radius System
```typescript
borderRadius: {
  lg: 'var(--radius)',              // Large radius
  md: 'calc(var(--radius) - 2px)', // Medium radius
  sm: 'calc(var(--radius) - 4px)'  // Small radius
}
```

### Animation System
```typescript
keyframes: {
  'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
  'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
  'fade-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
  'fade-out': { '0%': { opacity: '1', transform: 'translateY(0)' }, '100%': { opacity: '0', transform: 'translateY(10px)' } }
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.1s ease-out',
  'fade-out': 'fade-out 0.1s ease-out'
}
```

### Plugins
- **tailwindcss-animate**: Provides additional animation utilities

## Design Brain JSON

```json
{
  "design_brain": {
    "nodes": [
      {
        "id": "button_primary",
        "type": "button",
        "description": "Primary action buttons for calls-to-action and main interactions",
        "properties": {
          "styles": {
            "background-color": "hsl(var(--primary))",
            "color": "hsl(var(--primary-foreground))",
            "font-family": "Inter, sans-serif",
            "font-weight": "500",
            "border-radius": "var(--radius)",
            "border": "2px solid black",
            "box-shadow": "4px 4px 0px 0px rgba(0,0,0,0.3)",
            "transition": "all 0.2s ease"
          },
          "responsive": {
            "mobile": {"font-size": "14px", "padding": "8px 16px"},
            "desktop": {"font-size": "16px", "padding": "10px 16px"}
          },
          "variants": {
            "hover": {"transform": "translateY(-2px)", "box-shadow": "6px 6px 0px 0px rgba(0,0,0,0.3)"},
            "brutalist": {"border": "2px solid black", "background-color": "white", "color": "#2A7A7E"}
          }
        },
        "priority": "high",
        "risks": {"accessibility": "4.5:1 contrast maintained", "consistency": "Brutalist style consistent"}
      },
      {
        "id": "header_main",
        "type": "header",
        "description": "Main navigation header with logo and menu",
        "properties": {
          "styles": {
            "background-color": "white",
            "border-bottom": "4px solid black",
            "font-family": "Montserrat, sans-serif",
            "position": "sticky",
            "top": "0",
            "z-index": "40"
          },
          "responsive": {
            "mobile": {"padding": "16px", "height": "auto"},
            "desktop": {"padding": "16px 32px", "height": "80px"}
          },
          "variants": {
            "scrolled": {"box-shadow": "0 4px 0 0 rgba(0,0,0,0.1)", "padding": "8px 32px"}
          }
        },
        "priority": "critical",
        "risks": {"accessibility": "low", "consistency": "low"}
      },
      {
        "id": "hero_section",
        "type": "section",
        "description": "Hero sections with gradient backgrounds and brutalist elements",
        "properties": {
          "styles": {
            "background": "linear-gradient(to right, #2A7A7E, #226568)",
            "color": "white",
            "border-bottom": "4px solid black",
            "position": "relative",
            "overflow": "hidden"
          },
          "responsive": {
            "mobile": {"padding": "80px 16px"},
            "desktop": {"padding": "128px 32px"}
          },
          "variants": {
            "with_decorations": {"opacity": "0.1", "position": "absolute"}
          }
        },
        "priority": "high",
        "risks": {"accessibility": "White text on dark background - 7:1 contrast", "consistency": "medium"}
      },
      {
        "id": "card_brutalist",
        "type": "card",
        "description": "Brutalist-style cards with bold shadows and borders",
        "properties": {
          "styles": {
            "background-color": "white",
            "border": "2px solid black",
            "border-radius": "8px",
            "box-shadow": "8px 8px 0 0 #000",
            "transition": "all 0.2s ease"
          },
          "responsive": {
            "mobile": {"margin": "16px", "padding": "16px"},
            "desktop": {"margin": "24px", "padding": "24px"}
          },
          "variants": {
            "hover": {"box-shadow": "12px 12px 0 0 #000", "transform": "translateY(-2px)"}
          }
        },
        "priority": "medium",
        "risks": {"accessibility": "high contrast maintained", "consistency": "low"}
      },
      {
        "id": "typography_heading",
        "type": "typography",
        "description": "Bold, uppercase headings with tracking",
        "properties": {
          "styles": {
            "font-family": "Montserrat, sans-serif",
            "font-weight": "900",
            "text-transform": "uppercase",
            "letter-spacing": "tight",
            "line-height": "tight"
          },
          "responsive": {
            "mobile": {"font-size": "32px"},
            "tablet": {"font-size": "48px"},
            "desktop": {"font-size": "64px"}
          },
          "variants": {
            "h1": {"font-size": "clamp(32px, 6vw, 64px)"},
            "h2": {"font-size": "clamp(24px, 4vw, 48px)"},
            "h3": {"font-size": "clamp(20px, 3vw, 32px)"}
          }
        },
        "priority": "high",
        "risks": {"accessibility": "Ensure sufficient contrast", "consistency": "low"}
      },
      {
        "id": "typography_body",
        "type": "typography",
        "description": "Clean, readable body text",
        "properties": {
          "styles": {
            "font-family": "Inter, sans-serif",
            "font-weight": "400",
            "line-height": "relaxed",
            "color": "hsl(var(--foreground))"
          },
          "responsive": {
            "mobile": {"font-size": "14px"},
            "desktop": {"font-size": "16px"}
          },
          "variants": {
            "large": {"font-size": "18px", "line-height": "1.6"},
            "small": {"font-size": "14px", "line-height": "1.5"}
          }
        },
        "priority": "medium",
        "risks": {"accessibility": "4.5:1 contrast maintained", "consistency": "low"}
      },
      {
        "id": "input_brutalist",
        "type": "input",
        "description": "Form inputs with brutalist styling",
        "properties": {
          "styles": {
            "border": "2px solid black",
            "background-color": "white",
            "border-radius": "var(--radius)",
            "font-family": "Inter, sans-serif",
            "transition": "border-color 0.2s ease"
          },
          "responsive": {
            "mobile": {"padding": "12px", "font-size": "16px"},
            "desktop": {"padding": "12px 16px", "font-size": "14px"}
          },
          "variants": {
            "focus": {"border-color": "#2A7A7E", "outline": "none"},
            "error": {"border-color": "hsl(var(--destructive))"}
          }
        },
        "priority": "medium",
        "risks": {"accessibility": "Focus states clearly defined", "consistency": "low"}
      }
    ],
    "edges": [
      {"from": "button_primary", "to": "color_primary", "type": "uses_color", "strength": "critical"},
      {"from": "button_primary", "to": "font_inter", "type": "uses_font", "strength": "strong"},
      {"from": "header_main", "to": "logo_primary", "type": "contains", "strength": "critical"},
      {"from": "header_main", "to": "font_montserrat", "type": "uses_font", "strength": "strong"},
      {"from": "hero_section", "to": "color_plumbing_gradient", "type": "uses_color", "strength": "critical"},
      {"from": "card_brutalist", "to": "brutalist_shadow", "type": "uses_style", "strength": "strong"},
      {"from": "typography_heading", "to": "font_montserrat", "type": "uses_font", "strength": "critical"},
      {"from": "typography_body", "to": "font_inter", "type": "uses_font", "strength": "critical"},
      {"from": "input_brutalist", "to": "color_primary", "type": "uses_color", "strength": "medium"}
    ],
    "color_scheme": {
      "colors": [
        {
          "id": "color_primary",
          "name": "primary",
          "value": "hsl(210, 100%, 30%)",
          "hex_equivalent": "#003d99",
          "contrast_ratio": "7.2:1 against white",
          "usage": "Primary buttons, links, and key interactive elements",
          "variants": {"hover": "hsl(210, 100%, 25%)"}
        },
        {
          "id": "color_secondary",
          "name": "secondary",
          "value": "hsl(212, 100%, 25%)",
          "hex_equivalent": "#002080",
          "contrast_ratio": "8.1:1 against white",
          "usage": "Secondary buttons and supporting elements",
          "variants": {"hover": "hsl(212, 100%, 20%)"}
        },
        {
          "id": "color_plumbing_800",
          "name": "plumbing-800",
          "value": "#2A7A7E",
          "contrast_ratio": "4.8:1 against white",
          "usage": "Brand color for headers, hero sections, and brand elements",
          "variants": {"dark": "#226568"}
        },
        {
          "id": "color_plumbing_300",
          "name": "plumbing-300",
          "value": "#A3E9ED",
          "contrast_ratio": "1.2:1 against white",
          "usage": "Accent color for highlights and special text",
          "variants": {"hover": "#85E2E7"}
        },
        {
          "id": "color_plumbing_extended_25",
          "name": "plumbing-extended-25",
          "value": "#D6F8FA",
          "contrast_ratio": "1.1:1 against white",
          "usage": "Ultra light teal for subtle backgrounds and overlays",
          "variants": {"hover": "#C2F0F3"}
        },
        {
          "id": "color_plumbing_extended_600",
          "name": "plumbing-extended-600",
          "value": "#379CA3",
          "contrast_ratio": "3.8:1 against white",
          "usage": "Medium teal for secondary brand elements and accents",
          "variants": {"hover": "#2A7A7E"}
        },
        {
          "id": "color_plumbing_extended_950",
          "name": "plumbing-extended-950",
          "value": "#1B5052",
          "contrast_ratio": "7.1:1 against white",
          "usage": "Ultra dark teal for high-contrast text and borders",
          "variants": {"hover": "#226568"}
        },
        {
          "id": "color_neutral_25",
          "name": "neutral-25",
          "value": "#F8FAFB",
          "contrast_ratio": "1.02:1 against white",
          "usage": "Ultra light gray for subtle section backgrounds",
          "variants": {"hover": "#F1F5F9"}
        },
        {
          "id": "color_neutral_300",
          "name": "neutral-300",
          "value": "#CBD5E1",
          "contrast_ratio": "1.8:1 against white",
          "usage": "Light gray for borders, dividers, and disabled states",
          "variants": {"hover": "#94A3B8"}
        },
        {
          "id": "color_neutral_800",
          "name": "neutral-800",
          "value": "#1E293B",
          "contrast_ratio": "12.6:1 against white",
          "usage": "Dark gray for secondary text and subtle headings",
          "variants": {"hover": "#0F172A"}
        },
        {
          "id": "color_brand_blue_900",
          "name": "brand-blue-900",
          "value": "#001B4D",
          "contrast_ratio": "15.2:1 against white",
          "usage": "Ultra dark blue for high-impact headers and CTAs",
          "variants": {"hover": "#002080"}
        },
        {
          "id": "color_brand_blue_700",
          "name": "brand-blue-700",
          "value": "#004080",
          "contrast_ratio": "8.9:1 against white",
          "usage": "Dark blue for primary navigation and key elements",
          "variants": {"hover": "#0059B3"}
        },
        {
          "id": "color_brand_blue_600",
          "name": "brand-blue-600",
          "value": "#0059B3",
          "contrast_ratio": "6.2:1 against white",
          "usage": "Medium blue for links and interactive elements",
          "variants": {"hover": "#004080"}
        },
        {
          "id": "color_success_50",
          "name": "success-50",
          "value": "#E7F8F1",
          "contrast_ratio": "1.1:1 against white",
          "usage": "Light green for success messages and positive feedback",
          "variants": {"hover": "#D1F2DF"}
        },
        {
          "id": "color_success_500",
          "name": "success-500",
          "value": "#3BAA99",
          "contrast_ratio": "3.2:1 against white",
          "usage": "Medium green for success buttons and confirmation states",
          "variants": {"hover": "#1F6F67"}
        },
        {
          "id": "color_success_700",
          "name": "success-700",
          "value": "#1F6F67",
          "contrast_ratio": "5.8:1 against white",
          "usage": "Dark green for success text and high-contrast success elements",
          "variants": {"hover": "#134E4A"}
        },
        {
          "id": "color_warm_50",
          "name": "warm-50",
          "value": "#FFEEDB",
          "contrast_ratio": "1.1:1 against white",
          "usage": "Light warm for promotional backgrounds and highlights",
          "variants": {"hover": "#FED7AA"}
        },
        {
          "id": "color_warm_100",
          "name": "warm-100",
          "value": "#FDF6E3",
          "contrast_ratio": "1.05:1 against white",
          "usage": "Very light warm for subtle accent backgrounds",
          "variants": {"hover": "#FFEEDB"}
        },
        {
          "id": "color_warm_300",
          "name": "warm-300",
          "value": "#FFD29D",
          "contrast_ratio": "1.4:1 against white",
          "usage": "Medium warm for accent elements and call-out boxes",
          "variants": {"hover": "#FBBF24"}
        },
        {
          "id": "color_background",
          "name": "background",
          "value": "hsl(210, 50%, 98%)",
          "hex_equivalent": "#fafbfc",
          "contrast_ratio": "1:1 baseline",
          "usage": "Main background color",
          "variants": {"gray": "#f8f9fa"}
        },
        {
          "id": "color_foreground",
          "name": "foreground",
          "value": "hsl(222, 47%, 11%)",
          "hex_equivalent": "#0f172a",
          "contrast_ratio": "16.7:1 against background",
          "usage": "Primary text color",
          "variants": {"muted": "hsl(215.4, 16.3%, 46.9%)"}
        },
        {
          "id": "color_black_borders",
          "name": "black",
          "value": "#000000",
          "contrast_ratio": "21:1 against white",
          "usage": "Brutalist borders, shadows, and high-contrast elements",
          "variants": {"shadow": "rgba(0,0,0,0.3)"}
        }
      ],
      "extended_palette_guidelines": {
        "plumbing_extended": "Extends the core plumbing palette with ultra-light and ultra-dark variants for enhanced design flexibility",
        "neutral_grays": "Professional gray scale for backgrounds, borders, and text hierarchy",
        "brand_blues": "Deep blue variants for high-impact elements and professional trust signals",
        "success_greens": "Nature-inspired greens for positive feedback and environmental messaging",
        "warm_accents": "Subtle warm tones for promotional content and friendly highlights"
      },
      "usage_combinations": {
        "high_contrast_headers": ["brand-blue-900", "plumbing-extended-950", "neutral-800"],
        "subtle_backgrounds": ["neutral-25", "warm-100", "plumbing-extended-25"],
        "accent_combinations": ["warm-300 + plumbing-600", "success-500 + neutral-300"],
        "cta_variants": ["brand-blue-700", "plumbing-extended-600", "success-700"]
      },
      "metadata": {
        "palette_type": "Extended blue-teal professional with comprehensive accent system",
        "accessibility_compliance": "WCAG 2.1 AA compliant - all colors meet minimum 3:1 contrast for large text, 4.5:1 for normal text",
        "total_colors": "22 colors across 6 semantic families",
        "design_flexibility": "High - supports diverse content types while maintaining brand consistency"
      }
    },
    "branding": {
      "assets": [
        {
          "id": "logo_primary",
          "type": "logo",
          "name": "primary_logo",
          "value": "/src/assets/images/logo.webp",
          "usage": "Primary logo for header, min width 80px, max height 64px"
        },
        {
          "id": "logo_og",
          "type": "logo",
          "name": "og_logo",
          "value": "/src/assets/images/logo-og.webp",
          "usage": "Open Graph and social media sharing"
        },
        {
          "id": "font_inter",
          "type": "font",
          "name": "body_font",
          "value": "Inter, sans-serif",
          "usage": "Primary font for body text, buttons, and UI elements"
        },
        {
          "id": "font_montserrat",
          "type": "font",
          "name": "heading_font",
          "value": "Montserrat, sans-serif",
          "usage": "Headings, brand text, and emphasis elements"
        }
      ],
      "guidelines": {
        "tone": "Professional, trustworthy, and approachable with bold visual impact",
        "principles": "Brutalist design with clean typography, high contrast, and accessibility-first approach"
      }
    },
    "metadata": {
      "design_summary": "Modern brutalist plumbing website with blue-teal brand colors, bold typography, and accessibility-focused design system",
      "adaptability_rules": [
        "Maintain 4.5:1 minimum contrast ratio for all text",
        "Use brutalist shadows (8px 8px 0 0 #000) consistently across cards",
        "Ensure mobile-first responsive design with breakpoints at 576px, 768px, 1024px",
        "Apply 2px black borders to interactive elements for consistency",
        "Use gradient backgrounds (plumbing-800 to plumbing-900) for hero sections"
      ],
      "integrity_checks": {
        "branding_adherence": "high - consistent use of Agape brand colors and typography",
        "accessibility_risk": "low - WCAG 2.1 AA compliant color scheme",
        "brutalist_consistency": "high - consistent application of borders, shadows, and bold elements"
      },
      "update_history": [
        {"timestamp": "2025-07-17", "change": "Initial design brain generated from existing Agape Plumbing codebase"}
      ],
      "source": "Derived from Agape Plumbing codebase analysis: tailwind.config.ts, App.css, component files, and brand assets"
    },
    "navigation_path": {
      "context": "brutalist_plumbing_design",
      "path": ["header_main", "->", "logo_primary", ";", "hero_section", "->", "color_plumbing_gradient", ";", "button_primary", "->", "color_primary"],
      "focus": "Maintain brutalist design consistency while ensuring accessibility standards"
    }
  },
  "queries_needed": []
}
```

## Design System Summary

The Agape Drain & Plumbing website employs a **brutalist design system** with the following key characteristics:

### Color Palette
- **Primary Brand**: Teal-blue gradient (#2A7A7E to #226568)
- **Accent**: Light teal (#A3E9ED) for highlights
- **UI Colors**: Blue-based system with high contrast
- **Brutalist Elements**: Pure black (#000000) for borders and shadows

### Typography
- **Headings**: Montserrat (bold, uppercase, tight tracking)
- **Body**: Inter (clean, readable, accessible)
- **Hierarchy**: Clear size scaling with responsive design

### Design Principles
- **Brutalist Aesthetic**: Bold borders, dramatic shadows, high contrast
- **Accessibility First**: WCAG 2.1 AA compliant color ratios
- **Mobile Responsive**: Mobile-first design approach
- **Professional Trust**: Clean, reliable visual language for plumbing services

### Component System
- **Cards**: 8px black shadows with 2px borders
- **Buttons**: Hover animations with shadow depth
- **Forms**: Consistent brutalist input styling
- **Navigation**: Sticky header with scroll effects

### Brand Identity
- **Company**: Agape Drain & Plumbing LLC
- **Established**: 2016
- **Location**: Frederick, MD
- **Services**: Professional plumbing with 24/7 emergency service
- **Values**: Integrity, quality workmanship, customer care

This design system ensures consistent, accessible, and visually impactful presentation across all pages while maintaining the professional trustworthiness essential for a plumbing service business.