<template>
    <v-content>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card>
                        <v-card-text>
                            <h3 class="subtitle-1"> Documentação</h3>
                            <v-divider horizontal />
                            <v-form ref="formDocs" lazy-validation>

                                <v-file-input v-model="docs" multiple show-size counter small-chips label="Documentos">
                                </v-file-input>

                                <v-row dense align="center" justify="center">
                                    <v-col align="center">
                                        <v-btn @click="submitDocs" dense color="success">
                                            Enviar
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
/* eslint-disable no-console */

export default {
    name: 'FormDocs',
    data: () => ({
        docs: null,
        config: {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'multipart/form-data'
      }
    },

    }),
    methods: {
        submitDocs() {
           const form = new FormData()

            this.docs.forEach((element) => {
                
                form.append('docs', element)
            })

           this.axios.post('/register/company/docs', form, this.config)
                .then((response) => {
                    console.log(response)
                    
 

                })
                .catch(e => {
                    console.log(e)
  
                })

            this.docs = null

        }
    },

}
</script>

<style>

</style>