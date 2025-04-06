<script setup>
import api from "@/Api";
import { onMounted, ref } from "vue";

const users = ref([]);
const roles = ref([]);
const search = ref([]);
const pagination = ref([]);
const imgUrl = ref([]);

onMounted(() => {
  getUsers();
});

const getUsers = () => {
  api
    .get("/users")
    .then((result) => {
      console.clear();
      users.value = result.data;
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <h1 class="text-center mt-5">All Users Of MERP</h1>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Photo</th>
        <th>User</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ user.id }}</td>
        <td><img src={{ user.image }} alt=""></td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
