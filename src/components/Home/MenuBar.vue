<template>
  <nav
    class="container p-3 navbar navbar-expand-lg navbar-light bg-light shadow"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link class="nav-link" :to="link.to">{{
              link.name
            }}</router-link>
          </li>
        </ul>
        <div><i class="bx bx-cog"></i></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "MenuBar",
  data() {
    return {
      links: [
        { name: "Subscribers", to: "/subscribers" },
        { name: "Broadcast", to: "/broadcast" },
        { name: "Sequence", to: "/sequence" },
        { name: "Templates", to: "/template" },
        { name: "Forms", to: "/form" },
      ],
    };
  },
};
</script>

<style>
.nav-link {
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  font-family: "Roboto", Nunito, Open Sans, sans-serif;
  font-weight: 600;
  margin-right: 15px;
  font-size: 17px;
  border-radius: 7px;
}

.nav-link:hover {
  background-color: #1a73e8;
  color: #fff;
}

.bx-cog {
  font-size: 30px;
  font-weight: 500;
}

.bx-cog:hover {
  color: #1053ac;
}
</style>
