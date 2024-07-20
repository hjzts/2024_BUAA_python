<template>
  <test></test>
  <div class="navigate">
  </div>
  <div class="main-content">
    <!-- <RouterView></RouterView> -->
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import test from './views/Admin/test.vue'
</script>

<style scoped>
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
</style>
