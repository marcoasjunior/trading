<template>
  <div>
    <!-- <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers1" :items.sync="checkProposalItems" :search="search" item-key="item.name"
        class="elevation-1" group-by="company" sort-by="bid.$numberDecimal" :loading="loading"
        loading-text="Estamos quase lá =)">
        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="confirmCancel(item)" v-if="item.status == 'active'">
            mdi-cancel
          </v-icon>
          <v-icon class="mr-2" @click="activateProposal(item)" v-else>
            mdi-redo-variant
          </v-icon>
        </template>
      </v-data-table>
    </v-card> -->

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers2" :items.sync="checkWinners" :search="search" item-key="item.name"
        class="elevation-1" :loading="loading"
        loading-text="Estamos quase lá =)">
        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="confirmCancel(item)" v-if="item.status == 'active'">
            mdi-cancel
          </v-icon>
          <v-icon class="mr-2" @click="activateProposal(item)" v-else>
            mdi-redo-variant
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers3" :items.sync="checkProposalItems" :search="search" item-key="item.name"
        class="elevation-1" group-by="type" sort-by="bid.$numberDecimal" :loading="loading"
        loading-text="Estamos quase lá =)">
        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="confirmCancel(item)" v-if="item.status == 'active'">
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
        headers1: [

          {
            text: 'Lance',
            value: 'bid.$numberDecimal'
          },
          {
            text: 'Status',
            value: 'status'
          },
          {
            text: 'Ranking',
            value: 'ranking'
          },
          {
            text: 'Ações',
            value: 'action',
            sortable: false
          },

        ],
        headers2: [

          {
            text: 'Empresa',
            value: 'company.name'
          },

          {
            text: 'Item',
            value: 'item.name'
          },

          {
            text: 'Lance',
            value: 'bid.$numberDecimal'
          },
          {
            text: 'Ações',
            value: 'action',
            sortable: false
          }       
        ],

        headers3: [

          {
            text: 'Lance',
            value: 'bid.$numberDecimal'
          },
          {
            text: 'Empresa',
            value: 'company'
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
        companies: [],
        config: {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }
      }

    },

    methods: {

      async getProposalBids() {
        await this.axios
          .get(`http://localhost:3000/api/getProposalBids/${this.$route.params.id}`, this.config)
          .then((response) => {

            this.$store.dispatch('changeProposalItems', response.data)
            this.$store.dispatch('changeRankedItems', response.data)

          })
          .catch(e => {
            console.log(e)

          })

        await this.axios
          .get(`http://localhost:3000/api/getWinners/${this.$route.params.id}`, this.config)
          .then((response) => {

            this.$store.dispatch('changeWinners', response.data)

          })
          .catch(e => {
            console.log(e)

          })

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

      activateProposal(item) {

        this.axios
          .post('http://localhost:3000/api/activate/proposal', {
            id: item._id
          }, this.config)
          .then((response) => {
            console.log(response)
            this.axios
              .get(`http://localhost:3000/api/getProposalItems/${this.$route.params.id}`, this.config)
              .then((response) => {
                console.log(response)
                this.$store.dispatch('changeProposalItems', response.data.bids)

              })
              .catch(e => {
                console.log(e)

              })

          })
          .catch(e => {
            console.log(e)

          })
      },

      confirmCancel(item) {

        this.axios
          .post('http://localhost:3000/api/disable/proposal', {
            id: item._id
          }, this.config)
          .then((response) => {
            console.log(response)
            this.axios
              .get(`http://localhost:3000/api/getProposalItems/${this.$route.params.id}`, this.config)
              .then((response) => {
                console.log(response)
                this.$store.dispatch('changeProposalItems', response.data.bids)


              })
              .catch(e => {
                console.log(e)



              })

          })
          .catch(e => {
            console.log(e)

          })
      },

    },

    computed: {
      checkProposalItems() {
        return this.$store.getters.proposalItems
      },
      checkRankedItems() {
        return this.$store.getters.rankedItems
      },
      checkWinners() {
        return this.$store.getters.winners
      }
    },

    created() {

      this.getProposalBids()     
      
    },
  }
</script>