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
 
    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
          this.tradingStep = n + 1
       
      },
      backStep (n) {
          this.tradingStep = n - 1
 
      },
      changeStep(tradingStep) {
        console.log(tradingStep) // REFATORAR



      }

    },

    watch: {
      tradingStep () {
        if (this.tradingStep === 1) this.$router.push(`/Proposal/${this.$route.params.id}`)
        if (this.tradingStep === 2) this.$router.push(`/Rating/${this.$route.params.id}`)
        if (this.tradingStep === 3) this.$router.push(`/Bidding/${this.$route.params.id}`)
        if (this.tradingStep === 4) this.$router.push(`/Deal/${this.$route.params.id}`)
        if (this.tradingStep === 5) this.$router.push(`/Adjudication/${this.$route.params.id}`)
        if (this.tradingStep === 6) this.$router.push(`/Homologation/${this.$route.params.id}`)
      }
    },

    mounted() {
      
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

             this.axios
                      .get(`http://localhost:3000/api/getTradingStep/${this.$route.params.id}`, this.config)
                      .then((response) => {
                          console.log(response)
                          if (response.data.step == 'proposal') this.tradingStep = 1 
                          if (response.data.step == 'rating') this.tradingStep = 2 
                          if (response.data.step == 'bidding') this.tradingStep = 3 
                          if (response.data.step == 'deal') this.tradingStep = 4 

                      })
                      .catch(e => {
                          console.log(e)

                })

            
    }
  }
</script>