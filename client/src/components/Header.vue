<template>
<v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr4"><span class="home" @click="navigateTo({name:'home'})">projection.</span></v-toolbar-title>
<v-toolbar-items>
    <!--TODO:
    <v-btn flat dark>
        My Projects
        </v-btn>-->
</v-toolbar-items>
<v-spacer></v-spacer>

</v-toolbar-items>
 <!--<router-link to="register">-->
 <v-btn flat dark @click="navigateTo({name:'register'})">
       Sign Up
        </v-btn>
<v-btn flat dark @click="navigateTo({name:'login'})">
       Login
        </v-btn>
<!--</router-link>-->
</v-toolbar>
</v-toolbar>

</template>
<script>
export default {
    methods: {
        navigateTo(link){
            this.$router.push(link)
        }
    }
}
</script>
<!--scoped means only works in this vue template, not global, @click when the button
fires a click event, it does the method associated.-->
<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color:aquamarine;
}
.error {
  color:red; 
}


</style>   
  <!-- calls the end point, pass it email and password, wait for a response, and opnce we get
the response we print out the data.-->
