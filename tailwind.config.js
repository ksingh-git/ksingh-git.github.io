import typography from "@tailwindcss/typography";
export const darkMode = "class";
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          "code::before": { content: "" },
          "code::after": { content: "" },
        },
      },
    },
  },
};
export const plugins = [typography];
