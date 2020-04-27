<template>
  <div>
    <StepperTrading />
    <router-view />
     <NavTrading v-if="getCompanyType === 'buyer'" />
   
  </div>
</template>

<script>
 import StepperTrading from '../components/StepperTrading'
 import NavTrading from '../components/NavTrading'

 export default {

   name: 'Trading',
   components: {
     StepperTrading,
     NavTrading

   },

   computed: {
     getCompanyType() {
       return this.$store.getters.companyType
     }
   },

 }
</script>

<style>

</style>