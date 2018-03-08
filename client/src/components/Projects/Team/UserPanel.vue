<template>
    <panel title="Search Results" @click="setProjectId" class="ml-2">
      <div
      v-for="user in users" 
      :key="user._id">
         <v-btn @click="add(user._id)">
           {{user.username}}
          </v-btn>
      </div>
    </panel>

</template>
<script>

import ProjectService from '@/services/ProjectsService'
import UserService from '@/services/UserService'

export default {
  components: {
  },
  data (){
    return {
      projects: null,
      users: null,
      search: '',
      projectId: null,

    }
  }, 
  created: function () //on page load.. only time I can grab the project id lol
     {
      this.projectId = this.$store.state.route.params.projectId;
      console.log(this.projectId)
    },
  methods: {
        navigateTo(link){
            this.$router.push(link)
        },

        setProjectId(){
          if (this.projectId == null) {
            this.projectId = this.$store.state.route.params.projectId;
            console.log(this.projectId)
          }
        },
        async add(userId){
            (await ProjectService.addMember({userId:userId, projectId:this.projectId})).data.data
            this.navigateTo({name:'project',params: 
          {projectId: this.projectId}})
        }
  
    },
    watch: {
      '$route.query.search' : 
      {
      immediate: true,
       async handler (value) {
         console.log(value);
         if (value != "") 
         {
            this.users = (await UserService.search({query:value})).data.data
          }
        }
      }
    },
    async mounted () {
    //do a request to the backend for all the projects
    //always .data, thats how ti returns data.
   // this.projects = (await ProjectService.getProjectsByUser({userId:this.$store.state.user._id})).data.data
    }
}

</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
