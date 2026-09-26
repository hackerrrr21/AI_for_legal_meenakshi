/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#f6fbf5",
        "surface": "#f6fbf5",
        "surface-bright": "#f6fbf5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f5f0",
        "surface-container": "#ebefea",
        "surface-container-high": "#e5e9e4",
        "surface-container-highest": "#dfe4df",
        "surface-variant": "#dfe4df",
        "surface-dim": "#d7dbd6",
        "surface-tint": "#476556",
        
        "primary": "#042217",
        "primary-container": "#1b382b",
        "primary-fixed": "#c9ead7",
        "primary-fixed-dim": "#adcebc",
        "on-primary": "#ffffff",
        "on-primary-container": "#82a291",
        "on-primary-fixed": "#022015",
        "on-primary-fixed-variant": "#304d3f",
        "inverse-primary": "#adcebc",
        
        "secondary": "#506358",
        "secondary-container": "#d2e8d9",
        "secondary-fixed": "#d2e8d9",
        "secondary-fixed-dim": "#b7ccbe",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#55695d",
        "on-secondary-fixed": "#0d1f16",
        "on-secondary-fixed-variant": "#384b40",
        
        "tertiary": "#2a1a01",
        "tertiary-container": "#422f11",
        "tertiary-fixed": "#fedeb2",
        "tertiary-fixed-dim": "#e0c298",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#b2966f",
        "on-tertiary-fixed": "#281800",
        "on-tertiary-fixed-variant": "#584323",
        
        "on-surface": "#181d1a",
        "on-surface-variant": "#424844",
        "on-background": "#181d1a",
        "inverse-surface": "#2c322e",
        "inverse-on-surface": "#edf2ed",
        
        "outline": "#727974",
        "outline-variant": "#c2c8c2",
        "hairline": "#E2DDD5",
        
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        "antique-brass": "#c5a880",
        "antique-brass-light": "#eadbc8"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.25rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "0.75rem",
        "3xl": "1rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "gutter-mobile": "1rem",
        "margin": "2.5rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Merriweather", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        "display-lg": ["Playfair Display", "serif"],
        "display-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["36px", { lineHeight: "44px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["22px", { lineHeight: "30px", letterSpacing: "-0.005em", fontWeight: "500" }],
        "headline-sm": ["18px", { lineHeight: "26px", letterSpacing: "0", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "18px", letterSpacing: "0.005em", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
}
