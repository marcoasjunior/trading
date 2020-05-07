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
      <v-card-title class="d-flex justify-center">
        <v-row>

          <h1 class="display-1"> Lances vencedores </h1>
        </v-row>
        <v-row>
          <v-text-field class="search" v-model="search" append-icon="mdi-magnify" label="Procurar" single-line
            hide-details>
          </v-text-field>

        </v-row>
      </v-card-title>
      <v-data-table :headers="headers2" :items.sync="checkWinners" :search="search" item-key="item.name"
        class="elevation-1" :loading="checkLoading" loading-text="Estamos quase lá =)">

        <template v-slot:item.action="{ item }">
          <v-icon v-if='item.checked === true' class="mr-2" @click="checkDocs()">
            mdi-checkbox-marked-circle-outline
          </v-icon>
          <v-icon v-else class="mr-2" @click="checkDocs()">
            mdi-help-circle-outline
          </v-icon>
        </template>
      </v-data-table>


      <h1 class="display-1 ma-3"> Lances </h1>

    </v-card>

        <v-dialog v-model="modal">
      <v-card>
        <v-toolbar color="deep-purple accent-4" dark>
          <v-toolbar-title>Documentação</v-toolbar-title>
          <v-spacer />
          <v-btn icon dark @click="modal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        
<!-- CONTEÚDO -->
        <ListDocsBid />
        <ListDocsCompany />

        <v-card-actions>
          <v-btn color="red darken-1" text @click="disableCompany">Inabilitar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="enableCompany">Habilitar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>

import loading from '../mixins/loading'
import ListDocsBid from './ListDocsBid'
import ListDocsCompany from './ListDocsCompany'

/* eslint-disable no-console */

  export default {

    mixins: [loading],

    components: {
      ListDocsBid,
      ListDocsCompany
    },

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
            text: 'Habilitação',
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

      checkDocs() {

        this.modal = true
      

      }

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
<style>

</style>