<template>
  <div class="Home">
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-btn @click="goBack" text icon>
              <v-icon>mdi-arrow-left-circle</v-icon>
            </v-btn>
      <v-spacer />
       <v-toolbar-title>Registro </v-toolbar-title>
        <v-spacer />

    </v-app-bar>
    <FormRegister />
  </div>
</template>

<script>
// @ is an alias to /src
import FormRegister from '@/components/FormRegister.vue'

export default {
  name: 'Register',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  components: {
    FormRegister
  }
}
</script>
