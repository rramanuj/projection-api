<template>
<v-layout row>
 <v-flex xs4>
    <CreateProject/>
  </v-flex>
  <!--columns go up to 12 TODO: 45:12-->
  <v-flex xs8>
    <panel button=false title="Search" class="ml-2">
      <v-text-field label="Search by project.." v-model="search"></v-text-field>
    </panel>

    <panel title="Projects" class="ml-2">
      <div
      v-for="project in projects" 
      :key="project._id">
         <v-btn @click="navigateTo({name:'project',
          params: 
          {projectId: project._id}})">
           {{project.title}}
          </v-btn>
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
      projects: null,
      search: ''

    }
  }, 
  // watch: {
  //   search(value){
  //     const route = {
  //       name: 'project'
  //     }
  //     if (this.search !== ''){
  //       route.query = {
  //         search: this.search
  //       }
  //     }
  //     this.$router.push(route)
  //   },
  //   '$router.query.search': {
  //     immediate: true,
  //     handler(value){
  //       this.search = value;
  //     }
  //   }
  
  methods: {
        navigateTo(link){
            this.$router.push(link)
        }
    },
    async mounted () {
    //do a request to the backend for all the projects
    //always .data, thats how ti returns data.
    this.projects = (await ProjectService.getProjectsByUser({userId:this.$store.state.user._id})).data.data,
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
