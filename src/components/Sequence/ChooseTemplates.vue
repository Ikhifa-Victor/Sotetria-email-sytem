<template>
  <div class="content container p-2 shadow mt-3">
    <div class="row px-2">
      <div class="col-md-6 left p-2">
        <button class="btn-x">Your Templates</button>
        <div>
          <button class="btn-x mt-4">starting points</button>
        </div>
      </div>
      <!-- right -->
      <div class="right col-md-6">
        <p class="y-temps">Your Templates</p>
        <div class="p-2 mt-3">
          <div class="row">
            <div class="col-md-4">
              <div
                class="box p-3 text-dark text-center"
                @click="goToMailEditor"
              >
                Content 1
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="box p-3 text-dark text-center"
                @click="goToMailEditor"
              >
                Content 2
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="box p-3 text-dark text-center"
                @click="goToMailEditor"
              >
                Content 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseTemplates",
  methods: {
    goToMailEditor() {
      this.$router.push({ name: "MailEditor" });
    },
  },
};
</script>

<style scoped>
.hero-page {
  text-align: left;
  padding: 20px;
}

.left {
  width: 20%;
}

.right {
  width: 80%;
}

.box {
  border: 2px solid #dee2e6;
  cursor: pointer;
}
.btn-x {
  background: #fff;
  border: none;
  padding: 4px;
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
}
.btn-x:hover {
  background: #dee2e6;
}

.y-temps {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
}
</style>
