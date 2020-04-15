<template>
  <div>
    <NavBarAdmin v-if="$store.getters.companyType == 'buyer'"/>
    <NavBar v-else/>
    <router-view />

  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import NavBarAdmin from '../components/NavBarAdmin'

export default {
  name: 'Main',

  components: {
    NavBar,
    NavBarAdmin

  }

}
</script>
