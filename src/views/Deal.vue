<template>
  <div>  
    <ListItemsDealAdmin v-if="$store.getters.companyType == 'buyer'"/>
    <ListItemsRating v-if="$store.getters.companyType == 'buyer'"/>
    <ListItemsDeal v-else/>
  </div>
</template>

<script>
import ListItemsDeal from '../components/ListItemsDeal'
import ListItemsDealAdmin from '../components/ListItemsDealAdmin'
import ListItemsRating from '../components/ListItemsRating'
/* eslint-disable no-console */
  export default {
    
    components: {
      ListItemsDeal,
      ListItemsDealAdmin,
      ListItemsRating
    },
    
  }
</script>