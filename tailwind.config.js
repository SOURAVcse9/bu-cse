/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2563EB",   // Clean professional blue
        "brand-secondary": "#7C3AED", // Purple accent for highlights
        "brand-accent": "#F59E0B",    // Golden amber for attention
        "brand-bg-light": "#F9FAFB",  // Light background
        "brand-bg-dark": "#0F172A",   // Dark background
        "brand-text-light": "#1E293B",// Dark gray text for readability
        "brand-text-dark": "#E2E8F0", // Light gray text for dark mode
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        smartlight: {
          "primary": "#2563EB",   // Vibrant professional blue
          "secondary": "#7C3AED", // Modern purple
          "accent": "#F59E0B",    // Golden amber
          "neutral": "#F3F4F6",   // Light neutral gray
          "base-100": "#FFFFFF",  // True white
          "info": "#0EA5E9",      // Bright cyan
          "success": "#16A34A",   // Bold green
          "warning": "#D97706",   // Strong amber-orange
          "error": "#DC2626",     // Deep red
        },
      },
      {
        smartdark: {
          "primary": "#3B82F6",   // Lighter blue
          "secondary": "#8B5CF6", // Softer purple
          "accent": "#FBBF24",    // Warm amber
          "neutral": "#1E293B",   // Neutral gray-dark
          "base-100": "#0F172A",  // Dark background
          "info": "#38BDF8",      // Light cyan
          "success": "#22C55E",   // Bright green
          "warning": "#F59E0B",   // Golden orange
          "error": "#EF4444",     // Strong red
        },
      },
    ],
  },
}
