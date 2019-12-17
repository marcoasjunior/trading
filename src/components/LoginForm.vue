<template>

    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="10" md="4">
                <v-card class="elevation-5">
             
                    <v-card-text>
                        <v-form ref="form" lazy-validation>

                            <v-text-field v-model="login" label="Login" prepend-icon="mdi-account-box"></v-text-field>

                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                prepend-icon="mdi-lock" :type="show1 ? 'text' : 'password'" name="input" label="Senha"
                                hint="Não compartilhe sua senha com ninguém" @click:append="show1 = !show1">
                            </v-text-field>
                            <v-row align="center">
                                <v-col align="center">
                                    <v-btn class="ma-2" color="#9C27B0" dark @click="submitLogin">
                                        <v-icon dark left>mdi-login-variant</v-icon>Entrar
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col align="center">
                                    <v-btn color="#9C27B0" dark>
                                        <v-icon dark left>mdi-refresh</v-icon>
                                        Recuperar senha
                                    </v-btn>
                                </v-col>

                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>


</template>

<script>
/* eslint-disable no-console */
    export default {
        data() {
            return {
                show1: false,
                show2: false,
               login: '',
                password: '',
                disable: true
            }
        },

        methods: {
            
            submitLogin() {

                const formData = new FormData()

                formData.append('username', this.login)
                formData.append('password', this.password)

                this.axios
                    .post('http://localhost:3000/api/login', formData)
                    .then((response) => {
                        console.log(response)
            
                    })
                    .catch(e => {
                        console.log(e)
                
                    })
                }
            },

        components: {

        }
    }
</script>

<style scoped>



</style>