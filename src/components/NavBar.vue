<template>
  <div>

    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to='/Notifications' icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.route" @click="changeTitle">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title  v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
/* eslint-disable no-console */
  export default {
    
    data: () => ({

      drawer: false,
      group: null,
      item: 0,
      items: [{
          text: 'Timeline',
          route: '/Home',
          icon: 'mdi-home'
        },
        {
          text: 'Pregão Eletrônico',
          route: '/TradingList',
          icon: 'mdi-cash-usd'
        },
        {
          text: 'Meus Dados',
          route: '/MyData',
          icon: 'mdi-account-card-details'
        },
        {
          text: 'Configurações',
          icon: 'mdi-settings'
        },
        {
          text: 'Histórico',
          icon: 'mdi-history'
        },
        {
          text: 'Sobre',
          icon: 'mdi-information'
        }
      ],
    }),
    watch: {

      group() {
        this.drawer = false
      },
    },

    methods: {

      changeTitle(event) {
        this.$store.dispatch('changeTitleBar', event.target.innerText)
      }
    },

    computed: {

      title() {
        return this.$store.getters.titleBar
      }
    }
  }
</script>