<template>
  <v-container fluid>
    <v-data-iterator
      :items="getItems"
      item-key="name"
      :items-per-page="4"
      :single-expand="expand"
  
    >
      <template v-slot:default="{ items, isExpanded, expand }">
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
              
              
              <v-switch
                :input-value="isExpanded(item)"
                :label="isExpanded(item) ? 'Cancelar' : 'Fornecer'"
                class="pl-4 mt-0"
                @change="(v) => expand(item, v)"
              ></v-switch>
              <v-divider></v-divider>
              <v-list v-if="isExpanded(item)" dense>
          
                <v-list-item>
                  <v-list-item-content>Quantidade:</v-list-item-content>
                  <v-list-item-content class="align-end">{{item.quantity}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Referência:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.price}}</v-list-item-content>
                </v-list-item>
              <v-form :ref="item._id">
                  <v-text-field
                    
                    label="Proposta Por Unidade"
                    prepend-icon="mdi-currency-usd"
                    type="number" 
                    step="any"
                ></v-text-field>

                 <v-textarea
                    label="Observações"
                    auto-grow
                    prepend-icon="mdi-clipboard-text-outline"
                    hint="Caso seja necessário"
                    rows="2"
                    row-height="15"
                    ></v-textarea>

                  <v-btn block @click="submitProposal(item._id)" > Enviar </v-btn>
              </v-form>

              </v-list>

            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
  export default {
    data: () => ({
      expand: false,
      config: {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'multipart/form-data'
        }
      },
      
    }),
    methods: {
      submitProposal(id) {

        console.log(this.$refs[id][0].$el.elements[0].value)
        console.log(this.$refs[id][0].$el.elements[1].value)

        let formData = new FormData()
          formData.append('id', id)
          formData.append('bid', this.$refs[id][0].$el.elements[0].value)
          formData.append('obs', this.$refs[id][0].$el.elements[1].value)
          formData.append('type', 'proposal')          

        this.axios
          .post(`http://localhost:3000/api/setProposal`, formData, this.config)
          .then((response) => {
            console.log(response)

          })
          .catch(e => {
            console.log(e)

        })





      }
    },

    computed: {
        getItems() {
            return this.$store.getters.listTradingItems
        }
    },

    created() {

      
   
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
  }
</script>