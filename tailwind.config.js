/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F0B1C",
        mid: "#18122B",
        glow: "#7B61FF",
        accent: "#C084FC",
        dim: "#9CA3AF"
      },
      boxShadow: {
        glow: "0 0 40px 2px rgba(123, 97, 255, 0.35)",
      },
      backgroundImage: {
        "radial-purple":
          "radial-gradient(1200px 600px at 70% -10%, rgba(123,97,255,0.25), transparent 60%)",
        "radial-accent":
          "radial-gradient(900px 600px at -10% 120%, rgba(192,132,252,0.2), transparent 60%)"
      }
    }
  },
  plugins: []
};
