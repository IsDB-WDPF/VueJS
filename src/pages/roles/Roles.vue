<script setup>
import api from "@/Api";
import { onMounted, reactive, ref } from "vue";

console.clear();

let merpRoles = reactive([]);
onMounted(() => {
  fetchRoles();
});



const fetchRoles = ()=>{
  api.get("/roles")
    .then((result) => {
      merpRoles = result.data;
      console.clear()
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <table class="bordered rounded table table-striped table-dark w-50 mx-auto">
    <thead>
      <tr>
        <th>ID</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="item in merpRoles">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>
      <RouterLink :to="`/roles/edit/${item.id}`">Edit</RouterLink>
    </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
