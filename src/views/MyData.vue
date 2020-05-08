<template>
  <div>
      <Profile />
      <FormChangePassword />
      <FormChangeContact />
      <FormChangeAddress />
      <FormDocs />
  </div>
</template>

<script>
import Profile from '../components/Profile'    
import FormChangePassword from '../components/FormChangePassword'    
import FormChangeContact from '../components/FormChangeContact'    
import FormChangeAddress from '../components/FormChangeAddress'    
import FormDocs from '../components/FormDocs'    


export default {
  name: 'MyData',
    components: {
      Profile,
      FormChangePassword,
      FormChangeContact,
      FormChangeAddress,
      FormDocs
  }

}
</script>

<style>

</style>