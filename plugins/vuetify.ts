// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
// Import roboto fonts
import('roboto-fontface/css/roboto/roboto-fontface.css');

// Translations provided by Vuetify
import { fr } from 'vuetify/locale';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // global configuration
    defaults,
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark
      }
    },
    locale: {
      locale: 'fr',
      fallback: 'en',
      messages: { fr }
    }
  });
  app.vueApp.use(vuetify);
});
