<template>
  <div class="container mt-5">
    <h1 class="title">Choose a template for your broadcast</h1>

    <ChoosePage />
  </div>
</template>

<script>
import ChooseTemplates from "../components/Sequence/ChooseTemplates.vue";
import ChoosePage from "../components/Sequence/ChooseTemplates.vue";

export default {
  name: "SecondSequence",
  components: {
    ChooseTemplates,
    ChoosePage,
  },
};
</script>

<style scoped>
.title {
  font-family: "Roboto";
  font-size: 20px;
}
</style>
