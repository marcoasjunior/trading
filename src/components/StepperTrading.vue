<template>
  <div>

    <v-stepper
      v-model="tradingStep"
      vertical

    >
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="tradingStep > n"
            :step="n"
          >
            Step {{ n }}
          </v-stepper-step>

          <v-stepper-content
            :key="`${n}-content`"
            :step="n"
          >
            <v-card
              class="mb-12"
              color="grey lighten-1"

            >
            <router-view />
            
            
            </v-card>

            <v-btn
              color="primary"
              @click="nextStep(n)"
            >
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </template>
    
    </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tradingStep: 1,
        steps: 6,

      }
    },
    watch: {
      steps (val) {
        if (this.tradingStep > val) {
          this.tradingStep = val
        }
      },
      
    },
    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.tradingStep = 1
        } else {
          this.tradingStep = n + 1
          this.$router.push('/Proposal')
        }
      },
    },
  }
</script>