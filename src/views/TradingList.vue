<template>
  <div>
      <ListTrading />
  
  </div>
</template>

<script>
import ListTrading from '../components/ListTrading'


export default {
    /* eslint-disable no-console */
    name: 'TradingList',
    components: {
        ListTrading,
 
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


                })
                .catch(e => {
                    console.log(e)
                    this.$router.push({ path: '/' })

                })
    }

}
</script>

<style>

</style>