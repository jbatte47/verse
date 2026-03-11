import latticePreset from '@jbatte47/lattice/tailwind-preset';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    // Include lattice component source for Tailwind class scanning
    './node_modules/@jbatte47/lattice/dist/**/*.{js,cjs}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  presets: [latticePreset],
  theme: {
    extend: {
      // Verse-specific extensions go here
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
