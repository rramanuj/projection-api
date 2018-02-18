
<template>

<v-layout column>
   <v-flex xs12>
    <!-- <panel title="Team" button="false" v-for="cards in icebox"
      :key="cards._id">
   <div v-for="members in cards._team" :key="members._id">
           {{members.username}}
   </div>
          </div>   
    </panel> -->
   </v-flex>
<v-layout fluid>
  <v-flex xs2.2 pt-2>
    <board v-if="icebox.length > 0" title="Ice Box" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="icebox.length == 0" title="Ice Box" button="true" v-bind:projId=projectId>
    </board>
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
import draggable from 'vuedraggable'
import CardsService from '@/services/CardsService'
import ProjectService from '@/services/ProjectsService'
import Board from '@/components/Board'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel, Board //i want to be able to access the panel.
  },
  data () {
    return {
      icebox: null,
      song: null,
      projectId: this.$store.state.route.params.projectId
    }
  },
  //what we do when it mounts
  async mounted () {
   // const projectId = ;
    const projectId = this.$store.state.route.params.projectId;

    this.icebox = (await CardsService.getCardsByProject({projectId:projectId,board:'Ice Box'})).data.data;
    console.log(this.icebox)
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
