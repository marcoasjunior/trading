<template>
    <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            Dados Gerais
        </v-stepper-step>

        <v-stepper-content step="1">

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field class="my-n0" v-model="name" label="Nome Fantasia" required>
                </v-text-field>

                <v-text-field class="my-n2" v-model="social" label="Razão Social" required>
                </v-text-field>

                <v-text-field class="my-n2" v-model="cnpj" v-mask="'##.###.###/####-##'" label="CNPJ" required>
                </v-text-field>

                <v-checkbox v-model="mei" label="Empresa MEI, ME ou EPP" required></v-checkbox>

                <v-checkbox class="my-n4 py-0" v-model="checkbox" label="Sou Pessoa Física" required></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="e6 = 2">
                    Confirmar
                </v-btn>
            </v-form>

        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Endereço</v-stepper-step>

        <v-stepper-content step="2">

            <v-form ref="form" v-model="valid" lazy-validation>

               <v-text-field v-model="cep" v-mask="'#####-###'" type="text" name="input"
                                    label="CEP">
                                </v-text-field>                     

                                <v-text-field v-model="address"  type="text" name="input"
                                    label="Endereço">
                                </v-text-field>

                                <v-text-field v-model="address2" type="text" name="input"
                                    label="Complemento" hint="Apenas se houver (apto, bloco, quadra)">
                                </v-text-field>


                <v-btn :disabled="!valid" color="success" class="mr-4" @click="e6 = 3">
                    Confirmar
                </v-btn>

                <v-btn color="warning" @click="e6 = 1">
                    Voltar
                </v-btn>
            </v-form>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">Usuário</v-stepper-step>
    
        <v-stepper-content step="3">

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field class="my-n0" v-model="name" label="Login" hint="Use para entrar no app" required>
                </v-text-field>

                <v-text-field class="my-n0" v-model="name" label="Nome Completo" required>
                </v-text-field>

                <v-text-field v-model="number"  type="text" name="input" hint="Apenas números"
                                    label="Telefone">
                                </v-text-field>

                                <v-text-field v-model="email"  type="email" name="input"
                                    label="E-mail">
                                </v-text-field>

                                <v-text-field v-model="email2"  type="email" name="input"
                                    label="Confirmar E-mail">
                                </v-text-field>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="e6 = 4">
                    Confirmar
                </v-btn>

                 <v-btn color="warning" @click="e6 = 2">
                    Voltar
                </v-btn>
            </v-form>
        </v-stepper-content>

        <v-stepper-step step="4">Imagem <small> Opcional </small></v-stepper-step>
        <v-stepper-content step="4">

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-file-input

                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Imagem da Empresa"
                    prepend-icon="mdi-camera"
                    capture

                ></v-file-input>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="e6 = 5">
                    Confirmar
                </v-btn>

                <v-btn color="warning" @click="resetValidation">
                    Voltar
                </v-btn>
            </v-form>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
    export default {
        name: 'FormRegister',
        data: () => ({

            valid: true,
            mei: '',
            social: '',
            cnpj: '',
            name: '',
            checkbox: false,
            cep: '',
            address: '',
            address2: '',
            e6: 1,
            number: '',
            email: '',
            email2: ''

        }),

        methods: {

            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>