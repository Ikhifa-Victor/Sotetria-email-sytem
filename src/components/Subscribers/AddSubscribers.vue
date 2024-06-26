<template>
  <div class="container-fluid">
    <div class="row">
      <!-- First Div -->
      <div class="col-12">
        <div
          class="d-flex justify-content-between align-items-center div-content"
        >
          <input
            type="text"
            class="text-here p-2"
            placeholder="search subscribers by email"
          />
          <button class="search-sub btn-primary py-1 px-2">Search</button>
        </div>
      </div>

      <!-- Second Div -->
      <div class="col-12">
        <div class="two-buttons justify-content-center text-center">
          <div>
            <button class="Add-btn mb-4" @click="showModal">
              Add Subscribers
            </button>
          </div>
          <div>
            <button class="manage-btn">Manage Subscribers Preferences</button>
          </div>
        </div>
      </div>

      <!-- Third Div -->
      <div class="col-12 mb-4">
        <div class="container-fluid">
          <p class="blank fluid">All Subscribers 13,666 SUBSCRIBERS</p>
          <div class="list">
            <h3 class="list-header">lists</h3>
            <button class="new-list-btn">+ Create New List</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <AddSubscriberModal v-if="isModalVisible" @close="hideModal" />
  </div>
</template>

<script>
import AddSubscriberModal from "../Subscribers/Modals/AddSubscriberModal.vue";

export default {
  name: "AddSubscribers",
  components: {
    AddSubscriberModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.div-content {
  background-color: #f8f9fa;
  padding: 10px;
  border: 1px solid #dee2e6;
  width: 100%;
}

.text-here {
  font-size: 15px;
  width: 55%;
  outline: none;
  border: 1px solid #dee2e6;
}

.search-sub {
  border: 1px solid #dee2e6;
  background: #fff;
  font-size: 15px;
}

.two-buttons {
  padding: 20px 0px;
}
.Add-btn {
  width: 80%;
  padding: 10px 0px;
  background: #1a73e8;
  color: #fff;
  font-family: "Roboto";
  font-weight: 600;
  border: none;
  border-radius: 5px;
}
.manage-btn {
  width: 80%;
  padding: 10px 0px;
  background: #fff;
  font-family: "Roboto";
  font-weight: 400;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.blank {
  background: #88befc;
  border: 1px solid #dee2e6;
  color: #2f3133;
  font-family: "Nunito";
  font-size: 15px;
  text-align: center;
}
.list-header {
  font-family: "Roboto";
  font-size: 25px;
}
.new-list-btn {
  font-family: "Nunito";
  border: none;
  font-weight: 600;
}
</style>
