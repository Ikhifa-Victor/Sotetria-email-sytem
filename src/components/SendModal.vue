<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <div class="box p-4 text-center">
        <div class="header text-center">
          <h3>Review broadcast</h3>
          <p>
            Your broadcast is ready to be published, Review the details below
          </p>
        </div>
        <!-- Big div  -->
        <div class="big-div mb-3 border">
          Ensure all details are correct. Ensure all details are correct. Ensure
          all details are correct.
        </div>
        <!-- Small div  -->
        <div class="small-div mb-3 border">
          <p>publish now</p>
        </div>
        <button class="send-broadcast-button" @click="sendBroadcast">
          Send Broadcast
        </button>
        <button class="close-button" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendModal",
  methods: {
    sendBroadcast() {
      // Logic to send the broadcast
      alert("Broadcast sent!");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.send-broadcast-button,
.close-button {
  background: #0a4fa8;
  color: #fff;
  font-family: "Nunito";
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  font-size: 18px;
}

.close-button {
  background: #be0505;
}

.header h3 {
  font-family: "Nunito";
  font-size: 18px;
  font-weight: 700;
}
.header p {
  font-family: "Nunito";
  font-size: 13px;
  font-weight: 500;
}
</style>
