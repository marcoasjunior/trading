<template>
  <div>

    <v-stepper v-model="tradingStep" vertical>
      <template v-for="n in steps">
        <v-stepper-step :key="`${n.number}-step`" :complete="tradingStep > n.number" :step="n.number">
          Fase de {{ n.name }}
        </v-stepper-step>

        <v-stepper-content :key="`${n.number}-content`" :step="n.number">
          <v-card class="mb-12" color="grey lighten-1">
            <!-- View -->

            <router-view />

            <!-- /View -->
          </v-card>

          <v-btn-toggle v-if="$store.getters.companyType == 'buyer'">
          <v-btn color="deep-purple accent-4" dark class="mr-12" @click="nextStep(n.number)">
            Avançar
          </v-btn>
          <v-btn v-if="tradingStep === 1" color="green" dark>Prorrogar</v-btn>
          <v-btn v-else color="warning" @click="backStep(n.number)">Retornar</v-btn>
          </v-btn-toggle>
        </v-stepper-content>
      </template>

    </v-stepper>
  </div>
</template>

<script>
/* eslint-disable no-console */
  export default {
    data () {
      return {
        tradingStep: 1,
        steps: [
          {
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
            step: 'proposal',
            number: 4,
            name: 'Proposta'
          },
          {
            step: 'proposal',
            number: 5,
            name: 'Proposta'
          },
          {
            step: 'proposal',
            number: 6,
            name: 'Proposta'
          },
          {
            step: 'proposal',
            number: 7,
            name: 'Proposta'
          },
        ]

      }
    },

 
    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
          this.tradingStep = n + 1
         if (this.tradingStep === 2) this.$router.push(`/Rating/${this.$route.params.id}`)
         if (this.tradingStep === 3) this.$router.push(`/Bidding/${this.$route.params.id}`)
        
      },
      backStep (n) {
          this.tradingStep = n - 1
          if (this.tradingStep === 1) this.$router.push(`/Proposal/${this.$route.params.id}`)
          if (this.tradingStep === 2) this.$router.push(`/Rating/${this.$route.params.id}`)
          // this.$router.push('/Adjudication')
        
      },
    },

    created() {
      
           this.axios
                .get('http://localhost:3000/api/profile', this.config)
                .then((response) => {
                    console.log(response)
                    
                    // Put type of Company
                    this.$store.dispatch('changeCompanyType', response.data.type)

                })
                .catch(e => {
                    console.log(e)

                })
    }
  }
</script>