<template>
  <div>
    <ListItemsRating v-if="$store.getters.companyType == 'buyer'" />
    <Waiting v-else/>
  </div>
</template>

<script>
import ListItemsRating from '../components/ListItemsRating'
import Waiting from '../components/Waiting'
/* eslint-disable no-console */
  export default {

    
    
    components: {
      ListItemsRating,
      Waiting
    },

   
  }
</script>