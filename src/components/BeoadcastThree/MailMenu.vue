<template>
  <div class="new-broadcast shadow px-4 py-2">
    <div class="left align-items-center">
      <div class="d-flex align-items-center">
        <i class="bx bx-left-arrow-alt"></i>

        <button class="title">New Broadcast</button>
      </div>
    </div>
    <div class="right">
      <form class="mt-2">
        <div class="d-flex">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="status"
              id="draft"
              value="draft"
            />
            <label class="form-check-label" for="draft"> Draft </label>
            <i class="bx bx-chevron-right" @click="addMail"></i>
          </div>
          <div class="form-check ms-4 align-items-center">
            <input
              class="form-check-input"
              type="radio"
              name="status"
              id="publish"
              value="publish"
            />
            <label class="form-check-label" for="publish"> Publish </label>
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MailMenu",
  methods: {
    addMail() {
      this.$router.push({ name: "PublishMail" });
    },
  },
};
</script>

<style scoped>
.new-broadcast {
  display: flex;
  justify-content: space-between;
}
.action-button {
  border: none;
  background: transparent;
  margin-right: 10px;
}
.bx {
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;
}

.form-check-label {
  font-family: "Nunito";
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
}
.title {
  font-family: "Nunito";
  font-weight: 600;
  font-size: 18px;
  border: none;
  background: transparent;
  margin-left: 15px;
}
</style>
