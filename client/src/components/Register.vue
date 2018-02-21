<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
 
  <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field label="Username" v-model="username"></v-text-field>
   <!-- <input type ="username" name ="username" placeholder="username" v-model="username"/>-->
    <!--v model searches the input data and binds it to a variable below. -->
    <br>
      <v-text-field
          label="Password" type="password" v-model="password"
        ></v-text-field>
    <!-- <input type ="password" name ="password" placeholder="password" v-model="password"/>-->
     <br>
     <div class="error" v-html="error"/>
     <!--this says on @click, execute the method 'register' which i've defined below-->
     <v-btn @click="register" dark>Register</v-btn>
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
      username: '',
      password: '',
      error: null
    }
  },
  
  methods: {
    
    async register () {
      
      try { 
      await AuthenticationService.register({
      username: this.username,
      password: this.password,
      //error: this.error
      })
      console.log('register button was clicked', this.username, this.password);
    } catch (error) {
      this.error = error .response.data;
    }
  }},
  watch: {
    username(value) {
      console.log('username has changed', value)
    },
    mounted () {
      setTimeout(() => {
        this.username = 'hello world'
      }, 1000)
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
  <!-- calls the end point, pass it username and password, wait for a response, and opnce we get
the response we print out the data.-->
