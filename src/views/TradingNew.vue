<template>
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

                  <v-select :items="options" label="Tipo de Avaliação"></v-select>



                  <v-text-field :value="computedDateFormattedMomentjs" clearable label="Agendar"
                    @click:clear="date = null" @focus="show = true"></v-text-field>

                  <v-date-picker v-show="show" v-model="date" @change="show = false" locale="pt-BR" full-width>
                  </v-date-picker>


                </v-col>

              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'mobile-tabs-5-2'">
        <v-card flat>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
       
        >
         
            <v-list-item v-text="subItem.title"></v-list-item>
            <v-btn>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
        
        </v-list-item>
      </v-list-group>
    </v-list>


        </v-card>
      </v-tab-item>

      <v-tab-item :value="'mobile-tabs-5-3'">
        <v-card flat>
         <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
          
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import moment from 'moment'

  export default {
    data () {
      return {
        tabs: null,
        menu1: false,
        search: '',
        number: null,
        notice: null,
        target: null,
        date: new Date().toISOString().substr(0, 10),
        show: false,
        restrict: false,
        evaluation: '',
        options: ['Menor Preço', 'Maior Taxa', 'Menor Taxa'],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          }
          ],
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
        ],

        
      }
    },
     computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('DD/MM/YYYY') : ''
      },
  }
  }
</script>

<style>

</style>