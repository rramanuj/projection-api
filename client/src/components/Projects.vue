<template>
<v-layout row>
 <v-flex xs4>
    <CreateProject/>
  </v-flex>

  <!--columns go up to 12 TODO: 45:12-->
  <v-flex xs8>
    <panel title="Projects" class="ml-2">
      <div
      v-for="project in projects" 
      :key="project._id">
        {{project.title}} - {{project.text}} - {{project.createdAt}}
      </div>
    </panel>
      </v-flex>
   
  </v-layout>
</template>
<script>
import ProjectService from '@/services/ProjectsService'
import Panel from '@/components/Panel'
import CreateProject from '@/components/CreateProject'

export default {
  components: {
    Panel, CreateProject //i want to be able to access the panel.
  },
  data (){
    return {
      projects: null
    }
  },
    async mounted () {
    //do a request to the backend for all the projects
    //always .data, thats how ti returns data.
    
    this.projects = (await ProjectService.getProjectsByUser({userId:"5a7c6539ddd3abeb189e8767"})).data.data,
    console.log('projects', this.projects);
    }
}

</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
