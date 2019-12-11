<template>

    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="10" md="4">
                <v-card class="elevation-5">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-spacer />
                    <v-card-text>
                        <v-form ref="form" lazy-validation>

                            <v-text-field label="Login" prepend-icon="mdi-account-box"></v-text-field>

                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                prepend-icon="mdi-lock" :type="show1 ? 'text' : 'password'" name="input" label="Senha"
                                hint="Não compartilhe sua senha com ninguém" @click:append="show1 = !show1">
                            </v-text-field>
                            <v-row align="center">
                                <v-col align="center">
                                    <v-btn color="success" class="my-n10">
                                        Entrar
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col align="center">
                                    <v-btn color="error">
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
    export default {
        data() {
            return {
                show1: false,
                show2: true,
                show3: false,
                show4: false,
                password: '',
            }
        },

        components: {

        }
    }
</script>

<style scoped>



</style>