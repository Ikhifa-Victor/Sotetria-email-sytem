<template>
  <div class="action-results">
    <h3>Action Results</h3>
    <div class="content">
      <div class="left">
        <button class="result-button">Result 1</button>
        <button class="result-button">Result 2</button>
        <button class="result-button">Result 3</button>
        <button class="result-button">Result 4</button>
        <button class="result-button">Result 5</button>
        <button class="result-button">Result 6</button>
      </div>
      <div class="right">
        <button class="result-button">views</button>
        <button class="result-button">
          <i class="bx bx-dots-horizontal-rounded"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionResults",
};
</script>

<style scoped>
.action-results {
  padding: 5px 8%;
  margin-top: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.content {
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
}

.right {
  display: flex;
  gap: 10px;
}

.result-button {
  padding: 3px;
  background-color: #17a2b8;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}
</style>
