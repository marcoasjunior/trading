<template>
  <div>

    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to='/Notifications' icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary

    >
    <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
       <v-list
        nav
        dense
      >
        <v-list-item-group 
        v-model="item" 
        color="primary">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.route"
              
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content> 
              <v-list-item-title @click="changeTitle" v-text="item.text"></v-list-item-title>
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
      items: [
        { text: 'Timeline', route:'/Home', icon: 'mdi-home' },
        { text: 'Dashboard', route:'/Dashboard', icon: 'mdi-google-analytics' },
        { text: 'Pregão Eletrônico', route:'/TradingList', icon: 'mdi-cash-usd' },
        { text: 'Gerenciar', route:'/Administration', icon: 'mdi-home-account' },
        { text: 'Meus Dados', route:'/MyData', icon: 'mdi-account-card-details' },
        { text: 'Configurações', icon: 'mdi-settings' },
        { text: 'Histórico', icon: 'mdi-history' },
        { text: 'Sobre', icon: 'mdi-information' }
      ],
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {
      changeTitle(event) {
        this.$store.dispatch('changeTitleBar', event.target.innerHTML )
      }
    },

    computed: {
      title() {
        return this.$store.getters.titleBar
    }


    
  }
  }
</script>