<script setup>
import { RouterView } from 'vue-router';
import Footer from './layout/Footer.vue';
import Sidebar from './layout/Sidebar.vue';
import TopBar from './layout/TopBar.vue';
import Dashboard from './pages/Dashboard.vue';

$(function () {
  $("#year").text(new Date().getFullYear());
});
</script>

<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->

      <Sidebar/>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <TopBar/>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <!-- <RouterView/> -->
          <router-view/>
          <!-- / Content -->

          <!-- Footer -->
          <Footer/>
          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
</template>

<style scoped>
</style>
