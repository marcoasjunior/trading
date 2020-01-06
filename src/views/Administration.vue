<template>
  <div>
    <NavAdministration />
    <ListUsersAdministration v-if="checkPage"/>
    <ListItemsAdministration v-if="checkPage == false" />
  
  </div>
</template>

<script>
import ListItemsAdministration from '../components/ListItemsAdministration'
import NavAdministration from '../components/NavAdministration'
import ListUsersAdministration from '../components/ListUsersAdministration'

export default {
  /* eslint-disable no-console */
  components: {
    NavAdministration,
    ListItemsAdministration,
    ListUsersAdministration
  },
  computed: {
    checkPage() {
      return this.$store.getters.pageAdministration == 'Users' ? true : false
    }
  },
  mounted() {
          let config = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }

      this.axios
                .get('http://localhost:3000/api/getUsers', config)
                .then((response) => {
                    console.log(response)
                    this.$store.dispatch('changeListUsers', response.data)
                    

                })
                .catch(e => {
                    console.log(e)

                })


}
}
</script>

<style>

</style>