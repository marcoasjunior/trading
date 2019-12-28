<template>
  <v-bottom-navigation
    color="deep-purple accent-4"
  >

    <v-btn @click="goUser">
      <span>Usuários</span>
      <v-icon>mdi-account-badge</v-icon>
    </v-btn>

    <v-btn @click="goItems">
      <span>Itens</span>
      <v-icon>mdi-package-variant-closed</v-icon>
    </v-btn>
  </v-bottom-navigation>



</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
        goUser() {
            this.$store.dispatch('changeAdministrationPage', 'Users' )
      
        },
        goItems() {
            this.$store.dispatch('changeAdministrationPage', 'Items' )
      
        }
    },
  }
</script>