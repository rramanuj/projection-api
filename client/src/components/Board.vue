<template>
<v-layout container>
  <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
      <!--parameters is the only way to go when we're passing project ID to navigate methods! Props are strictly for
      the components!-->
      <v-btn v-if="button=='true'" outline color="indigo" small absolute middle right @click="navigateTo({name:'add-card',params: 
          {projectId: projId}})">
        <slot name ="action"/>
    <v-icon>add</v-icon>
       </v-btn>
             <v-toolbar-title>{{title}}</v-toolbar-title>

    </v-toolbar>

 


  <div class="pl-4 pr-4 pt-2 pb-2">
      <draggable v-model="list" class="dragArea" :options="{group:'icebox'}">
   <div v-for="cards in icebox"
      :key="cards._id">
     <ul @click="navigateTo({name:'project',
          params:
          {projectId: cards._id}})">
           {{cards.title}} - {{cards._owner}}
          </ul>
          </div>
        </draggable>
   </div>
   </div>
  </div>
    
  </div>


</v-layout>
</template>

<script>
import CardsService from '@/services/CardsService'
import ProjectService from '@/services/ProjectsService'
import Panel from '@/components/Panel'
import draggable from 'vuedraggable';


export default {

   components: {
    draggable
  },

  data() {
    
    return {
      link: '',
      error: null,
      icebox: null,
      song: null,
      projectId: this.$store.state.route.params.projectId
    }
  },
  methods: {
        navigateTo(link, board){
            this.$router.push(link)
        }
        },
  props: [
    'title',
    'board',
    'projId',
    'button'
      ],
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
