import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Asap', 'sans-serif'],   // ✅ Default font
        bayon: ['Bayon', 'sans-serif'], // ✅ Extra font for specific use
      },
      colors: {
        primary: {
          50: '#f4f6f7',
          100: '#e2e6ea',
          200: '#c9d1d7',
          300: '#a6b4c1',
          400: '#6d879d',
          500: '#375A7F', // Main brand color (deep glass blue)
          600: '#2f4b6a',
          700: '#263c55',
          800: '#1e2f42',
          900: '#182535',
        },
        secondary: {
          50: '#f6f6f6',
          100: '#eaeaea',
          200: '#d5d5d5',
          300: '#b0b0b0',
          400: '#8c8c8c',
          500: '#555555', // Secondary brand color (tinted glass gray)
          600: '#444444',
          700: '#333333',
          800: '#262626',
          900: '#1a1a1a',
        },
        neutral: {
          50: '#ffffff',
          100: '#fafafa', // Main background
          200: '#f5f5f5',
          300: '#eeeeee',
          400: '#e0e0e0',
          500: '#bdbdbd',
          600: '#9e9e9e',
          700: '#757575',
          800: '#424242',
          900: '#212121',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -20px, 0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translate3d(-50px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translate3d(50px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;