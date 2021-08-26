<template>
  <div>
      <SearchJokes v-on:search-text="searchText" />
     <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import axios from "axios";
import Joke from '/components/Joke';
import SearchJokes from '/components/SearchJokes';

export default {
    data() {
        return {
            jokes:[]
        }
    },
    components:{
        Joke,
        SearchJokes 
        },
    async created() {
        const config = {
            headers:{
                'Accept': 'application/json'
            }
        }
        try{
        const res =  await axios.get("https://icanhazdadjoke.com/search",config);
        this.jokes = res.data.results;
        }catch(err){
            console.log(err)
        } 
        
    },
    methods: {
        async searchText(text){
            const config = {
            headers:{
                'Accept': 'application/json'
            }
        }
        try{
        const res =  await axios.get(`https://icanhazdadjoke.com/search?term=${text}`,config);
        this.jokes = res.data.results;
        }catch(err){
            console.log(err)
        }
        }
    },
    head(){
        return{
            title: 'Jokes',
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
}
</script>

<style>

</style>