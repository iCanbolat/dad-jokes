<template>
  <div class="container text-center">
      <AppHeader/>
      <hr>
      <Nuxt/>
  </div>
</template>

<script>
import AppHeader from '/components/AppHeader.vue';
export default {
    components:{
        AppHeader
    }
}
</script>

<style>

</style>