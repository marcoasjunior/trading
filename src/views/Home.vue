<template>
  <div class="Home">

      <CarouselHome />
      <TimeLine />


  </div>
</template>

<script>

import CarouselHome from '../components/CarouselHome'    
import TimeLine from '../components/TimeLine'    
    

export default {
  /* eslint-disable no-console */
  name: 'Home',
    components: {

      CarouselHome,
      TimeLine
  

    }
   

    


  }
</script>
