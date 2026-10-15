
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
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
				},
				plumbing: {
          50: '#F1FAFF',
          100: '#E3F5FF',
          200: '#C5EBFF',
          300: '#93DBFF',
          400: '#54C4FA',
          500: '#14A8EE',
          600: '#008DDB',
          700: '#006FB5',
          800: '#07548B',
          900: '#08375E',
        },
        // Extended Plumbing Palette
				'plumbing-extended': {
          25: '#F6FCFF',
          600: '#007FC7',
          950: '#062847',
        },
				// Neutral Grays
				neutral: {
					25: '#F8FAFB',  // Ultra light gray
					300: '#CBD5E1', // Light gray
					800: '#1E293B', // Dark gray
				},
				// Brand Blues
				'brand-blue': {
					900: '#001B4D', // Ultra dark blue
					700: '#004080', // Dark blue
					600: '#0059B3', // Medium blue
				},
				// Success/Nature Greens
				success: {
					50: '#E7F8F1',  // Light green
					500: '#3BAA99', // Medium green
					700: '#1F6F67', // Dark green
				},
				// Warm Accent Colors
				warm: {
					50: '#FFEEDB',  // Light warm
					100: '#FDF6E3', // Very light warm
					300: '#FFD29D', // Medium warm
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.1s ease-out',
				'fade-out': 'fade-out 0.1s ease-out'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
