<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img src="./assets/ABN.png" height="100" class="d-inline-block align-top" style="margin-left: 10px;" alt="Bank Icon">
      </a>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style scoped>
.navbar-nav .nav-link .navbar-brand {
  margin: 20px;
  color: #fff;
}
</style>
