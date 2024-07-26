/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',   // Azul escuro
        secondary: '#222', // Cinza escuro
        // Adicione outras cores personalizadas aqui
      },
      fontSize: {
        'custom-lg': '14px', // Adiciona um tamanho de fonte personalizado
      },
    },
  },
  plugins: [],
}
