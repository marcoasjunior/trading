<template>
  <div>
    <v-card flat v-if='!loading'>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-list>
              <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action"
                no-action>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="subItem in item.items" :key="subItem._id">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title v-text="subItem.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-btn @click="editItem(subItem)">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </v-list-item>
              </v-list-group>
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
          <v-btn color="blue darken-1" @click="submitFormEdit" text >Salvar</v-btn>
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

  <v-dialog v-model="loading">
  <v-container style="height: 400px;">
        <v-row
          class="fill-height"
          align-content="center"
          justify="center"
        >
          <v-col
            class="subtitle-1 text-center"
            cols="12"
          >
            Só um segundinho =)
          </v-col>
          <v-col cols="6">
            <v-progress-linear
              color="deep-purple accent-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>
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
      name: '',
      idItem: '',
      description: '',
      price: 0.0,
      category: '',
      items: [{
          action: 'mdi-handshake',
          title: 'Serviços',
          items: this.$store.getters.listServices,
        },
        {
          action: 'mdi-silverware',
          title: 'Alimentação',
          items: this.$store.getters.listFood,
        },
        {
          action: 'mdi-hanger',
          title: 'Vestuário',
          items: this.$store.getters.listClothes,
        },
        {
          action: 'mdi-chair-rolling',
          title: 'Material Durável',
          items: this.$store.getters.listDurable,
        },
        {
          action: 'mdi-bulldozer',
          title: 'Obras e Reformas',
          items: this.$store.getters.listConstruction,
        },
        {
          action: 'mdi-cart',
          title: 'Outras Despesas',
          items: this.$store.getters.listOthers,
        },
      ]

    }

  },

  methods: {

    editItem(item) {
      this.idItem = item._id
      this.modalEdit = true
      this.name = item.name
      this.description = item.description
      this.price = parseFloat(item.price.$numberDecimal) // MUDAR
      this.category = item.category
      
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
          this.loading = false

        })
        .catch(e => {
          console.log(e)
          this.loading = false

        })
        this.modalEdit = false
        this.loading = true


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

        // Put items
        this.$store.dispatch('changeListItems', response.data)

      })
      .catch(e => {
        console.log(e)


      })
  },
}
</script>

<style>

</style>