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
        
 <v-form v-model="valid">
 
          <v-text-field
            v-model="bid"
            label="Lance"
            outlined
            dense
            prepend-icon="mdi-currency-usd"
            type="number"
            step=".01"
            required
          ></v-text-field>

  </v-form>
        
        
        <v-list-item
        v-for="item in items"
        :key="item.title"
      >
      
        <v-list-item-content>
          <v-list-item-title v-text="item.bid"> </v-list-item-title>
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
        bid: null,
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