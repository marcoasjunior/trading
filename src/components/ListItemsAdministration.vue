<template>
    <div>
        <v-card flat>
            <v-container>
                <v-row>

                    <v-col cols="12">
                        <v-list>
                            <v-list-group v-for="item in items" :key="item.title" v-model="item.active"
                                :prepend-icon="item.action" no-action>
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                </template>

                                <v-list-item v-for="subItem in item.items" :key="subItem.title">

                                    <v-list-item v-text="subItem.title"></v-list-item>
                                    <v-btn>
                                        <v-icon>mdi-plus</v-icon>
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
                                <v-text-field label="Nome do Item" hint="Descrição do item no campo abaixo" required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Descrição" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Valor de Referência" type="number" step=".01" required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select
                                :items="['cat1', 'cat2', 'cat3']"
                                label="Categoria"
                                required
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                   
                    <v-btn color="blue darken-1" text @click="modal = false">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



    </div>

</template>

<script>
export default {
    data () {
      return {
        modal: false,
        items: [
          {
            action: 'mdi-handshake',
            title: 'Serviços',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-silverware',
            title: 'Alimentação',
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            action: 'mdi-hanger',
            title: 'Vestuário',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-chair-rolling',
            title: 'Material Durável',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-lead-pencil',
            title: 'Material Consumível',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-bulldozer',
            title: 'Obras e Reformas',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-cart',
            title: 'Outras Despesas',
            items: [
              { title: 'List Item' },
            ],
          },
        ]

        
      

}
    }
}
</script>

<style>

</style>