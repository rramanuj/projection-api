<template>
<v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr4">Projection.</v-toolbar-title>
<v-toolbar-items>
    <v-btn flat dark>
        Browse
        </v-btn>
</v-toolbar-items>
</v-toolbar>

</template>
<script>

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
