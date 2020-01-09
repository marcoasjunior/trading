<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="checkUsers" :search="search" item-key="name"
        class="elevation-1" :loading="loading" loading-text="Estamos quase lá =)">

        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil-outline
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-trash-can-outline
          </v-icon>
        </template>

      </v-data-table>
      <v-fab-transition>
        <v-btn @click="modal = true" color="purple" fab absolute dark bottom left>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card>

 

    <v-dialog v-model="modal">
      <v-card>
        <v-toolbar color="deep-purple accent-4" dark>
          <v-toolbar-title>Novo Usuário</v-toolbar-title>
          <v-spacer />
          <v-btn icon dark @click="modal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field class="my-n0" v-model="nameContact" label="Nome Completo" required>
                </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="number" type="text" name="input" hint="Apenas números" label="Telefone">
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="email" type="email" name="input" label="E-mail">
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="email2" type="email" name="input" label="Confirmar E-mail"
                    hint="Será o seu LOGIN no sistema">
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="password" type="password" name="input" label="Senha">
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="password2" type="password" name="input" label="Confirmar Senha">
                  </v-text-field>
                </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="submitForm">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  /* eslint-disable no-console */
  data() {
    return {
      modal: false,
      nameContact: '',
      number: null,
      email: '',
      email2: '',
      password: '',
      password2: '',
      loading: false,
      modalEdit: false,
      modalDelete: false,
      search: '',
      headers: [{
          text: 'Usuários',
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
        {
          text: 'Ações',
          value: 'action',
          sortable: false
        },
      ],
      items: []

    }
  },
  computed: {
    checkUsers() {
      return this.$store.state.listUsers
    }
  },
  methods: {

        submitForm() {

            this.modal = false
            const formData = new FormData()

            formData.append('nameContact', this.nameContact)
            formData.append('username', this.email2)
            formData.append('number', this.number)
            formData.append('password', this.password2)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.token}`
                }
              
            }

            this.axios
                .post('http://localhost:3000/api/register/user', formData, config)
                .then((response) => {
                    console.log(response)

                    let config = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }

      this.axios
                .get('http://localhost:3000/api/getUsers', config)
                .then((response) => {
                 
                    this.$store.dispatch('changeListUsers', response.data)
                    

                })
                .catch(e => {
                    console.log(e)

                })


                })
                .catch(e => {
                    console.log(e)

                })


        }


    },

    created() {
          let config = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }

      this.axios
                .get('http://localhost:3000/api/getUsers', config)
                .then((response) => {
                    console.log(response)
                    this.$store.dispatch('changeListUsers', response.data)
                    

                })
                .catch(e => {
                    console.log(e)

                })
    }

}
</script>

<style>

</style>