<template>
    

<v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card >                     
                        <v-card-text>
                            <h3  class="subtitle-1"> Alterar Endereço </h3>
                            <v-divider
                            horizontal/>
                            <v-form ref="form" lazy-validation>

                                <v-text-field v-model="cep" v-mask="'#####-###'" prepend-icon="mdi-map-marker-circle" type="text" name="input"
                                    label="CEP">
                                </v-text-field>                     

                                <v-text-field v-model="address" prepend-icon="mdi-map-marker" type="text" name="input"
                                    label="Endereço">
                                </v-text-field>

                                <v-text-field v-model="address2" prepend-icon="mdi-map-marker-plus" type="text" name="input"
                                    label="Complemento" hint="Apenas se houver (apto, bloco, quadra)">
                                </v-text-field>

                             
                                <v-row dense align="center" justify="center">
                                    <v-col align="center">
                                        <v-btn dense color="success">
                                            Alterar
                                        </v-btn>
                                    </v-col>

                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
    </template>

    <script>
    export default {
        data() {
            return {
                address: '',
                address2: '',
                cep: null,
                number: null,
            }
        },

        components: {

        }
    }
</script>

<style scoped>



</style>