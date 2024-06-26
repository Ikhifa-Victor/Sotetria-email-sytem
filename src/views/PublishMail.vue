<template>
  <div class="publish-mail container mt-5">
    <MailMenu />
    <div class="large-div shadow mt-5 p-4 mx-auto">
      <h2>Email Drafts</h2>
      <div class="draft bg-light border mb-2">Draft 1</div>
      <div class="draft bg-light border mb-2">Draft 2</div>
      <div class="draft bg-light border mb-2">Draft 3</div>
    </div>
    <div class="send-button-container text-center mt-4">
      <button class="send-button" @click="showModal">Send</button>
    </div>
    <SendModal v-if="isModalVisible" @close="hideModal" />
  </div>
</template>

<script>
import SendModal from "../components/SendModal.vue";
import MailMenu from "../components/BeoadcastThree/MailMenu.vue";

export default {
  name: "PublishMail",
  components: {
    SendModal,
    MailMenu,
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
.publish-mail {
  position: relative;
}

.large-div {
  max-width: 800px;
  background: #fff;
}

.draft {
  padding: 10px;
}

.send-button-container {
  margin-top: 20px;
}

.send-button {
  background: #0f51a8;
  color: #fff;
  font-family: "Nunito";
  border-radius: 5px;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  font-weight: 600;
  width: 20%;
  padding: 15px 0;
}
</style>
