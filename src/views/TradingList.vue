<template>
  <div>
      <ListTrading /> 
  </div>
</template>

<script>

import ListTrading from '../components/ListTrading'
import checkProfile from '../mixins/checkProfile'

export default {

  name: 'TradingList',
  mixins: [checkProfile],
  components: {
    ListTrading,
  },

  created() {

    this.checkProfile()

  }

}
</script>

<style>

</style>