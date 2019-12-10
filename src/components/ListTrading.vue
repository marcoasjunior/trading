<template>
    <v-row justify="center">
        <v-col>
  <v-card  class="mx-auto"
    max-width="400">
    <v-card-title>
   

      <v-text-field
   
        append-icon="mdi-magnify"
        label="Filtro"
        hint="Filtre os resultados"
        autofocus
        dense
      ></v-text-field>
    </v-card-title>
  </v-card>
        </v-col>
        <v-expansion-panels popout>
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
                <v-expansion-panel-header disable-icon-rotate>P.E. -
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list flat>
                        <v-list-item-group color="primary">
                            <v-list-item v-for="(item, i) in items" :key="i">
                                
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                    
                                    <v-subheader
                                        v-text="item.description"
                                        ></v-subheader>
        
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-list-item-group>
                    </v-list>
                    <v-btn text color="primary">Entrar</v-btn>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
  
</template>
<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'Objeto', icon: 'mdi-package-variant-closed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
        { text: 'Comprador', icon: 'mdi-account', description: 'SESI'  },
        { text: 'Fase', icon: 'mdi-step-forward', description: 'Encerrado'  },
      ],
    }),
  }
</script>