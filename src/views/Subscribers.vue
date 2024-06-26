<template>
  <div class="container mt-5 shadow">
    <!-- First Section: 100% width -->
    <div class="row">
      <div class="col-12 section-1">
        <LifeTimeTotals />
      </div>
    </div>

    <!-- Second Section:  -->
    <div class="row justify-content-center">
      <div class="col-8 col-md-7 section-2">
        <OurSubcribers />
      </div>

      <!-- Third Section:  -->

      <div class="col-8 col-md-3 section-3">
        <AddSubscribers />
      </div>
    </div>
  </div>
</template>

<script>
import LifeTimeTotals from "../components/Subscribers/LifeTimeTotals.vue";
import OurSubcribers from "../components/Subscribers/OurSubcribers.vue";
import AddSubscribers from "../components/Subscribers/AddSubscribers.vue";

export default {
  name: "Subscribers",
  components: {
    LifeTimeTotals,
    OurSubcribers,
    AddSubscribers,
  },
};
</script>

<style scoped>
.section-1 {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
}

.section-2 {
  background-color: #ebedf0;
  width: 60%;
  border: 1px solid #dee2e6;
}

.section-3 {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  width: 40%;
}
</style>
