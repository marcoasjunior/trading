<template>
    <v-container class="my-n5" fluid>
        
        <v-row align="center" justify="center">
            <v-col cols="10" md="4">
                <v-card class="elevation-5">
                    <v-toolbar tile color="deep-purple accent-4"
      dark flat>
                      <v-toolbar-title>Precisa se cadastrar?</v-toolbar-title> 
                    </v-toolbar>
                    <v-img class="font-weight-bold" height="200px"
                        src="https://res.cloudinary.com/dxblalpv2/image/upload/v1576038456/bruce-mars-FWVMhUa_wbY-unsplash_uduyin.jpg">


                    </v-img>
                    <v-card-actions>
                        <v-col align="center" justify="center">
                        <v-btn block class='white--text' color="#9C27B0" @click="goRegister">Cadastre-se </v-btn>
                        </v-col>
                    </v-card-actions>



                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CardRegisterAd',
    methods: {
        goRegister() {
            this.$router.push({ path: '/Register' })
        }
    },
}
</script>

<style>
.waw {
    z-index: 99;
}
</style>