<template>
    <div>
        <v-card flat>
            <v-container>
                <v-row>

                    <v-col cols="12">
                        <v-list>
                            <v-list-item v-for="item in items" :key="item.title">
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-avatar>
                                    <v-img :src="item.avatar"></v-img>
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

                            <v-text-field class="my-n0" v-model="nameContact" label="Nome Completo" required>
                            </v-text-field>

                            <v-text-field v-model="number" type="text" name="input" hint="Apenas números"
                                label="Telefone">
                            </v-text-field>

                            <v-text-field v-model="email" type="email" name="input" label="E-mail">
                            </v-text-field>

                            <v-text-field v-model="email2" type="email" name="input" label="Confirmar E-mail"
                                hint="Será o seu LOGIN no sistema">
                            </v-text-field>

                            <v-text-field v-model="password" type="password" name="input" label="Senha">
                            </v-text-field>

                            <v-text-field v-model="password2" type="password" name="input" label="Confirmar Senha">
                            </v-text-field>

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