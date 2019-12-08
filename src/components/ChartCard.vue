<template>

    
          <v-card>
            <v-img
              :src="cardProps.src"
              class="white--text align-end"
              height="300px"
            >
              <v-card-title v-text="cardProps.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-file-document-outline</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-download</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
     

</template>
<script>
export default {
    name: 'ChartCard',
    props: {
        cardProps: Object
    },
    data: () => ({



    })
}
</script>