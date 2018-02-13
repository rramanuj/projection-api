<template>
  <div>
    <h1>Register</h1>

    <input type ="email" name ="email" placeholder="email" v-model="email"/>
    <!--v model searches the input data and binds it to a variable below. -->
    <br>
     <input type ="password" name ="password" placeholder="password" v-model="password"/>
     <br>
     <!--this says on @click, execute the method 'register' which i've defined below-->
     <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  
  methods: {
    
    async register () {
      const response = await AuthenticationService.register({
      username: this.email,
      password: this.password
      })
      console.log('register button was clicked', this.email, this.password);
    }
  },
  watch: {
    email(value) {
      console.log('email has changed', value)
    },
    mounted () {
      setTimeout(() => {
        this.email = 'hello world'
      }, 1000)
    }
  }
}

</script>
<style scoped>
</style>     <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
