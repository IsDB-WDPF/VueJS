<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

console.clear();

let trialBalance = reactive([]);
onMounted(() => {
  axios
    .get("https://helal.devdelwar.com/laravel/public/api/trialBalance")
    .then((result) => {
      trialBalance = result.data;
      console.log(result.data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <table class="bordered rounded table table-striped table-dark">
    <thead>
      <tr>
        <th>Description</th>
        <th>Debit</th>
        <th>Credit</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="item in trialBalance[0]">
    <td>{{item.name}}</td>
    <td>{{item.total_debit}}</td>
    <td>{{item.total_credit}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
