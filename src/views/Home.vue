<template>
  <div class="Home">
      <NavBar />
      <CarouselHome />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'    
import Footer from '../components/Footer'    
import CarouselHome from '../components/CarouselHome'    
// import Dashboard from './Dashboard'    

export default {
  name: 'Home',
  components: {
      NavBar,
      Footer,
      CarouselHome
    //   Dashboard

  }
}
</script>
