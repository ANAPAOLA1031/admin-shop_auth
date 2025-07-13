<template>
  <!-- Header Navbar -->
  <TopMenu />

  <!-- RouterView   -->
  <RouterView />

  <!-- Footer -->
  <CustomFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>

<style scoped></style>
