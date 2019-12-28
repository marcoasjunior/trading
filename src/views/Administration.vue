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
  components: {
    NavAdministration,
    ListItemsAdministration,
    ListUsersAdministration
  },
  computed: {
    checkPage() {
      return this.$store.getters.pageAdministration == 'Users' ? true : false
    },
  }
}
</script>

<style>

</style>