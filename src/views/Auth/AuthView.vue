<template>
    <div class="navigate">
        <RouterLink replace to="/login" active-class="active">登录</RouterLink>
        <RouterLink replace to="/register" active-class="active">注册</RouterLink>
    </div>
    <div class="main-content">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup name="Auth">
import { RouterView, RouterLink } from 'vue-router'

</script>

<style scoped>
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
}

.navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
}
</style>