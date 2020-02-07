<template>
  <div>  
    <ListItemsDealAdmin v-if="$store.getters.companyType == 'buyer'"/>
    <ListItemsDeal v-else/>
  </div>
</template>

<script>
import ListItemsDeal from '../components/ListItemsDeal'
import ListItemsDealAdmin from '../components/ListItemsDealAdmin'
/* eslint-disable no-console */
  export default {
    
    components: {
      ListItemsDeal,
      ListItemsDealAdmin
    },

    created() {
      this.axios
                .get('http://localhost:3000/api/profile', this.config)
                .then((response) => {
                    console.log(response)
                    
                    // Put type of Company
                    this.$store.dispatch('changeCompanyType', response.data.type)                  

                })
                .catch(e => {
                    console.log(e)

                
                })


    },
  }
</script>