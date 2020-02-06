<template>
<div>
    <v-stepper v-if="!load" v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            Dados Gerais
        </v-stepper-step>

        <v-stepper-content step="1">

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field class="my-n0" v-model="name" label="Nome Fantasia" required>
                </v-text-field>

                <v-text-field v-show="!checkbox" class="my-n2" v-model="social" label="Razão Social" required>
                </v-text-field>

                <v-text-field v-show="!checkbox" class="my-n2" v-model="cnpj" v-mask="'##.###.###/####-##'" label="CNPJ"
                    required>
                </v-text-field>

                <v-text-field v-show="checkbox" class="my-n2" v-model="cpf" v-mask="'###.###.###-##'" label="CPF"
                    required>
                </v-text-field>

                <v-checkbox v-model="simples" label="MEI, Microempresa ou EPP" required></v-checkbox>

                <v-checkbox class="my-n4 py-0" v-model="checkbox" label="Sou Pessoa Física" required></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="e6 = 2">
                    Confirmar
                </v-btn>
            </v-form>

        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Endereço</v-stepper-step>

        <v-stepper-content step="2">

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field v-model="cep" v-mask="'#####-###'" type="text" name="input" label="CEP">
                </v-text-field>

                <v-text-field v-model="address" type="text" name="input" label="Endereço">
                </v-text-field>

                <v-text-field v-model="address2" type="text" name="input" label="Complemento"
                    hint="Apenas se houver (apto, bloco, quadra)">
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


                <v-text-field class="my-n0" v-model="nameContact" label="Nome Completo" required>
                </v-text-field>

                <v-text-field v-model="number" type="text" name="input" hint="Apenas números" label="Telefone">
                </v-text-field>

                <v-text-field v-model="email" type="email" name="input"
                     label="E-mail">
                </v-text-field>

                <v-text-field v-model="email2" type="email" name="input" label="Confirmar E-mail" hint="Será o seu LOGIN no sistema">                 
                </v-text-field>

                   <v-text-field v-model="password" type="password" name="input" label="Senha">
                </v-text-field>

                <v-text-field v-model="password2" type="password" name="input" label="Confirmar Senha">
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

                <v-file-input accept="image/png, image/jpeg, image/bmp" v-model="image" placeholder="Imagem da Empresa"
                    prepend-icon="mdi-camera" capture></v-file-input>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitForm">
                    Confirmar
                </v-btn>

                <v-btn color="warning" @click="e6 = 3">
                    Voltar
                </v-btn>
            </v-form>
        </v-stepper-content>
    </v-stepper>

    <v-container v-if="load && !final" style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
          Finalizando o Registro =)
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="final" style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
          Finalizado! Faça o login na página anterior!
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
    >
      {{ snackText }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</div>

</template>

<script>
/* eslint-disable no-console */

export default {
    name: 'FormRegister',
    data: () => ({

        valid: true,
        valid1: true,
        valid2: true,
        valid3: true,
        simples: false,
        social: '',
        cnpj: '',
        name: '',
        checkbox: false,
        cep: '',
        address: '',
        address2: '',
        e6: 1,
        number: '',
        nameContact: '',
        username: '',
        email: '',
        email2: '',
        cpf: '',
        image: null,
        password: '',
        password2: '',
        load: false,
        snackbar: false,
        snackText: '',
        final: false

    }),

    computed: {
        
        
    },

    methods: {

        submitForm() {

            this.load = true

            const formData = new FormData()
            formData.append('name', this.name)
            formData.append('cep', this.cep)
            formData.append('address', this.address)
            formData.append('address2', this.address2)
            formData.append('nameContact', this.nameContact)
            formData.append('username', this.email2)
            formData.append('number', this.number)
            formData.append('file', this.image)
            formData.append('password', this.password2)
            formData.append('type', 'seller')

            this.checkbox ? formData.append('cpf', this.cpf) : formData.append('cnpj', this.cnpj)
            if (!this.checkbox) formData.append('social', this.social)
            if (this.simples) formData.append('simples', this.simples)

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            this.axios
                .post('http://localhost:3000/api/register/company', formData, config)
                .then((response) => {
                    console.log(response)
                    this.final = true
                    this.snackText = 'Registrado com Sucesso!'
                    this.snackbar = true

                })
                .catch(e => {
                    console.log(e)
                    this.snackText = 'Falha no Registro! Tente novamente mais tarde.'
                    this.snackbar = true
                })


        }


    },
}
</script>