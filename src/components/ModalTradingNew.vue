<template>
  <v-row justify="center">
    <v-dialog v-model="checkModal" fullscreen hide-overlay transition="dialog-bottom-transition">

      <v-card>
        <v-toolbar color="deep-purple accent-4"
      dark>
          <v-btn icon dark @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Revisão</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="submitTrading">Finalizar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
       
          <v-subheader>Itens Selecinados</v-subheader>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Item</th>
                  <th class="text-left">Quantidade</th>
                  <th class="text-left">V. Referência</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in checkSelectedItems" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>$ {{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        <v-divider></v-divider>
          <v-subheader>Pregoeiros</v-subheader>
           <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nome</th>
                  <th class="text-left">Usuário</th>       
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in checkSelectedUsers" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.username }}</td>
            
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        <v-divider></v-divider>
          <v-subheader>Configurações</v-subheader>
           <v-list dense>
      
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-file-document-box-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title ref="number"> {{checkTradingConfigNumber}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider> </v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-file-document-box-multiple-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{checkTradingConfigNotice}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider> </v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-package-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{checkTradingConfigTarget}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider> </v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-file-document-box-search-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{checkTradingConfigEvaluation}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider> </v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="green">mdi-calendar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{computedDateFormattedMomentjs}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider> </v-divider>
       <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="green">mdi-calendar-clock</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{checkTradingConfigTime}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>       
                <v-divider> </v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="red">mdi-calendar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{computedDateFormattedMomentjs2}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                 <v-divider> </v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="red">mdi-calendar-clock</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{checkTradingConfigEndTime}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import moment from 'moment'
  export default {
       /* eslint-disable no-console */
    data () {

      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    computed: {

      checkModal() {
        return this.$store.getters.modalTradingNew
      },
      checkSelectedItems() {
        return this.$store.getters.selectedItems
    },
      checkSelectedUsers() {
        return this.$store.getters.selectedUsers
    },
      checkTradingConfigNumber() {
        return this.$store.getters.tradingConfigNumber

    },
      checkTradingConfigNotice() {
        return this.$store.getters.tradingConfigNotice

    },
      checkTradingConfigEvaluation() {
        return this.$store.getters.tradingConfigEvaluation

    },
      computedDateFormattedMomentjs() {
        return this.$store.getters.tradingConfigStartDate ? moment(this.$store.getters.tradingConfigStartDate).format(
          'DD/MM/YYYY') : ''
      },
      computedDateFormattedMomentjs2() {
        return this.$store.getters.tradingConfigEndDate ? moment(this.$store.getters.tradingConfigEndDate).format(
          'DD/MM/YYYY') : ''
      },
      checkTradingConfigTarget() {
        return this.$store.getters.tradingConfigTarget

    },
      checkTradingConfigTime() {
        return this.$store.getters.tradingConfigTime

    },
      checkTradingConfigEndTime() {
        return this.$store.getters.tradingConfigEndTime

    },
    },
    methods: {

      closeModal() {
        this.$store.dispatch('changeModalTradingNew', false)
      },

      submitTrading() {

            const formData = new FormData()
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.token}`
              }
            }

            // get IDs

            const UsersId = this.$store.getters.selectedUsers.map( e => {
              return e._id
            })
            const ItemsId = this.$store.getters.selectedItems.map( e => {
              return e._id
            })

            //form

            formData.append('number', this.checkTradingConfigNumber)
            formData.append('notice', this.checkTradingConfigNotice)
            formData.append('evaluation', this.checkTradingConfigEvaluation)
            formData.append('startDate', this.computedDateFormattedMomentjs)
            formData.append('endDate', this.computedDateFormattedMomentjs2)
            formData.append('target', this.checkTradingConfigTarget)
            formData.append('time', this.checkTradingConfigTime)
            formData.append('endTime', this.checkTradingConfigEndTime)
            formData.append('users', UsersId)
            formData.append('items', ItemsId)

            this.axios
                .post('http://localhost:3000/api/register/trading', formData, config)
                .then((response) => {
                    console.log(response)

                })
                .catch(e => {
                    console.log(e)

                })
        }
    },
  }
</script>