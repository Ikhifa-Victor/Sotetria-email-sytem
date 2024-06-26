<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="provider" class="form-label">Provider Name</label>
      <input
        type="text"
        class="form-control"
        id="provider"
        v-model="formData.provider"
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
  name: "ImportFromProviderForm",
  data() {
    return {
      formData: {
        provider: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.formData);
      this.formData = { provider: "" };
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the ImportFromProviderForm component here */
</style>
