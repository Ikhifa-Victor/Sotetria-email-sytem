<template>
  <div class="container-fluid">
    <div class="row g-0">
      <!-- First Column -->
      <div class="col-12 col-md-4 d-flex">
        <div
          class="col-content no-b align-items-center justify-content-between d-flex"
        >
          <div><p class="title">LifeTime Totals</p></div>
          <div class="content-wrapper d-flex flex-column">
            <p class="Numbers">13,66</p>
            <p class="description">TOTAL SUBSCRIBERS</p>
          </div>
        </div>
      </div>

      <!-- Second Column -->
      <div class="col-12 col-md-4 d-flex">
        <div
          class="col-content align-items-center justify-content-between d-flex"
        >
          <div><p class="title">LAST 90 DAYS</p></div>
          <div class="content-wrapper d-flex flex-column">
            <p class="Numbers">13,66</p>
            <p class="description">AVG OPEN RATE</p>
          </div>
          <!-- second -->
          <div class="content-wrapper d-flex flex-column">
            <p class="Numbers">0.35%</p>
            <p class="description">AVG CLICK RATE</p>
          </div>
          <!-- third -->
          <div class="content-wrapper d-flex flex-column">
            <p class="Numbers">778K</p>
            <p class="description">EMAIL SENT</p>
          </div>
        </div>
      </div>

      <!-- Third Column -->
      <div class="col-12 col-md-4 d-flex flex-column">
        <div
          class="col-content no-b align-items-center justify-content-between d-flex"
        >
          <div><p class="title">TODAY</p></div>
          <div class="content-wrapper d-flex flex-column">
            <p class="Numbers">0</p>
            <p class="description">NEW SUBSCRIBERS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifeTimeTotals",
};
</script>

<style scoped>
.col-content {
  background-color: #f8f9fa;
  padding: 20px;
  border: 1px solid #dee2e6;
  width: 100%;
  text-align: center;
}

.no-b {
  border: none;
}

.content-wrapper p {
  margin: 5px 0;
}

.title {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
}
.Numbers {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
}
.description {
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
}
</style>
