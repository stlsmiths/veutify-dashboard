<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Todd's Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>Login</v-btn>
    </v-app-bar>
<!--
    Login module
-->
    <v-content>
      <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
              label="Username"
              prepend-icon="mdi-account-circle"/>
          <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
    </v-content>
    <v-footer
        absolute
        class="font-weight-medium"
    >
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showPassword: false
    }
  },
};
</script>
