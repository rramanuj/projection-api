<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
 
  <div class="pl-4 pr-4 pt-2 pb-2">
   <slot>
     No slot content defined.
   </slot>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello world'
    }
  }
}
</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
