<template>
<div>

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="checkList" :search="search" item-key="name" group-by="category"
        class="elevation-1" :loading="loading" loading-text="Estamos quase lá =)">

        <template v-slot:item.fase="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil-outline
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-trash-can-outline
          </v-icon>
        </template>

      </v-data-table>
          <!-- <v-fab-transition v-if="this.$store.getters.companyType == 'buyer'"> -->
            <v-fab-transition>
            <v-btn @click="goTradingNew" color="purple" fab dark absolute bottom left>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
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
      modalEdit: false,
      modalDelete: false,
      search: '',
      name: '',
      idItem: '',
      description: '',
      price: 0.0,
      category: '',
      headers: [{
          text: 'Numeração',
          align: 'left',
          value: 'number',
        },
        {
          text: 'Objeto',
          value: 'target'
        },
        {
          text: 'Final das Propostas',
          value: 'proposal'
        },
        {
          text: 'Quantidade',
          value: 'quantity'
        },
        {
          text: 'Fase',
          value: 'step',
        },
        {
          text: 'Ações',
          value: 'action',
          sortable: false
        },
        
      ],
      items: []

    }

  },
    methods: {
      goTradingNew() {
        this.$router.push({ path: '/TradingNew' })
      }
    },

    created() {


    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }

    this.axios
      .get('http://localhost:3000/api/getTrading', config)
      .then((response) => {
        console.log(response)
        this.loading = false

        // Put items
        this.$store.dispatch('changeListTranding', response.data)


      })
      .catch(e => {
        console.log(e)
        this.loading = false


      })
  },
  }
</script>