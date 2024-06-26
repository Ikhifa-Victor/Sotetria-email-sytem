<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="formData.name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="formData.email"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-secondary" @click="$emit('cancel')">
      Cancel
    </button>
  </form>
</template>

<script>
export default {
  name: "AddSubscriberForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.formData);
      this.formData = { name: "", email: "" };
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the AddSubscriberForm component here */
</style>
