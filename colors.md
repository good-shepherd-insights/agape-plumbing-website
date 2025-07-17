# Agape Plumbing - Color Palette Reference

This document contains all colors used throughout the Agape Plumbing project, organized by category and source.

## CSS Custom Properties (App.css)

### Design System Colors
```css
--background: 210 50% 98%;           /* #fafbfc */
--foreground: 222 47% 11%;           /* #0f172a */
--card: 0 0% 100%;                   /* #ffffff */
--card-foreground: 222.2 84% 4.9%;  /* #0c0a09 */
--popover: 0 0% 100%;                /* #ffffff */
--popover-foreground: 222.2 84% 4.9%; /* #0c0a09 */
--primary: 210 100% 30%;             /* #003d99 */
--primary-foreground: 210 40% 98%;   /* #f8fafc */
--secondary: 212 100% 25%;           /* #002080 */
--secondary-foreground: 210 40% 98%; /* #f8fafc */
--muted: 210 40% 96.1%;              /* #f1f5f9 */
--muted-foreground: 215.4 16.3% 46.9%; /* #64748b */
--accent: 210 40% 96.1%;             /* #f1f5f9 */
--accent-foreground: 222.2 47.4% 11.2%; /* #0f172a */
--destructive: 0 84.2% 60.2%;        /* #ef4444 */
--destructive-foreground: 210 40% 98%; /* #f8fafc */
--border: 214.3 31.8% 91.4%;         /* #e2e8f0 */
--input: 214.3 31.8% 91.4%;          /* #e2e8f0 */
--ring: 210 100% 30%;                /* #003d99 */
--radius: 0.5rem;
```

## Tailwind Configuration Colors

### Shadcn/UI System Colors
```typescript
border: 'hsl(var(--border))',
input: 'hsl(var(--input))',
ring: 'hsl(var(--ring))',
background: 'hsl(var(--background))',
foreground: 'hsl(var(--foreground))',
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

### Custom Plumbing Brand Colors
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
}
```

## Component-Specific Colors

### Brutalist Design Elements
```css
/* Black borders and shadows */
border-black: #000000
box-shadow: 8px 8px 0 0 #000
box-shadow: 12px 12px 0 0 #000
box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.3)
box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.3)
box-shadow: 15px 15px 0px 0px rgba(0,0,0,0.2)
box-shadow: 15px 15px 0px 0px rgba(0,0,0,0.3)
```

### White Backgrounds
```css
bg-white: #ffffff
```

### Gray Colors
```css
text-gray-700: #374151
hover:bg-gray-100: #f3f4f6
```

### Red/Emergency Colors
```css
/* Emergency/Alert sections */
from-red-600: #dc2626
to-red-700: #b91c1c
```

### Logo/Brand Specific
```css
/* Logo hover effects */
filter: drop-shadow(0 0 2em #646cffaa)  /* Blue glow */
filter: drop-shadow(0 0 2em #61dafbaa)  /* React blue glow */
```

### Text Colors
```css
color: #888  /* Muted text */
```

## Usage Guidelines

### Primary Brand Colors
- **plumbing-800** (`#2A7A7E`): Primary brand color for buttons, headers, and key elements
- **plumbing-700** (`#46AAB1`): Hover states for primary elements
- **plumbing-900** (`#226568`): Text on light backgrounds, darkest brand color
- **plumbing-300** (`#A3E9ED`): Light accent color for highlights

### Brutalist Design System
- **Black** (`#000000`): All borders, shadows, and brutalist elements
- **White** (`#ffffff`): Card backgrounds, button backgrounds
- **Box shadows**: Consistent brutalist shadow patterns using black

### Semantic Colors
- **Destructive/Error**: `hsl(0 84.2% 60.2%)` - Red for errors and warnings
- **Emergency sections**: Red gradient (`#dc2626` to `#b91c1c`)
- **Muted text**: `#888` for secondary information

### Accessibility Notes
- All color combinations maintain WCAG contrast requirements
- plumbing-800 and plumbing-900 adjusted for better contrast
- Consistent use of HSL values for better color manipulation

## Color Export for Development

```typescript
// Re-export all colors for use in components
export const colors = {
  // CSS Custom Properties
  cssVars: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    // ... all other CSS variables
  },
  
  // Brand colors
  plumbing: {
    50: '#F0FBFD',
    100: '#E0F7F9',
    200: '#C2F0F3',
    300: '#A3E9ED',
    400: '#85E2E7',
    500: '#66DBE1',
    600: '#4fbec7',
    700: '#46AAB1',
    800: '#2A7A7E',
    900: '#226568',
  },
  
  // Utility colors
  black: '#000000',
  white: '#ffffff',
  gray: {
    100: '#f3f4f6',
    700: '#374151',
    muted: '#888'
  },
  
  // Emergency colors
  red: {
    600: '#dc2626',
    700: '#b91c1c'
  }
};
```

This comprehensive color reference ensures consistent usage across the entire Agape Plumbing project.