export default {

    methods: {

        enableLoading() {

            this.$store.dispatch('changeLoading', true)

        },

        disableLoading() {

            this.$store.dispatch('changeLoading', false)

        },

    }
}
