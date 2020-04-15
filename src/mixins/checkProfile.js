const checkProfile = {

  methods: {
    
    async checkProfile() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }

      let payload

      await this.axios
        .get('/profile', config)
        .then((response) => {

          payload = response

        })
        .catch(() => {

          this.$router.push({
            path: '/'

          })
        })

      this.$store.dispatch('changeCompanyType', payload.data.type)
    }
  },

}

export default checkProfile