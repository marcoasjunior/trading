<template>
    

<v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card >                     
                        <v-card-text>
                            <h3  class="subtitle-1"> Alterar Contato </h3>
                            <v-divider
                            horizontal/>
                            <v-form ref="form" lazy-validation>

                                <v-text-field v-model="number" prepend-icon="mdi-contact-phone" type="text" name="input"
                                    label="Telefone">
                                </v-text-field>

                                <v-text-field v-model="email1" prepend-icon="mdi-contact-mail" type="email" name="input"
                                    label="E-mail">
                                </v-text-field>

                                <v-text-field v-model="email1" prepend-icon="mdi-contact-mail" type="email" name="input"
                                    label="Confirmar E-mail">
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
                email1: '',
                email2: '',
                number: null,
            }
        },

        components: {

        }
    }
</script>

<style scoped>



</style>