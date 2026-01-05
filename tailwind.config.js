// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing
        stone: colors.stone,
        'aged-paper': '#f3e9d2',
        'magic-red': '#8b0000',
        'magic-gold': '#d4af37',
        'magic-gray': '#4a4a4a',
        'spell-scroll': 'rgba(243, 233, 210, 0.8)',
        // Arcane colors
        'arcane-core': 'hsl(260, 60%, 5%)',
        'arcane-abyss': 'hsla(255, 50%, 10%, 0.9)',
        'arcane-rift': 'hsl(278, 25.80%, 12.20%)',
        'arcane-teal': 'hsl(180, 100%, 50%)',
        'arcane-violet': 'hsl(270, 100%, 60%)',
        'arcane-gold': 'hsl(50, 100%, 50%)',
        'arcane-mist': 'hsla(250, 40%, 90%, 0.8)',
        'arcane-glow': 'hsl(60, 100%, 70%)',
        'arcane-filigree': 'hsl(300, 10.00%, 3.90%)',
      },
      backgroundImage: {
        'parchment-texture': "url('/textures/parchment.jpg')",
        'spell-scroll': "radial-gradient(circle, rgba(243,233,210,1) 0%, rgba(243,233,210,0.8) 100%)",
        'arcane-radiance': `
          radial-gradient(at 40% 20%, hsla(280,100%,50%,0.2) 0px,
          radial-gradient(at 80% 0%, hsla(180,100%,50%,0.2) 50%,
          radial-gradient(at 0% 50%, hsla(270,100%,60%,0.3) 100%
        `,
        'mystic-flow': `
          linear-gradient(
            135deg,
            hsl(280, 100%, 50%) 0%,
            hsl(270, 100%, 40%) 30%,
            hsl(260, 100%, 30%) 100%
          )`,
      },
      animation: {
        owlFly: 'fly 8s linear infinite',
        magicalGlow: 'glowPulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        tiltMagic: 'tilt 3s ease-in-out infinite',
        scrollUnfold: 'unfold 0.5s ease-out forwards',
        cosmicDrift: 'cosmic 30s linear infinite',
        'hue-rotate': 'hue 15s linear infinite',
        scrollTrace: 'trace 5s linear infinite',
        crypticShift: 'shift 8s ease-in-out infinite',
        owlHover: 'owlFlap 0.4s steps(4) infinite',
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        fly: {
          '0%': { transform: 'translateX(-100%) rotate(-15deg)' },
          '100%': { transform: 'translateX(200%) rotate(15deg)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px #d4af37)' },
          '50%': { filter: 'drop-shadow(0 0 15px #d4af37)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        unfold: {
          '0%': {
            opacity: '0',
            transform: 'scaleY(0)',
            maxHeight: '0',
          },
          '100%': {
            opacity: '1',
            transform: 'scaleY(1)',
            maxHeight: '500px',
          },
        },
        cosmic: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        trace: {
          '0%': { height: '0%', opacity: '1' },
          '100%': { height: '100%', opacity: '0' },
        },
        shift: {
          '0%, 100%': {
            filter: 'hue-rotate(0deg) contrast(1)',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) contrast(1.2)',
            transform: 'scale(1.02)',
          },
        },
        owlFlap: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
