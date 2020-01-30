<template>
  <div>

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="checkProposalItems" :search="search" item-key="name" class="elevation-1" group-by="item"
        :loading="loading" loading-text="Estamos quase lá =)">

        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="confirmCancel(item)">
            mdi-cancel
          </v-icon>
        </template>



      </v-data-table>
    </v-card>



  </div>
</template>
<script>
/* eslint-disable no-console */
  export default {
    data() {
      return {
        modal: false,
        loading: false,
        search: '',
        category: '',
        headers: [

          {
            text: 'Proposta',
            value: 'bid.$numberDecimal'
          },
          {
            text: 'Observação',
            value: 'obs'
          },
          {
            text: 'Ações',
            value: 'action',
            sortable: false
          },

        ],
        items: [],
        config: {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }
      }

    },

    computed: {
      checkProposalItems() {
        return this.$store.getters.proposalItems
      }
    },

    created() {

      this.axios
        .get(`http://localhost:3000/api/getProposalItems/${this.$route.params.id}`, this.config)
        .then((response) => {
          console.log(response)
            this.$store.dispatch('changeProposalItems', response.data.bids)


        })
        .catch(e => {
          console.log(e)
  


        })
      
    },
  }
</script>