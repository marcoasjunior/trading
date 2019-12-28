<template>
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
              </v-col>
            </v-row>
          </v-container>

        </v-card>
</template>

<script>
export default {
    data () {
      return {
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