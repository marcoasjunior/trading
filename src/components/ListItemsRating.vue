<template>
  <div>

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items.sync="checkProposalItems" :search="search" item-key="item._id" class="elevation-1" group-by="type"
      sort-by="bid.$numberDecimal"
        :loading="loading" loading-text="Estamos quase lá =)">
        
        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="confirmCancel(item)" v-if="item.status === 'active'">
            mdi-cancel
          </v-icon>
          <v-icon class="mr-2" @click="activateProposal(item)" v-else>
            mdi-redo-variant
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
          text: 'Status',
          value: 'status'
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

  methods: {

    async activateProposal(item) {

      await this.axios
        .post('http://localhost:3000/api/activate/proposal', {
          id: item._id
        }, this.config)

        .then((response) => {
          console.log(response)
        })
        .catch(e => {
          console.log(e)

        })

      await this.axios
        .get(`http://localhost:3000/api/getProposalItems/${this.$route.params.id}`, this.config)
        .then((response) => {
          console.log(response)
          this.$store.dispatch('changeProposalItems', response.data.bids)
        })
        .catch(e => {
          console.log(e)
        })
    },

    async confirmCancel(item) {

      await this.axios
        .post('http://localhost:3000/api/disable/proposal', {
          id: item._id
        }, this.config)
        .then((response) => {
          console.log(response)

        })
        .catch(e => {
          console.log(e)

        })

      await this.axios
        .get(`http://localhost:3000/api/getProposalItems/${this.$route.params.id}`, this.config)
        .then((response) => {
          console.log(response)
          this.$store.dispatch('changeProposalItems', response.data.bids)


        })
        .catch(e => {
          console.log(e)

        })
    },

    async getProposalBids() {

      await this.axios
        .get(`http://localhost:3000/api/getProposalBids/${this.$route.params.id}`, this.config)
        .then((response) => {
          console.log(response)
          this.$store.dispatch('changeProposalItems', response.data)


        })
        .catch(e => {
          console.log(e)

        })
    },

    async updateStep() {

      await this.axios
        .post(`http://localhost:3000/api/update/step`, {
          step: 'rating',
          id: this.$route.params.id
        }, this.config)
        .then((response) => {
          console.log(response)


        })
        .catch(e => {
          console.log(e)

        })
    },
  },

  computed: {

    checkProposalItems() {
      return this.$store.getters.proposalItems
    }
  },

  created() {

    this.getProposalBids()
    this.updateStep()

  },
}
</script>