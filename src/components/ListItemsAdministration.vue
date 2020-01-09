<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Procure" single-line hide-details>
        </v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="checkList" :search="search" item-key="name" group-by="category"
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

    <v-dialog v-model="modalEdit">
      <v-card>
        <v-toolbar color="deep-purple accent-4" dark>
          <v-toolbar-title>Editar Item</v-toolbar-title>
          <v-spacer />
          <v-btn icon dark @click="modalEdit = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nome do Item" v-model="name" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Descrição" v-model="description" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Valor de Referência" v-model="price" type="number" step=".01" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Serviços', 'Alimentação', 'Vestuário', 'Material Durável', 'Obras e Reformas', 'Outras Despesas']"
                  label="Categoria" v-model="category" required></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="submitFormEdit" text>Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="modal">
      <v-card>
        <v-toolbar color="deep-purple accent-4" dark>
          <v-toolbar-title>Novo Item</v-toolbar-title>
          <v-spacer />
          <v-btn icon dark @click="modal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nome do Item" v-model="name" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Descrição" v-model="description" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Valor de Referência" v-model="price" type="number" step=".01" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Serviços', 'Alimentação', 'Vestuário', 'Material Durável', 'Obras e Reformas', 'Outras Despesas']"
                  label="Categoria" v-model="category" required></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="submitFormCreate">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="modalDelete"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Deseja deletar o item?</v-card-title>


        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="deleteItem"
          >
            Sim
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="modalDelete = false"
          >
            Não
          </v-btn>
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

    editItem(item) {
      this.idItem = item._id
      this.modalEdit = true
      this.name = item.name
      this.description = item.description
      this.price = item.price
      this.category = item.category

    },

    deleteItem(item) {


      if (confirm('Deseja deletar o item selecionado?')) {

        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        }

        this.axios
          .post('http://localhost:3000/api/delete/item', {
            _id: item._id
          }, config)
          .then((response) => {
            console.log(response)

            let config = {
              headers: {
                Authorization: `Bearer ${localStorage.token}`
              }
            }

            this.axios
              .get('http://localhost:3000/api/getItems', config)
              .then((response) => {
                console.log(response)

                // Put items
                this.$store.dispatch('changeListItems', response.data)
                this.loading = false

              })
              .catch(e => {
                console.log(e)
                this.loading = false


              })
          })
          .catch(e => {
            console.log(e)
            this.loading = false

          })
        this.modalDelete = false
      }

      this.modalDelete = false

    },


    submitFormCreate() {

      this.modal = false
      const formData = new FormData()

      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('category', this.category)

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.token}`
        }

      }

      this.axios
        .post('http://localhost:3000/api/register/item', formData, config)
        .then((response) => {
          console.log(response)
          this.loading = false

          let config = {
              headers: {
                Authorization: `Bearer ${localStorage.token}`
              }
            }

            this.axios
              .get('http://localhost:3000/api/getItems', config)
              .then((response) => {
                console.log(response)

                // Put items
                this.$store.dispatch('changeListItems', response.data)
                this.loading = false

              })
              .catch(e => {
                console.log(e)
                this.loading = false


              })


        })
        .catch(e => {
          console.log(e)
          this.loading = false

        })
      this.loading = true

    },

    submitFormEdit() {

      this.modal = false
      const formData = new FormData()

      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('category', this.category)
      formData.append('id', this.idItem)
      console.log(this.idItem)

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.token}`
        }

      }

      this.axios
        .post('http://localhost:3000/api/edit/item', formData, config)
        .then((response) => {
          console.log(response)

          let config = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }

          this.axios
            .get('http://localhost:3000/api/getItems', config)
            .then((response) => {
              console.log(response)

              // Put items
              this.$store.dispatch('changeListItems', response.data)
              this.loading = false

            })
            .catch(e => {
              console.log(e)
              this.loading = false


            })

        })
        .catch(e => {
          console.log(e)
          this.loading = false

        })
      this.modalEdit = false
      this.loading = true


    }


  },

  computed: {
    checkList() {
      return this.$store.state.listItems
    }
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
  },
}
</script>

<style>

</style>