/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav:"#18222f",
        page:"#2b3441",
        card:"#47566a",
        "card-hover":"#4f5e74",
        "default-text":"#f1f3f5",
        "blue-accent":"#0084d4",
        "blue-accent-hover":"#099fff",
        'blue': '#1E40AF', // Custom blue color
      },
    },
  },
  plugins: [],
};
