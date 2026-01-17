/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class', // Added for dark mode support
  theme: {
    extend: {
      colors: {
        licorice: '#281811ff',
        caf_noir: '#4f3120ff',
        butterscotch: '#d89245',
        butterscotch_light: '#dd9d4cff',
        papaya_whip: '#fff3dcff',
        alabaster: '#f2efe3ff',
        eerie_black: '#242424ff',
        jet: '#333333ff',
        amber_alpha: "#fef3c717",
        red: "#ff1b1b",

        // ── added light green shades ──
        "light-mint": "#f0fdf4",     // very light green
        "soft-mint":  "#ecfccb",
        "sage-light": "#f1f5f9",
      },
      boxShadow: {
        shadowDark: '0 0 35px 0 #281811ff',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Added for cards
      },
      fontFamily: {
        primary: '"Cormorant Garamond", serif',
        secondary: '"Montserrat", sans-serif',
      },
      transitionTimingFunction: {
        inExpo: 'cubic-bezier(0.22, 0.37, 1, 1)',
      },
      keyframes: {
        fadeInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bouncing: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        // Added new keyframe for subtle pulse animation
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 500ms ease-in-out 0s 1 running',
        bouncing: 'bouncing 12s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Added
      },
      screens: {
        xs: "480px",
        sm: "635px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
      },
      // Added custom gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))',
      },
    },
  },
  plugins: [],
}