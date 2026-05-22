/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0b5233',
          light: '#157244',
          medium: '#1d9456',
          pale: '#e3f2ea',
          dark: '#062d1c',
        },
        gold: {
          DEFAULT: '#C8922A',
          light: '#d9a53e',
          pale: '#fdf4e0',
        },
        nk: {
          night: '#2A1C0A',
          green: '#2E6B4A',
          cream: '#FDF8F0',
          gold: '#C8922A',
          soft: '#F5DFA0',
          brown: '#4A3520',
        },
        surface: {
          1: '#f4f4f0',
          2: '#e8e8e2',
          3: '#d0d0c8',
          4: '#888880',
          5: '#4a4a42',
          6: '#222220',
        },
        bg: '#f9f9f6',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '16px',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(11,82,51,.07)',
        medium: '0 8px 32px rgba(11,82,51,.12)',
        heavy: '0 24px 64px rgba(11,82,51,.18)',
        nk: '0 12px 40px rgba(74,53,32,.18)',
        'nk-heavy': '0 24px 64px rgba(74,53,32,.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-11px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
