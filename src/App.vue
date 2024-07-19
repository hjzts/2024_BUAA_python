<template>
  <v-app>
    <Login/>
    <RouterView />
  </v-app>
</template>

<script lang="ts" setup name="App">
import Login from './views/Auth/Login.vue'
</script>

<style scoped></style>
