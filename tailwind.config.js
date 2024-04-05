/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
        center: true,
        padding: "16px",
      },
    },
  },

  plugins: [],
};
