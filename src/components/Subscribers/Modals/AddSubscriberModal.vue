<template>
  <div class="modal fade show" style="display: block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Subscriber</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body text-center">
          <div class="d-flex justify-content-around mb-4">
            <div class="box" @click="showForm('add')">
              <i class="bi bi-person-plus"></i>
              <p>Add Subscriber</p>
            </div>
            <div class="box" @click="showForm('import')">
              <i class="bi bi-upload"></i>
              <p>Import Subscriber</p>
            </div>
            <div class="box" @click="showForm('importProvider')">
              <i class="bi bi-cloud-upload"></i>
              <p>Import from Provider</p>
            </div>
          </div>
          <div v-if="currentForm">
            <button
              type="button"
              class="btn-close mb-2"
              @click="currentForm = ''"
            ></button>
            <h2>{{ formTitle }}</h2>
            <component
              :is="currentFormComponent"
              @submit="submitForm"
              @cancel="cancelForm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddSubscriberForm from "../Modals/AddSubscriberForm.vue";
import ImportSubscriberForm from "../Modals/ImportSubscriberForm.vue";
import ImportFromProviderForm from "../Modals/ImportFromProviderForm.vue";

export default {
  name: "AddSubscriberModal",
  components: {
    AddSubscriberForm,
    ImportSubscriberForm,
    ImportFromProviderForm,
  },
  data() {
    return {
      currentForm: "",
      formTitle: "",
      formComponents: {
        add: "AddSubscriberForm",
        import: "ImportSubscriberForm",
        importProvider: "ImportFromProviderForm",
      },
    };
  },
  methods: {
    showForm(formType) {
      this.currentForm = formType;
      if (formType === "add") {
        this.formTitle = "Add Subscriber";
      } else if (formType === "import") {
        this.formTitle = "Import Subscriber";
      } else if (formType === "importProvider") {
        this.formTitle = "Import from Provider";
      }
    },
    cancelForm() {
      this.currentForm = "";
    },
    submitForm(formData) {
      console.log("Form Data:", formData);
      this.$emit("close");
    },
  },
  computed: {
    currentFormComponent() {
      return this.formComponents[this.currentForm];
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.box:hover {
  background-color: #f8f9fa;
}
</style>
