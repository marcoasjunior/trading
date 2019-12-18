<template>
  <div class="Home">

      <CarouselHome />
      <TimeLine />

<v-btn @click="teste"> 333333333333333333333333</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

import CarouselHome from '../components/CarouselHome'    
import TimeLine from '../components/TimeLine'    
// import Dashboard from './Dashboard'    

export default {
  /* eslint-disable no-console */
  name: 'Home',
  components: {

      CarouselHome,
      TimeLine
    //   Dashboard

  },
  methods: {
    teste() {
      this.axios.get('http://localhost:3000/api/loginn', { withCredentials: true })
                      .then((response) => {
                        console.log(response)    
                  
            
                    })
                    .catch(e => {
                        console.log(e)
                
                    })
  }

    },
  
  mounted() {
    // this.axios.get('http://localhost:3000/api/login', { withCredentials: true })
    //                   .then((response) => {
    //                     console.log(response)    
                  
            
    //                 })
    //                 .catch(e => {
    //                     console.log(e)
                
    //                 })
  }
}
</script>
