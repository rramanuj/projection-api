<template>
<v-layout fluid>
<v-flex xs-6>
      <UserSearchPanel class="ml-2"/>
      <UserPanel class="mt-2"/>
      </v-flex>
  </v-layout>
</template>

<script>

import ProjectService from '@/services/ProjectsService'
import UserService from '@/services/UserService'
import UserPanel from './UserPanel'
import UserSearchPanel from './UserSearchPanel'

export default {
  components: {
    UserPanel, UserSearchPanel //i want to be able to access the panel.
  },
  data (){
    return {
      projects: null,
      search: ''
    }
  },
  methods: {
        navigateTo(link){
            this.$router.push(link)
        },    
    },
    watch: {
      '$route.query.search' : {
      immediate: true,
       async handler (value) {
         console.log(value);
         if (value !== "") {
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
