<script setup>
import { ref } from "vue";
let counter = ref(0);

const increase=()=>{
    return counter.value++;
}
const decrease=()=>{
    return counter.value--;
}
</script>

<template>
  <h1>Counter {{ counter }}</h1>

  <div class="buttons">
    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button> -->
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  color: white;
  margin-top: 50px;
}

button {
  padding: 5px;
  width: 60px;
  height: 40px;
  margin-inline: 5px;
  text-align: center;
}

.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
