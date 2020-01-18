<template>
  <div>
    <v-card>

      <v-tabs v-model="tabs" fixed-tabs>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#mobile-tabs-5-1" class="primary--text">
          <v-icon>mdi-progress-wrench</v-icon>
        </v-tab>

        <v-tab href="#mobile-tabs-5-2" class="primary--text">
          <v-icon>mdi-package-variant-closed</v-icon>
        </v-tab>

        <v-tab href="#mobile-tabs-5-3" class="primary--text">
          <v-icon>mdi-account-group</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item :value="'mobile-tabs-5-1'">
          <v-card flat>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="number" label="Número do Processo" required></v-text-field>
                    <v-text-field v-model="notice" label="Edital" required></v-text-field>
                    <v-text-field v-model="target" label="Objeto" required></v-text-field>
                    <v-select v-model="evaluation" :items="options" label="Tipo de Avaliação"></v-select>
                    <v-text-field :value="computedDateFormattedMomentjs" readonly clearable label="Agendar"
                      @click:clear="date = null" @focus="show = true"></v-text-field>

                    <v-date-picker v-show="show" v-model="date" @change="show = false" locale="pt-BR" full-width>
                    </v-date-picker>

                    <v-menu ref="menu" v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                      :return-value.sync="time" transition="scale-transition" offset-y max-width="290px"
                      min-width="290px">
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="time" label="Horário" readonly v-on="on"></v-text-field>
                      </template>
                      <v-time-picker v-if="menu2" v-model="time" full-width format="24hr"
                        @click:minute="$refs.menu.save(time)"></v-time-picker>
                    </v-menu>


                  </v-col>

                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'mobile-tabs-5-2'">
          <v-card flat>

            <v-card-title>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
              </v-text-field>
            </v-card-title>
            <v-data-table v-model="selectedItems" show-select :headers="headers" :items="checkList" :search="search"
              item-key="name" group-by="category" class="elevation-1" :loading="loading"
              loading-text="Estamos quase lá =)">

              <template v-slot:item.quantity="props">
                <v-text-field class="d-inline-flex pa-1" :return-value.sync="props.item.quantity"
                  v-model="props.item.quantity" label="Editar Quantidade" single-line>
                </v-text-field>
              </template>

            </v-data-table>
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'mobile-tabs-5-3'">
          <v-card flat>
            <v-card-title>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
              </v-text-field>
            </v-card-title>
            <v-data-table v-model="selectedUsers" show-select :headers="headersUsers" :items="checkUsers"
              :search="search" item-key="name" class="elevation-1" :loading="loading"
              loading-text="Estamos quase lá =)">

            </v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-container>
        <v-btn v-if="tabs == 'mobile-tabs-5-3'" block color="deep-purple accent-4" @click="showModal" dark>Revisar
          Pregão Eletrônico</v-btn>
      </v-container>
    </v-card>

    <ModalTradingNew />


  </div>
</template>

<script>
  import moment from 'moment'
  import ModalTradingNew from '../components/ModalTradingNew'

  export default {
    /* eslint-disable no-console */
    data() {
      return {

        // General

        tabs: null,
        menu1: false,
        search: '',
        show: false,
        options: ['Menor Preço', 'Maior Taxa', 'Menor Taxa'],
        loading: false,
        menu2: false,

        // Items

        name: '',
        idItem: '',
        description: '',
        price: 0.0,
        category: '',
        headers: [{
            text: 'Item',
            align: 'left',
            value: 'name',
          },
          {
            text: 'Categoria',
            value: 'category'
          },
          {
            text: 'Valor de Referência',
            value: 'price'
          },
          {
            text: 'Quantidade',
            value: 'quantity'
          },

        ],
        items: [],

        // Users

        idUser: null,
        nameContact: '',
        number2: null,
        email: '',
        email2: '',
        password: '',
        password2: '',
        headersUsers: [{
            text: 'Usuário',
            align: 'left',
            value: 'name',
          },
          {
            text: 'E-mail',
            value: 'username'
          },
          {
            text: 'Contato',
            value: 'contact'
          },
        ],
        itemsUser: []

      }


    },
    methods: {
      showModal() {
        this.$store.dispatch('changeModalTradingNew', true)
      }

    },
    computed: {
      computedDateFormattedMomentjs() {
        return this.$store.getters.tradingConfigStartDate ? moment(this.$store.getters.tradingConfigStartDate).format(
          'DD/MM/YYYY') : ''
      },

      checkList() {
        return this.$store.state.listItems
      },

      checkUsers() {
        return this.$store.state.listUsers
      },

      selectedItems: {
        get() {
          return this.$store.getters.selectedItems
        },
        set(items) {
          this.$store.dispatch('changeSelectedItems', items)
        }
      },

      selectedUsers: {
        get() {
          return this.$store.getters.selectedUsers
        },
        set(users) {
          this.$store.dispatch('changeSelectedUsers', users)
        }
      },
      number: {
        get() {
          return this.$store.getters.tradingConfigNumber
        },
        set(number) {
          this.$store.dispatch('changeTradingConfig', {
            number: number
          })
        }
      },
      notice: {
        get() {
          return this.$store.getters.tradingConfigNotice
        },
        set(notice) {
          this.$store.dispatch('changeTradingConfig', {
            notice: notice
          })
        }
      },
      target: {
        get() {
          return this.$store.getters.tradingConfigTarget
        },
        set(target) {
          this.$store.dispatch('changeTradingConfig', {
            target: target
          })
        }
      },
      evaluation: {
        get() {
          return this.$store.getters.tradingConfigEvaluation
        },
        set(evaluation) {
          this.$store.dispatch('changeTradingConfig', {
            evaluation: evaluation
          })
        }
      },
      date: {
        get() {
          return this.$store.getters.tradingConfigStartDate

        },
        set(date) {
          this.$store.dispatch('changeTradingConfig', {
            date: date
          })
        }
      },
      time: {
        get() {
          return this.$store.getters.tradingConfigTime

        },
        set(time) {
          this.$store.dispatch('changeTradingConfig', {
            time: time
          })
        },
      },


    },
    created() {


      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }

      this.axios
        .get('http://localhost:3000/api/getItems', config)
        .then((response) => {
          console.log(response)
          this.loading = false

          // Put items
          this.$store.dispatch('changeListItems', response.data)


        })
        .catch(e => {
          console.log(e)
          this.loading = false


        })

      this.axios
        .get('http://localhost:3000/api/getUsers', config)
        .then((response) => {
          console.log(response)
          this.$store.dispatch('changeListUsers', response.data)


        })
        .catch(e => {
          console.log(e)

        })
    },
    components: {
      ModalTradingNew
    }
  }
</script>

<style scoped>
  .button1 {
    margin-bottom: 15px
  }
</style>