<template>
  <div class="row">
      <div class="col-12">
          <h4 class="pb-1 text-primary">Welcome to Dad Joke Universe</h4>
          <h5 class="pb-3 text-primary">You can generate random joke</h5>
          <form @submit.prevent="onSubmit">
              <button type="submit" class="btn btn-outline-primary mb-2">Get Joke</button><br>
              <small class="text-danger">Built by Canbolat</small>
          </form>
      </div>
  </div>
</template>

<script>

export default {    
    data() {
        return {
            
        }
    },
    methods: {
        onSubmit(){
            this.$emit('random-joke');
        }
    },
    name: 'RandomJoke',
}
</script>

<style>

</style>