import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      colors: {
        magenta: '#E63888',
        dark: {
          high: '#323953',
          medium: '#646B7E',
          low: '#8D93A1',
        },
        light: {
          solid: '#FFFFFF',
          light: '#EBECF0',
        }
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        '5.5': '1.375rem',
        '11': '2.75rem',
        '12': '3.25rem'
      },
      letterSpacing: {
        tighter: '-0.075rem',
        tight: '-0.0625rem',
        wide: '-0.05rem',
        wider: '-0.0375rem',
      }
    },
  },
  plugins: [],
};

export default config;
