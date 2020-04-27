<template>
  <v-bottom-navigation dense
    color="deep-purple accent-4"
  >
    <v-btn @click="backStep">
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

        <v-btn @click="nextStep">
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
      nextStep() {

        this.$store.dispatch('changeTradingStep', this.getStep + 1)

      },
      backStep() {

        this.$store.dispatch('changeTradingStep', this.getStep - 1)

      },

    }
  }
</script>