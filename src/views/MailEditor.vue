<template>
  <div class="template-editor container mt-5">
    <MailMenu />
    <div class="row">
      <div class="col-6 editor-container mt-5 shadow p-4 mx-auto">
        <h2>Template Editor</h2>
        <!-- Editor content goes here -->
      </div>
      <div class="col-6 drafts-container shadow p-2 mt-4 me-3 text-center">
        <!--  saved drafts goes ere -->
        <h4>Saved Drafts</h4>
        <div class="content-draft bg-light border mb-2">Draft 1</div>
        <div class="content-draft bg-light border">Draft 2</div>

        <!-- Add button -->
        <div class="mt-3">
          <button class="mail-btn">Add Mail</button>
        </div>
      </div>
    </div>
    <div
      class="container-fluid bg-primary p-2 position-fixed bottom-0 end-0 m-3"
    >
      <button class="">Continue <i class="bx bx-right-arrow-alt"></i></button>
    </div>
  </div>
</template>

<script>
import MailMenu from "../components/BeoadcastThree/MailMenu.vue";

export default {
  name: "TemplateEditor",
  components: {
    MailMenu,
  },
};
</script>

<style scoped>
.template-editor {
  position: relative;
}

.editor-container {
  max-width: 800px;
  background: #fff;
}

.drafts-container {
  width: 300px;
  background: #fff;
}
.mail-btn {
  background: #0f51a8;
  color: aliceblue;
  font-family: "Nunito";
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 90%;
  padding: 10px 0px;
}
.content-draft {
  cursor: pointer;
  padding: 10px 0px;
}
</style>
