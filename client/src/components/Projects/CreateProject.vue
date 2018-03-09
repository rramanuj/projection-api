<template>
  <panel title="New Project">
  <v-text-field label="Title" :rules="[() => project.title.length > 0 || 'You must contain a title!']" v-model="project.title"></v-text-field> 
  <v-text-field label="Description" :rules="[() => project.text.length > 0 || 'You must contain a description.']" v-model="project.text"></v-text-field> 
  <div class ="error" v-if="error"> <!--only display if defined-->
    {{error}}
  </div>
  <v-btn @click="create">
    Create Project
  </v-btn>
  </panel>
</template>
<script>
import ProjectService from '@/Services/ProjectsService'
export default {
  data () {
    return {
      project: {
      "title":null,
	    "userId":this.$store.state.user._id,
      "text":null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods:{
   async create(){
     try {
      // Call API
     await ProjectService.post(this.project);
     } catch (err) {
       console.log(err)
     }
      

    }

  },
components: {
  
}
}
</script>

<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
