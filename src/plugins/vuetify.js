import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#41B883'
      },
      dark: {
        primary: '#34495E',
        anchor: '#41B883'
      }
    }
  }
});
