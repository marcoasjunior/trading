<template>
  <div>
    <ListItemsProposalAdmin v-if="$store.getters.companyType == 'buyer'"/>
    <ListItemsProposal v-else/>
  </div>
</template>

<script>
import ListItemsProposalAdmin from '../components/ListItemsProposalAdmin'
import ListItemsProposal from '../components/ListItemsProposal'
  export default {
    
    components: {
      ListItemsProposal,
      ListItemsProposalAdmin
    }
  }
</script>