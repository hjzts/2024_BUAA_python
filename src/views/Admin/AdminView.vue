<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>
                <v-list>
                    <v-list-item prepend-avatar="../../../public/labixiaoxin.jpg"
                        :subtitle="userid" :title="username"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-account-star" title="用户管理" value="userManagement"></v-list-item>
                    <v-list-item prepend-icon="mdi-briefcase-search" title="题目管理" value="exerciseManagement"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-circle" title="个人中心" value="adminView"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts" setup name="AdminView">
let userid = 114514
let username = 'hugo-root'
</script>

<style></style>