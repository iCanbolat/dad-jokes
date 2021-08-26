<template>
<div class="mt-5">
    <RandomJoke v-on:random-joke="getJoke"/><br><hr>
    <h4 class="mt-5 mb-3">{{ joke.joke }}</h4>
    <small>Joke ID: {{ joke.id }}</small>
</div>
  
</template>

<script>
import RandomJoke from '/components/RandomJoke.vue'
import axios from 'axios'
export default {
  head(){
        return{
            title: 'Welcome to Dad Jokes',
            meta: [
                {
                    hid: 'description',
                    name:'description',
                    content:'Bunch of Dad Jokes'
                }
            ]
        }
    },
    layout: 'normal',
    data() {
        return {
            joke : ''
        }
    },
    components:{
        RandomJoke
    },
    methods: {
        async getJoke(){
            const config = {
            headers:{
                'Accept': 'application/json'
            }
        }
        try{
        const res =  await axios.get("https://icanhazdadjoke.com/",config);
        this.joke = res.data;
        }catch(err){
            console.log(err)
        }
        }
    },
}
</script>
