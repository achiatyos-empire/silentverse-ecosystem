import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    // App Router folders
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Components & utilities
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // If you ever use pages/ or legacy routes
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",

    // Optional: if you place UI inside /src/lib or /src/context
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#111827", // gray-900
          light: "#374151",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#6B7280", // gray-500
          light: "#9CA3AF",
          dark: "#4B5563",
        },
        accent: {
          DEFAULT: "#2563EB", // blue-600
          light: "#3B82F6",
          dark: "#1E40AF",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
}

export default config
