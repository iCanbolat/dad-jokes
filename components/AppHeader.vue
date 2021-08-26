<template>
  <div class="row mx-auto pt-5">
      <div class="col-6">
          <h2 class="text-primary">Dad Jokes</h2>
      </div>
      <div class="col-6 pt-3">
          <nuxt-link class="pr-5 text-end text-decoration-none h5 text-primary" style="font-size: 1.3rem" 
          to="/">Home</nuxt-link>
          <nuxt-link class="pr-5 text-end text-decoration-none h5 text-primary" style="font-size: 1.3rem" 
          to="/jokes">Jokes</nuxt-link>
          <nuxt-link class="pr-5 text-end text-decoration-none h5 text-primary" style="font-size: 1.3rem" 
          to="/about">About</nuxt-link>
      </div>
  </div>
  
</template>

<script>
export default {
    name:"AppHeader"
}
</script>
