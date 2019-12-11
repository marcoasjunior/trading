<template>
  <div class="Home">
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-toolbar-title v-show="show"> <v-icon>mdi-anchor</v-icon> </v-toolbar-title>
      <v-spacer />
       <v-toolbar-title>TrayD </v-toolbar-title>
        <v-spacer />

    </v-app-bar>

 
    <LoginForm />
    <CardRegisterAdvise />
  
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import CardRegisterAdvise from '@/components/CardRegisterAdvise.vue'



export default {
  name: 'Login',
  data() {
    return {
      show: false,
    }
  },
  components: {
    LoginForm,
    CardRegisterAdvise
   
  }
}
</script>
<style scoped>


</style>
