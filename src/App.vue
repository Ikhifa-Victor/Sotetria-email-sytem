<script setup>
import { RouterLink, RouterView } from "vue-router";
import MenuBar from "./components/Home/MenuBar.vue";
</script>

<template>
  <MenuBar />
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {
    MenuBar,
  },
};
</script>

<style scoped></style>
