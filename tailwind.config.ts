import { content as flowbiteContent, plugin as flowbitePlugin } from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}", flowbiteContent()],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        // cyan is used in all components as the default "primary" color
        // here we are actually overriding it to some purple color
        // so practically, the cyan means primary
        cyan: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
      },
    },
  },
  plugins: [flowbitePlugin()],
} satisfies Config;
