<template>
  <div>
    <v-card flat>
      <v-container>
        <v-row>

          <v-col cols="12">
            <v-list>
              
              <v-list-item v-for="user in checkUsers" :key="user.title">
                
                <v-list-item-content>
                  <v-list-item-title v-text="user.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar>
                  <v-img :src="user.avatar"></v-img>                  
                </v-list-item-avatar>
              
              </v-list-item>


            </v-list>
            <v-fab-transition>
              <v-btn @click="modal = true" color="purple" fab dark absolute bottom right>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-col>
        </v-row>
      </v-container>
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
      password2: ''

    }
  },
  computed: {
    checkUsers() {
      return this.$store.getters.listUsers
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


                })
                .catch(e => {
                    console.log(e)

                })


        }


    },
}
</script>

<style>

</style>