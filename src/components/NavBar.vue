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
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
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
              <v-list-item-title @click="title = item.text" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      title: 'Home',
      item: 0,
      items: [
        { text: 'Home', route:'/Home', icon: 'mdi-star' },
        { text: 'Dashboard', route:'/Dashboard', icon: 'mdi-google-analytics' },
        { text: 'Pregão Eletrônico', route:'/Trading', icon: 'mdi-cash-usd-outline' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>