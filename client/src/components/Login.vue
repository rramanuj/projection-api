<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
 
  <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field label="Username" v-model="email"></v-text-field>
   <!-- <input type ="email" name ="email" placeholder="email" v-model="email"/>-->
    <!--v model searches the input data and binds it to a variable below. -->
    <br>
      <v-text-field
          label="Password" v-model="password"
        ></v-text-field>
    <!-- <input type ="password" name ="password" placeholder="password" v-model="password"/>-->
     <br>
     <div class="error" v-html="error"/>
     <!--this says on @click, execute the method 'register' which i've defined below-->
     <v-btn @click="login" dark>Login</v-btn>
  </div>
 </div>
  </v-flex>
</v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  
  methods: {
    async login () { 
      try { 
      await AuthenticationService.login({
      username: this.email,
      password: this.password,
      //error: this.error
      })
      console.log('login button was clicked', this.email, this.password);
    } catch (error) {
      this.error = error .response.data;
    }
  }},
  watch: {
    email(value) {
      console.log('email has changed', value)
    }
  }
}

</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
.error {
  color:red; 
}


</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
