<template>
  <div class="container shadow align-items-center">
    <div class="sort-box align-items-center p-2">
      <div class="left">
        <h2>Sequences</h2>
      </div>

      <div class="right d-flex align-items-center">
        <div class="">
          <form class="ms-3">
            <select class="form-select" id="Select" aria-label=" select">
              <option selected>Alphabetical</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </form>
        </div>
        <div class="icon-box d-flex ms-3">
          <div class="icon 1"><i class="bx bx-server"></i></div>
          <div class="icon 2"><i class="bx bx-grid-alt"></i></div>
        </div>
        <div class="seq-btn ms-3">
          <button @click="goToSecondSequence" class="new-broadcast-button p-2">
            + New Sequences
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroPage",
  methods: {
    goToSecondSequence() {
      this.$router.push({ name: "SecondSequence" });
    },
  },
};
</script>

<style scoped>
.container {
  background: #fff;
}
.sort-box {
  display: flex;
  justify-content: space-between;
}
.action-button {
  border: none;
  background: transparent;
  margin-right: 10px;
}
.bx {
  font-size: 30px;
  align-items: center;
  /* margin-left: 6px;
  margin-top: 3px; */
  cursor: pointer;
}

.icon-box {
  border: 1px solid #dee2e6;
  align-content: center;
}

.new-broadcast-button {
  background: #1a73e8;
  color: aliceblue;
  font-family: "Nunito";
  border: none;
  border-radius: 5px;
  font-weight: 500;
}
</style>
