<template>
  <v-bottom-navigation
    color="deep-purple accent-4"
  >



    <v-btn>
      <span>Histórico</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Revisar</span>
      <v-icon>mdi-file-document-box-search-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Opções</span>
      <v-icon>mdi-settings-outline</v-icon>
    </v-btn>
        <v-btn>
      <span>Cancelar</span>
      <v-icon>mdi-cancel</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>