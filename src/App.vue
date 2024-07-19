<template>
  <v-app>
    <h2>这是个标题</h2>
    <Login/>
    <RouterView />
  </v-app>
</template>

<script lang="ts" setup name="App">
import Login from './views/Auth/Login.vue'
</script>

<style scoped></style>
