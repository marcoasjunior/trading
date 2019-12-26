  <template>
  <div>
  <v-expansion-panels multiple>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        <p><small> pasoudhfoashfohasdopfgpaisdgfpsudgfiopasdgfoiagsdofigaspdufhaosindvobaspodufbhpiasudf</small></p>
        
        <v-list-item
        v-for="item in items"
        :key="item.title"
      >

        <v-list-item-icon>
          <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: '$ 100', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: '90', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: '80', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: '70', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
      }
    },
  }
</script>

<style>

</style>