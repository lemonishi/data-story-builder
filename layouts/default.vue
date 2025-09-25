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
  padding: 4.5rem 0.5rem 0;
}
</style>
