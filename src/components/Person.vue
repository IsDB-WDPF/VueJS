<script setup>
import { reactive } from 'vue';

let person = reactive({
  name: "Md. Helal Uddin",
  id: 1283511,
  address: "338/1, East Nakhalpara",
  course: "WDPF",
  batch: 61,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae facilis iure placeat. Voluptatem, aperiam error optio consequuntur esse, alias reprehenderit suscipit inventore accusantium voluptatum amet ea quisquam deserunt, harum itaque natus. Voluptas aliquid qui quod voluptatem nobis neque harum porro officia nostrum dignissimos magni quae vitae excepturi eligendi perspiciatis, culpa, similique sequi, mollitia deleniti at iure rem atque non! Neque pariatur adipisci consectetur porro. Natus nostrum recusandae ex, vel culpa velit nulla unde voluptatem, iste eaque, id voluptatum! Voluptatibus neque totam at minima, perspiciatis natus optio eveniet alias ad velit dicta inventore. Similique eius eveniet odit culpa voluptatibus omnis."
});

const changeName = ()=>{
    return person.name = "M.Helal";
}
</script>

<template>
  <p>Name: {{ person.name }}</p>
  <p>Course: {{ person.course }}</p>
  <p>Batch: {{ person.batch }}</p>
  <p>ID: {{ person.id }}</p>
  <hr>
  <p>{{ person.description }}</p>

  <!-- <button @click="changeName">Change Person</button> -->
</template>

<style scoped>
p{
    color: rgb(255, 255, 255);
    background: black;
    padding: 5px;
    text-align: center;
}

hr{
    margin-block: 20px;
    border-color: red;
    height: 5px;
}
</style>

<style>
body{
    background-color: black;
    margin: 0px;
    padding: 0px;
}
</style>
