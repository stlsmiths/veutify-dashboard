<template>
  <v-app>
    <v-app-bar app color="primary" dense>
      <v-toolbar-title
        @click="goHome"
      >Todd's Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-btn text rounded dark @click="toggleTheme">Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          :to="link.url"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.label }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Todd's TRM</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        { label: 'Home', url: '/'},
        { label: 'Dashboard', url: '/dashboard'},
        { label: 'About', url: '/about'},
        { label: 'Signup', url:'/signup'},
        { label: 'Login', url: '/login'}
      ]
    }
  },
  methods: {
    toggleTheme() {
      // this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    goHome() {
      this.$router.push({name:'Home'})
    }
  },
};
</script>
