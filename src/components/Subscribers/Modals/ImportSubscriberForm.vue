<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="file" class="form-label">Upload File</label>
      <input
        type="file"
        class="form-control"
        id="file"
        @change="handleFileUpload"
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
  name: "ImportSubscriberForm",
  data() {
    return {
      formData: {
        file: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.file = event.target.files[0];
    },
    submitForm() {
      this.$emit("submit", this.formData);
      this.formData = { file: null };
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the ImportSubscriberForm component here */
</style>
