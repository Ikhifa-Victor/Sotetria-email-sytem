<template>
  <div class="container-fluid">
    <div class="row">
      <!-- First Div -->
      <div class="col-12">
        <div
          class="d-flex p-2 justify-content-between align-items-center email-box"
        >
          <div class="tittle"><h2>Confirmed Subscribers</h2></div>
          <form>
            <div class="d-flex">
              <select
                class="form-select"
                id="exampleSelect"
                aria-label="Example select"
              >
                <option selected>Bulk Actions</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <!-- Second Div -->
      <div class="col-12 mb-4">
        <div class="confrimed-subscribers p-1">
          <p>Emails</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurSubcribers",
};
</script>

<style scoped>
.email-box {
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.tittle h2 {
  font-size: 25px;
  font-family: "Open sans";
}

.confrimed-subscribers {
  font-size: 20px;
  background: #fff;
}
</style>
