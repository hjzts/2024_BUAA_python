<template>
    <v-navigation-drawer expand-on-hover rail permanent>
        <v-list>
            <v-list-item
                :prepend-avatar="userInfo.avatarurl"
                :title="userInfo.username"
                :subtitle="userInfo.studentid"
            />
        </v-list>

        <v-divider />

        <v-list density="compact" v-model:selected="selected" mandatory nav>
            <v-list-item
                prepend-icon="mdi-clipboard-text-search"
                title="所有题目"
                value="allExercise"
            />
            <v-list-item
                prepend-icon="mdi-account-multiple"
                title="共享群组"
                value="group"
            />
            <v-list-item
                prepend-icon="mdi-pencil-ruler"
                title="我的题目"
                value="myExercise"
            />
            <v-list-item
                prepend-icon="mdi-plus-box-multiple"
                title="创建题目"
                value="createExercise"
            />
            <v-list-item
                prepend-icon="mdi-account-circle"
                title="个人中心"
                value="userCenter"
            />
        </v-list>
    </v-navigation-drawer>

    <v-app-bar density="compact" elevation="1" location="top">
        <v-app-bar-title>{{ title_dict[selected[0]] }}</v-app-bar-title>
        <v-spacer />
        <p>{{ userInfo.username }}</p>
        <v-btn icon @click="onLogoutClick">
            <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
    </v-app-bar>

    <v-main>
        <RouterView />
    </v-main>
</template>

<script lang="ts" setup name="Home">
    import { useToken } from "@/stores/token"
    import { useUserInfo } from "@/stores/userinfo"
    import { callapi } from "@/utils/callapi"
    import { ref, watch } from "vue"
    import { RouterView, useRoute, useRouter } from "vue-router"
    const route = useRoute()
    const router = useRouter()
    const token = useToken()
    const userInfo = useUserInfo()

    const title_dict: {
        [key: string]: string
    } = {
        allExercise: "所有题目",
        group: "共享群组",
        myExercise: "我的题目",
        createExercise: "创建题目",
        userCenter: "个人中心",
    }

    let selected = ref(<string[]>[route.name])

    watch(selected, (newValue) => {
        router.push({ name: newValue[0] })
    })

    function onLogoutClick() {
        callapi.post("form-data", "Auth", "logout", null, (data) => {
            token.clear()
            userInfo.clear()
            router.replace("/")
        })
    }
</script>

<style scoped></style>
