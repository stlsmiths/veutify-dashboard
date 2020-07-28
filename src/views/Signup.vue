<template>
  <v-container>
    <v-row>
      <v-col>

        <h1>Signup</h1>
        
        <v-form
            ref="signUpForm"
            v-model="formValidity"
        >
          <v-text-field
              label="Email"
              type="email"
              placeholder="Enter your email address"
              v-model="email"
              :rules="emailRules"
              required
          ></v-text-field>
          <v-autocomplete
              label="Select your preferred Browser"
              :items="browsers"
          ></v-autocomplete>

          <v-file-input label="Attach your profile photo"></v-file-input>

          <v-text-field label="Birthdate" v-model="bdate" readonly></v-text-field>
          <v-date-picker v-model="bdate"></v-date-picker>

          <v-checkbox
              label="Agree to our highly restrictive Terms & Conditions"
              v-model="agreeToTerms"
              :rules="agreeToTermsRules"
              required
          ></v-checkbox>
          
          <v-btn type="submit"
                 color="primary"
                 :disabled="!formValidity"
          >Submit Form</v-btn>

          <v-btn class="ml-2" color="success"
            @click="validateForm"
          >Validate Form</v-btn>

          <span class="ml-12" >
            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
            <v-btn class="ml-2" color="error" @click="resetForm">Reset Form</v-btn>
          </span>

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
      ],

      email: '',
      emailRules: [
          value => !!value || 'Email is required, duh!',
          value => value.indexOf('@') !==0 || 'Email should include a username',
          value => value.includes('@') !==0 || 'Email should be proper format',
          value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email requires a domain',
          value => value.indexOf('.') <= value.length - 3 || 'Email requires a valid domain extension'
      ],

      agreeToTerms: false,
      agreeToTermsRules: [
        value => !!value || 'You must agree to our very onerous and unjustifiable T&C\'s to signup!'
      ],
      formValidity: false
    }
  },
  methods: {
    resetValidation() {
      console.log(this.$refs.signUpForm)
      this.$refs.signUpForm.resetValidation()
    },
    resetForm() {
      this.$refs.signUpForm.reset()
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    }
  },
}
</script>

<style scoped>

</style>
