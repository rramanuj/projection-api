<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel>
      <h3>YOYOYO</h3>
    </panel>
  </v-flex>
</v-layout>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel //i want to be able to access the panel.
  }
}
</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
