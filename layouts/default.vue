<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <v-app>
    <Navbar />
    <v-main class="main">
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  padding: 5.5rem 1rem 0;
}
</style>
