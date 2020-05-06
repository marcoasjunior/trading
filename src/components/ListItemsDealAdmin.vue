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
        class="elevation-1" :loading="checkLoading"
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

import loading from '../mixins/loading'
/* eslint-disable no-console */

  export default {

    mixins: [loading],

    data() {
      return {
        modal: false,
        search: '',
        category: '',
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

      async getWinners() {

        this.enableLoading()

        await this.axios
          .get(`http://localhost:3000/api/getWinners/${this.$route.params.id}`, this.config)
          .then((response) => {

            this.$store.dispatch('changeWinners', response.data)
            this.disableLoading()

          })
          .catch(e => {

            alert(e)
            this.disableLoading()

          })
      },

    },

    computed: {

      checkRankedItems() {
        return this.$store.getters.rankedItems
      },
      checkWinners() {
        return this.$store.getters.winners
      },
      checkLoading() {
      return this.$store.getters.loading
    },
    },

    created() {

      this.getWinners()

    },
  }
</script>