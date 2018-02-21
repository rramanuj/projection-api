<template>
<v-layout column>
  
  <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class ="cyan" dark>
       <v-toolbar-side-icon @click="back()">back</v-toolbar-side-icon>
    <v-toolbar-title>Add Member</v-toolbar-title>
    </v-toolbar>
    <div>
  <!-- <span v-for="n in team" v-bind:key="n._id" items.push(n._id)</span> -->
</div>

  <v-flex xs6  offset-xs3>
    <panel button=false title="Search" class="ml-2">
      <v-text-field label="Search by username.." v-model="search"></v-text-field>
    </panel>
  </v-flex>
     <!-- <v-text-field name="input-7-1"
          label="Description"
          :rules="[() => description.length > 0 || 'This field is required']"
          multi-line v-model="description"></v-text-field>
   <v-select
      :items="project.data.data[0]._team.map(member => member.username)"
      v-model=owner
      label="Select A Team Member"
    ></v-select> -->

 
   <v-btn @click="save" dark>Add To Team</v-btn>



  </div>
  </div>
 </v-flex>
</v-layout>
</template>

<script>
import ProjectService from '@/services/ProjectsService'

export default {
  data() {
    return {
      error: null,
      description: '',
      title: '',
      owner: null,
      project: null,
      team:null,
      userId: null,
      deadline: null
            }
    },
    methods: {
      back(){
            this.$router.push({name:'project',params: 
            {projectId: this.$store.state.route.from.params.projectId
          //found this project id parameter within the vuex program, could probably re-send it for clealiness.
        }})},
      setOwner(id){
        this.owner = id;
      },
      async save () {
      //title, description, deadline, userId, owner
      try { 
      await (await ProjectService.postCard({
      projectId:this.$store.state.route.from.params.projectId,
      title: this.title,
      description: this.description,
      deadline: this.deadline,
      userId: this.$store.state.user._id,
      owner: this.owner,
      board: this.$store.state.route.params.board
      }))
    } catch (error) {
      this.error = error .response.data;
    }}},
  async mounted () {
    const projectId = this.$store.state.route.from.params.projectId;
    try {
      this.project = (await ProjectService.show({projectId:projectId}));
      console.log(this.project);

   }catch(err){
      console.log(err);
    }
  },
}

</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
.error {
  color:red; 
}


</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
