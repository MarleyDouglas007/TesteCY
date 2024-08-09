const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Define o padrão de arquivos de teste
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    // Define a URL base para os testes
    baseUrl: 'https://distance-converter-chi.vercel.app/',
  },
});
