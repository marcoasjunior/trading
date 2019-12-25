<template>
  <div>
     <NavTrading />
    <StepperTrading />
   
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
    
    }

}
</script>

<style>

</style>