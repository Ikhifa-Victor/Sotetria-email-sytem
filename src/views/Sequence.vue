<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="sequence-data container mt-5 shadow py-3 py-4">
    <SortBox />
    <SavedSequence />
  </div>
</template>

<script>
import SortBox from "../components/Sequence/SortBox.vue";
import SavedSequence from "../components/Sequence/SavedSequence.vue";

export default {
  name: "Sequence",
  components: {
    SortBox,
    SavedSequence,
  },
};
</script>

<style scoped>
.seq {
  background: #f0eeee;
}

.nav-link {
  font-weight: 400;
  margin-right: 20px;
  color: antiquewhite;
}
.nav-link:hover {
  color: #db1839;
}

.login-button {
  justify-items: center;
  border: none;
  color: beige;
  border-radius: 5px;
  background: transparent;
}

.sequence-data {
  background: #dee6e6;
}
</style>
