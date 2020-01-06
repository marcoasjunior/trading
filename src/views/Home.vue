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
  

    },
    methods: {
      changeCompanyType(response) {
        this.$store.dispatch('changeCompanyType', response.data.type)
      }
    },
    mounted() {

      let config = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }

      this.axios
                .get('http://localhost:3000/api/profile', config)
                .then((response) => {
                    console.log(response)
                    
                    // Put type of Company
                    this.$store.dispatch('changeCompanyType', response.data.type)

                })
                .catch(e => {
                    console.log(e)
                    this.$router.push({ path: '/' })

                })
    }
    


  }
</script>
