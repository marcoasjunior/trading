<template>
<div>

    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="checkTrading" :search="search" item-key="name" 
        class="elevation-1" :loading="loading" loading-text="Estamos quase lá =)">

        <template v-slot:item.action="{ item }">
          <v-icon class="mr-2" @click="adminTrading(item)">
            mdi-settings-transfer-outline
          </v-icon>
          <v-icon class="mr-2"  @click="confirmCancel(item)">
            mdi-cancel
          </v-icon>
          <v-icon class="mr-2"  @click="goTrading(item)">
            mdi-login-variant
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
        search: '',
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
            text: 'Início das Propostas',
            value: 'startDate'
          },
          {
            text: 'Final das Propostas',
            value: `endDate`
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
        items: [],
        config: {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }
      }

    },
    methods: {
      goTradingNew() {
        this.$router.push({
          path: '/TradingNew'
        })
      },
      confirmCancel(item) {

        confirm('Deseja cancelar o pregão em questão?') ? this.cancelTrading(item) : null

      },
      goTrading(item) {
         if (item.step == 'proposal') this.$router.push({path: `/Proposal/${item._id}`})
      },
      adminTrading(item) {
        console.log(item)
        
        if (item.step == 'proposal') this.$router.push({path: `/Proposal/${item._id}`})
      },
      cancelTrading(item) {

      this.axios
        .post('http://localhost:3000/api/cancel/trading', {id: item._id} ,this.config)
        .then((response) => {
          console.log(response)

        })
        .catch(e => {
          console.log(e)

        })


      }

    },

    computed: {
      checkTrading() {
        return this.$store.getters.listTrading
      }
    },

    created() {

      this.axios
        .get('http://localhost:3000/api/getTrading', this.config)
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