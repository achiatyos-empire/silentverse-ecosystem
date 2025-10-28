import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Read from CSS variables defined in globals.css
        "sv-bg": "var(--sv-bg)",
        "sv-ink": "var(--sv-ink)",
        "sv-muted": "var(--sv-muted)",
        "sv-accent": "var(--sv-accent)",         // purple from logo
        "sv-accent-strong": "var(--sv-accent-strong)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config
