<template>
    

<v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card >                     
                        <v-card-text>
                            <h3 class="subtitle-1"> Alterar Dados de Entrada </h3>
                            <v-divider
                            horizontal/>
                            <v-form ref="form" lazy-validation>

                                <v-text-field v-model="password1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock" :type="show1 ? 'text' : 'password'" name="input"
                                    label="Senha" hint="Pelo menos 6 caracteres" counter
                                    @click:append="show1 = !show1">
                                </v-text-field>
                                <v-text-field v-model="password2" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="mdi-lock-alert" :type="show1 ? 'text' : 'password'" name="input"
                                    label="Senha" hint="Deve ser igual à senha acima" counter
                                    @click:append="show1 = !show1">
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
                show1: false,
                password1: '',
                password2: ''
            }
        },

        components: {

        }
    }
</script>

<style scoped>



</style>