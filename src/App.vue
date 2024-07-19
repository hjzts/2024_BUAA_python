<template>
  <h2>这是个标题</h2>
  <v-app>
  <test_navigation />
    <RouterView />
  </v-app>
</template>

<script setup lang="ts" name="App">
import test_navigation from './components/test_navigation.vue';

</script>

<style scoped></style>
