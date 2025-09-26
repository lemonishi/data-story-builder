<script setup>
import { ref, watch } from "vue";

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>

<template>
  <v-app-bar
    class="container"
    :elevation="0"
  >
    <template v-slot:prepend
      ><v-app-bar-title @click="$router.push('/')"
        >Story Maker</v-app-bar-title
      ></template
    >

    <template v-slot:append>
      <v-btn
        icon="mdi-plus"
        @click="$router.push('/posts/new')"
        class="button"
      ></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
.button {
  background-color: #88e788;
  border: 1px solid grey;
}
</style>
