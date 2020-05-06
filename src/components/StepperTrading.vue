<template>
  <div>
<v-stepper dense v-model="getTradingStep">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n.number}-step`"
            :complete="getTradingStep > n.number"
            :step="n.number"            
          >
            Fase de {{ n.name }}
          </v-stepper-step>

          <v-divider
            v-if="n.number !== steps"
            :key="n.number"
          ></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>

  </div>
</template>

<script>

import checkProfile from '../mixins/checkProfile'    

/* eslint-disable no-console */
export default {

  data() {
    return {
      steps: [{
          step: 'proposal',
          number: 1,
          name: 'Propostas',

        },
        {
          step: 'rating',
          number: 2,
          name: 'Classificação'
        },
        {
          step: 'bidding',
          number: 3,
          name: 'Disputa de Lances'
        },
        {
          step: 'deal',
          number: 4,
          name: 'Negociação'
        },
        {
          step: 'adjudication',
          number: 5,
          name: 'Adjudicação'
        },
        {
          step: 'homologation',
          number: 6,
          name: 'Homologação'
        },
      ],

      config: {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'multipart/form-data'
        }
      },
    }
  },

  computed: {

    getTradingStep() {
      return this.$store.getters.tradingStep
    }
  },

  methods: {

    onInput(val) {
      this.steps = parseInt(val)
    },

    async getStep() {
      await this.axios
        .get(`http://localhost:3000/api/getTradingStep/${this.$route.params.id}`, this.config)
        .then((response) => {

          if (response.data == 'Proposal') this.$store.dispatch('changeStepperStep', 1)
          if (response.data === 'Rating') this.$store.dispatch('changeStepperStep', 2)
          if (response.data == 'Bidding') this.$store.dispatch('changeStepperStep', 3)
          if (response.data == 'Deal') this.$store.dispatch('changeStepperStep', 4)

        })
        .catch(e => {
          console.log(e)

        })
    }

  },

  mixins: [checkProfile],

  watch: {

    getTradingStep() {

      if (this.getTradingStep === 1) this.$router.push(`/Proposal/${this.$route.params.id}`)
      if (this.getTradingStep === 2) this.$router.push(`/Rating/${this.$route.params.id}`)
      if (this.getTradingStep === 3) this.$router.push(`/Bidding/${this.$route.params.id}`)
      if (this.getTradingStep === 4) this.$router.push(`/Deal/${this.$route.params.id}`)
      if (this.getTradingStep === 5) this.$router.push(`/Adjudication/${this.$route.params.id}`)
      if (this.getTradingStep === 6) this.$router.push(`/Homologation/${this.$route.params.id}`)
    }
  },

  created() {

    this.getStep()
    this.checkProfile()

  }
}
</script>