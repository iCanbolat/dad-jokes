<template>
  <div class="pt-5"> 
      <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
      <h4 class="py-5">{{joke}}</h4>
      <hr>
      <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            joke:{}
        }
    },
    async created() {
        const config = {
            headers:{
                'Accept': 'application/json'
            }
        }
        try{
        const res =  await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`,config);
        this.joke  = res.data.joke;
        }catch(err){
            console.log(err)
        }        
    },
    head(){
        return{
            title: this.joke,
            meta: [
                {
                    hid: 'description',
                    name:'description',
                    content:'Bunch of Dad Jokes'
                }
            ]
        }
    },
}
</script>

<style>

</style>