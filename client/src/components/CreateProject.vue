<template>
  <panel title="New Project">
  <v-text-field label="Project Title" v-model="title"></v-text-field> 
  <v-text-field label="Description" v-model="text"></v-text-field> 
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      "title":null,
	    "userId":null,
	    "text":null
    }
  },
components: {
  Panel
}
}
</script>

<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
