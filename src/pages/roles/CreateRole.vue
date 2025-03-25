<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const formData = reactive({
    name:"",
    description:"",
})

const formSubmit=()=>{
    axios.post()
    .then((result) => {
        console.clear();
        console.log(result.data);
        
    }).catch((err) => {
        console.log(err);
    });
}
</script>
<template>
  <div class="container">
    <h1 class="text-center text-primary">Create New Role</h1>
    <form action="" @submit.prevent="formSubmit" class="card p-5 sm-w-75 md-w-50 lg-w-25">
      <!-- <div class="row"> -->
        <input v-model="formData.name"
          type="text"
          class="form-control my-1 text-primary"
          placeholder="Insert Role Name"
        />
        <input v-model="formData.description"
          type="text"
          class="form-control my-1 text-primary"
          placeholder="Provide Role Description"
        />
        <button class="btn btn-primary mt-3 py-3">Add Role</button>
      <!-- </div> -->
      <h4 class="text-center text-secondary">{{ formData.name }}</h4>
      <h4 class="text-center text-secondary">{{ formData.description }}</h4>
    </form>

  </div>
</template>

<style></style>
