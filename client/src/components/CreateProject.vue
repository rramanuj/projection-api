<template>
  <panel title="New Project">
  <v-text-field label="Project Title" required:rules="[rules.required]" v-model="project.title"></v-text-field> 
  <v-text-field label="Description" required:rules="[rules.required]" v-model="project.text"></v-text-field> 
  <div class ="error" v-if="error"> <!--only display if defined-->
    {{error}}
  </div>
  <v-btn @click="create">
    Create Project
  </v-btn>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
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
    // project.userId = this.$store.state.user._id
   //  const areAllFieldsFilledIn = Object
     //.key(this.project)
     //.ever(key => !!this.project[key])
     //if (!areAllFieldsFilledIn){
      // this.error = 'Please fill in all the required fields'
       //return
     //}
     try {
      // Call API
     await ProjectService.post(this.project);
     } catch (err) {
       console.log(err)
     }
      

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
