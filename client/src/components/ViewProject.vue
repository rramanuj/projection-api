<template>
<v-layout column>
   <v-flex xs12>
     <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
       <v-btn v-if="$store.state.user._id = project[0]._creator.username" class="indigo" 
       small absolute middle right @click="navigateTo({name:'add-member',params: 
          {projectId: projectId}})">
      <v-icon>add</v-icon>
       </v-btn>   
      <v-toolbar-title>Team</v-toolbar-title>
    </v-toolbar>

<div v-for="members in icebox[0]._project._team" :key="members._id">
           {{members.username}}<v-btn color="red" dark v-if="$store.state.user._id = project[0]._creator.username">Remove</v-btn></div>   
</div>

   </v-flex>
   
<v-layout fluid>
  <v-flex xs2.2 pt-2>
    <board v-if="icebox.length > 0" title="Ice Box" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="icebox.length == 0" title="Ice Box" empty="true" button="true" v-bind:projId=projectId>
    </board>
  </v-flex>
    <v-flex xs2.2 pt-2>
    <board v-if="staged.length > 0" title="Staged" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="staged.length == 0" title="Staged" button="true" empty="true"  v-bind:projId=projectId>
    </board>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <board v-if="inProgress.length > 0" title="In Progress" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="inProgress.length == 0" title="In Progress" button="true" empty="true" v-bind:projId=projectId>
    </board>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <board v-if="testing.length > 0" title="Testing" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="testing.length == 0" title="Testing" button="true" empty="true"  v-bind:projId=projectId>
    </board>
     </v-flex>
    <v-flex xs2.2 pt-2>
    <board v-if="complete.length > 0" title="Complete" button="true" v-bind:projId=projectId>
    </board>
    <board v-if="complete.length == 0" title="Complete" button="true" empty="true" v-bind:projId=projectId>
    </board>
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
      staged: null,
      inProgress: null,
      testing: null,
      project: null,
      complete: null,
      projectId: this.$store.state.route.params.projectId,
    }
  },
  methods:{
        navigateTo(link, board){
        this.$router.push(link)
        }
        },
  //what we do when it mounts
  async mounted () {
   // const projectId = ;
    const projectId = this.$store.state.route.params.projectId;
    
    this.project = (await ProjectService.show({projectId:projectId})).data.data;
    this.staged = (await CardsService.getCardsByProject({projectId:projectId,board:'Staged'})).data.data;
    this.icebox = (await CardsService.getCardsByProject({projectId:projectId,board:'Ice Box'})).data.data;
    this.inProgress = (await CardsService.getCardsByProject({projectId:projectId,board:'In Progress'})).data.data;
    this.testing = (await CardsService.getCardsByProject({projectId:projectId,board:'Testing'})).data.data;
    this.complete = (await CardsService.getCardsByProject({projectId:projectId,board:'Complete'})).data.data;
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
