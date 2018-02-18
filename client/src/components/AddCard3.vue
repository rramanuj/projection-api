<template>
<v-layout column>
   <v-flex xs12>
    <panel title="Team">
      
    </panel>
   </v-flex>
<v-layout fluid>
  <v-flex xs2.2 pt-2>
    <panel title="Ice Box" button="true" v-bind:projId=projectId
      v-for="members in team" 
      :key="members._id">
    <div v-for="x in members._team" 
      :key="x.username">
         <v-btn> {{x.username}}</v-btn>
    </div>
      </div>
    </panel>
  </v-flex>
    <v-flex xs2.2 pt-2>
    <panel title="Staged">
    </panel>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <panel title="In Progress">
    </panel>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <panel title="Testing">
    </panel>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <panel title="Complete">
    </panel>
     </v-flex>
  </v-flex>
</v-layout>
</v-layout>
</template>
<script>

import CardsService from '@/services/CardsService'
import ProjectService from '@/services/ProjectsService'

import Panel from '@/components/Panel'
export default {
  components: {
    Panel //i want to be able to access the panel.
  },
  data () {
    return {
      team: null,
      song: null,
      projectId: null,
    }
  },
  //what we do when it mounts
  async mounted () {
    const projectId = this.$store.state.route.from.params.projectId;
    this.team = (await ProjectService.show({projectId:projectId})).data.data;
    console.log(projectId);
    //everytime we change routes on the dev tools, the route changed is being dispatched.
    //viex-router-sync is a way to map the dispatch events when the route changes
  //  const project = await ProjectService.show({projectId:projectId})
  }
}

</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
