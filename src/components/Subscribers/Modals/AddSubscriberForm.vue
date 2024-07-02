<template>
  <form @submit.prevent="submitForm">
    <div v-if="loading">Please wait...</div>
    <div v-if="error">{{ this.error }}</div>
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
    <button type="submit" class="btn btn-primary">
      {{ this.loading ? "loading" : "Submit" }}
    </button>
    <button type="button" class="btn btn-secondary" @click="$emit('cancel')">
      Cancel
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddSubscriberForm",
  data() {
    return {
      loading: false,
      error: null,
      data: null,
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();
      this.loading = true;
      const { name, email } = this.formData;
      try {
        const res = await axios(
          "http://localhost:8084/api/v1/user/subscriber/add-one?userId=6671205d48919023aba11ac4",
          {
            method: "POST",
            data: {
              first_name: name,
              email,
            },
          }
        );

        if (res?.status === 200) {
          const { data } = res;
          if (data?.statusCode === 200) {
            this.$emit("close");
            this.error = null;
            this.formData = { name: "", email: "" };
          }
        }
      } catch (error) {
        this.error =
          error?.response?.data?.message ??
          "Something went wrong, please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the AddSubscriberForm component here */
</style>
