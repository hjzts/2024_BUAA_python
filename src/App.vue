<template>
    <RouterView></RouterView>
    <APIErrorSnackbars />
</template>

<script setup lang="ts" name="App">
    import { RouterView } from "vue-router"
    import APIErrorSnackbars from "./components/APIErrorSnackbars.vue"
</script>

<style scoped>
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
</style>
