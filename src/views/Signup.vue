<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form>
          <v-text-field
              label="Email"
              type="email"
              placeholder="Enter your email address"
          ></v-text-field>
          <v-autocomplete
              label="Select your preferred Browser"
              :items="browsers"
          ></v-autocomplete>

          <v-file-input label="Attach your profile photo"></v-file-input>

          <v-text-field label="Birthdate" v-model="bdate" readonly></v-text-field>
          <v-date-picker v-model="bdate"></v-date-picker>

          <v-checkbox label="Agree to our highly restrictive Terms & Conditions"></v-checkbox>
          
          <v-btn type="submit" color="primary">Submit Form</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bdate: '',
      browsers: [
          'Brave', 'Chrome', 'Firefox', 'Safari', 'Edge'
      ]
    }
  },
}
</script>

<style scoped>

</style>
