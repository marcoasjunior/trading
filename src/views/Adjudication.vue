<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      item-key="name"
      :items-per-page="4"
      :single-expand="expand"
  
    >
      <template v-slot:default="{ items, isExpanded, expand }">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title>
                <h4>{{ item.name }}</h4>
                <small> pasoudhfoashfohasdopfgpaisdgfpsudgfiopasdgfoiagsdofigaspdufhaosindvobaspodufbhpiasudf</small>
              </v-card-title>
              
              <v-switch
                :input-value="isExpanded(item)"
                :label="isExpanded(item) ? 'Fechar' : 'Abrir'"
                class="pl-4 mt-0"
                @change="(v) => expand(item, v)"
              ></v-switch>
              <v-divider></v-divider>
              <v-list v-if="isExpanded(item)" dense>

                <v-list-item>
                  <v-list-item-content>Quantidade:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.fat }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Vencedor:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Lance Vencedor:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
                </v-list-item>
              </v-list>

            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      expand: false,
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 'aosuidhaiosdhoiabosdfgp9asugdpfbasipdvgpasbvdipfvpasudgbfpvbaspdifbpasf',
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
        },
      ],
    }),
  }
</script>