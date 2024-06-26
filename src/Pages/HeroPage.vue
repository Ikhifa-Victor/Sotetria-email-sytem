<template>
  <div class="hero-page">
    <h1>Broadcast</h1>
    <div class="content">
      <div class="left">
        <button class="action-button" @click="showResults('All broadcasts')">
          <i class="bx bx-volume-full"></i> All broadcasts
        </button>
        <button class="action-button" @click="showResults('Draft')">
          <i class="bx bx-file-blank"></i> Drafts
        </button>
        <button class="action-button" @click="showResults('Processing')">
          <i class="bx bx-loader-circle"></i> Processing
        </button>
        <button class="action-button" @click="showResults('Qeued')">
          <i class="bx bxs-hourglass-bottom"></i> Qeued
        </button>
        <button class="action-button" @click="showResults('Published')">
          <i class="bx bx-check-circle"></i> Published
        </button>
      </div>
      <div class="right">
        <input
          style="outline: none"
          type="text"
          class="search-bar py-1 px-1"
          placeholder="search broadcasts"
        />
        <button
          class="new-broadcast-button ms-3"
          style="
            background: #db1839;
            color: aliceblue;
            border: none;
            border-radius: 5px;
            padding: 7px 15px;
          "
        >
          <i class="bx bx-plus"></i>New broadcast
        </button>
      </div>
    </div>
  </div>

  <!-- results -->
  <div>
    <ActionResults v-if="showActionResults" />
  </div>
</template>

<script>
import ActionResults from "../components/FirstBroadcastButtons/ActionResults.vue";
export default {
  name: "HeroPage",
  components: {
    ActionResults,
  },
  data() {
    return {
      showActionResults: false,
    };
  },
  methods: {
    showResults(buttonName) {
      console.log(`${buttonName} clicked`);
      this.showActionResults = true;
    },
  },
};
</script>

<style scoped>
.hero-page {
  padding: 0px 8%;
  margin-top: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.action-button {
  border: none;
  background: transparent;
  margin-right: 10px;
}
</style>
