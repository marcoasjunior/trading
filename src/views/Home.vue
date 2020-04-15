<template>
  <div class="Home">

      <CarouselHome />
      <TimeLine />

  </div>
</template>

<script>

import CarouselHome from '../components/CarouselHome'    
import TimeLine from '../components/TimeLine'    
import checkProfile from '../mixins/checkProfile'    

export default {
  /* eslint-disable no-console */

  name: 'Home',
  mixins: [checkProfile],
  components: {

    CarouselHome,
    TimeLine

  },

  methods: {

    changeCompanyType(response) {
      this.$store.dispatch('changeCompanyType', response.data.type)
    }
  
  },
  created() {

    this.checkProfile()
 

  }
}
</script>
