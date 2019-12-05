<template>

    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>
                        <v-spacer />
                        <v-card-text>
                            <v-form ref="form" lazy-validation>

                                <v-text-field label="Login" prepend-icon="account_circle"></v-text-field>

                                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    prepend-icon="lock" :type="show1 ? 'text' : 'password'" name="input"
                                    label="Senha" hint="Não compartilhe sua senha com ninguém" 
                                    @click:append="show1 = !show1">
                                </v-text-field>
                                <v-row align="center" justify="center">
                                    <v-col align="start" justify="center">
                                        <v-btn color="success" class="mr-4">
                                            Login
                                        </v-btn>
                                    </v-col>

                                    <v-col align="end" justify="center">
                                        <v-btn color="error" class="mr-4">
                                            Esqueci minha senha
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