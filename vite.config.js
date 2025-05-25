// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   darkMode: "class",
//   plugins: [tailwindcss()],
// });

import tailwindcss from "@tailwindcss/vite";
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {},
  },
  plugins: [tailwindcss()],
  base: "/portfolio/"
};
