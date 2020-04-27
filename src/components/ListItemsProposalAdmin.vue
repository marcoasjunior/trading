<template>
  <v-container fluid>
    <v-data-iterator
      :items="getItems"
      item-key="name"
      :items-per-page="6" 
    >
      <template>
        <v-row>
          <v-col
            v-for="item in getItems"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title>
                <h4>{{ item.name }}</h4>                                            
              </v-card-title>
              <v-card-title>
                <h6> Descrição: {{ item.description }}</h6>                                            
              </v-card-title>           

            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>

import checkProfile from '../mixins/checkProfile'

/* eslint-disable no-console */
export default {

  mixins: [checkProfile],

  data: () => ({
    expand: false,
    config: {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'multipart/form-data'
      }
    },

  }),

  computed: {
    getItems() {
      return this.$store.getters.listTradingItems
    }
  },

  methods: {

    getTradingItems() {
      this.axios
        .get(`http://localhost:3000/api/getTradingItems/${this.$route.params.id}`, this.config)
        .then((response) => {
          console.log(response)

          // Put items
          this.$store.dispatch('changeListTradingItems', response.data.items)

        })
        .catch(e => {
          console.log(e)

        })
    }
  },

  created() {

    this.getTradingItems()
    this.checkProfile()
    
  }
}
</script>