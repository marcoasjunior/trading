<template>
  <div>
      <Profile />
      <FormChangePassword />
      <FormChangeContact />
      <FormChangeAddress />
  </div>
</template>

<script>
import Profile from '../components/Profile'    
import FormChangePassword from '../components/FormChangePassword'    
import FormChangeContact from '../components/FormChangeContact'    
import FormChangeAddress from '../components/FormChangeAddress'    


export default {
  name: 'MyData',
    components: {
      Profile,
      FormChangePassword,
      FormChangeContact,
      FormChangeAddress
  }

}
</script>

<style>

</style>