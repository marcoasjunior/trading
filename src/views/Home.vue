<template>
  <div class="Home">

      <CarouselHome />
      <TimeLine />

  </div>
</template>

<script>
// @ is an alias to /src

import CarouselHome from '../components/CarouselHome'    
import TimeLine from '../components/TimeLine'    
// import Dashboard from './Dashboard'    

export default {
  name: 'Home',
  components: {

      CarouselHome,
      TimeLine
    //   Dashboard

  }
}
</script>
