<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

let month = ref("Ramadan");
let show = ref(true);
let products = [
    {
        id:1,
        name:"Apple",
    },
    {
        id:2,
        name:"Banana",
    },
    {
        id:3,
        name:"PineApple",
    },{
        id:4,
        name:"Avocado",
    },
]

let journals=reactive([]);

onMounted(()=>{
    console.log("This is onMount Hook");
    axios.get('http://localhost/LaravelTeamProject/public/api/journal')
    .then(res=>{
        console.log(res.data);

        journals = res.data;
        
    }).catch(error=>{
        console.log(error);        
    })
    
});
</script>


<template>
  <div>
    <!-- {{ show }} -->
    <h1 v-if="show">This is {{ month }}</h1>
    <button @click="show = !show" class="btn btn">Show/Hide</button>
  </div>

  <div>
    <h2>Product List</h2>
    <ul>
        <li v-for="product in products" key="product.id">{{ product.name }}</li>
    </ul>
  </div>

  <div>
    <ul>
        <li v-for="journal in journals">{{ journal.description }}</li>
    </ul>
  </div>
</template>

<style scoped>
*{
    color: white;
}

button{
    color: rgb(11, 116, 102);
    padding: 10px 15px;
}
</style>
