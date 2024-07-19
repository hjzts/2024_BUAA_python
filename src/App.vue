<template>
  <v-app>
    <!-- <Login/> -->
    <test/>
    <RouterView />
  </v-app>
</template>

<script lang="ts" setup name="App">
import Login from './views/Auth/Login.vue'
import test from './views/Auth/test.vue'
</script>

<style scoped></style>
