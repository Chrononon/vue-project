<template>
    <div>
       <CardList :data="archives"></CardList>
    </div>
</template>

<script>
import axios from 'axios'
 import CardList from '../components/CardList.vue'
export default {
   name: 'AchivePage',
   components: {
       CardList
   },
   async created(){
      const { data } = await axios.get('http://localhost:3000/archives')
      this.archives = data
      console.log("data")
   }
   ,data(){
       return{
           archives:[]
       }
   }
}
</script>

