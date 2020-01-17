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
            <v-btn dark text @click="closeModal">Finalizar</v-btn>
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
           <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nome</th>
                  <th class="text-left">Valor</th>       
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
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
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
    },
    methods: {
      closeModal() {
        this.$store.dispatch('changeModalTradingNew', false)
      }
    },
  }
</script>