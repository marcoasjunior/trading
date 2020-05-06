<template>
  <v-bottom-navigation dense
    color="deep-purple accent-4"
  >
    <v-btn v-if="getStep !== 1" @click="backStep">
      <span>Retornar Fase</span>
      <v-icon>mdi-rotate-left</v-icon>
    </v-btn>

    <v-btn>
      <span>Opções</span>
      <v-icon>mdi-settings-outline</v-icon>
    </v-btn>

        <v-btn>
      <span>Cancelar</span>
      <v-icon>mdi-cancel</v-icon>
    </v-btn>

        <v-btn v-if="getStep !== 6" @click="nextStep">
      <span>Avançar fase</span>
      <v-icon>mdi-play</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {

      }
    },

    computed: {
      getStep() {
        return this.$store.getters.tradingStep
      }
    },

    methods: {
      async nextStep() {

        this.$store.dispatch('changeTradingStep', {
          step: this.getStep + 1,
          id: this.$route.params.id
        })

      },

      async backStep() {

        this.$store.dispatch('changeTradingStep', {
          step: this.getStep - 1,
          id: this.$route.params.id
        })

      },

    }
  }
</script>