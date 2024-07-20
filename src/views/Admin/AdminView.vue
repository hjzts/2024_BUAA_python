<template>
    <v-card>
        <v-layout>
            <v-col>
                <v-navigation-drawer expand-on-hover rail>
                    <v-list>
                        <v-list-item prepend-avatar="/labixiaoxin.jpg" :subtitle="userid"
                            :title="username"></v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-account-star" title="用户管理" value="userManagement"
                            @click="goToUserManagement"></v-list-item>
                        <v-list-item prepend-icon="mdi-briefcase-search" title="题目管理" value="exerciseManagement"
                            @click="goToExerciseManagement"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-circle" title="个人中心" value="adminView"
                            @click="goToAdminView"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
            <v-col cols="9" class="d-flex align-center justify-center">
                <v-card>
                    <v-card-title>
                        查看您的信息
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col cols="22">
                            <v-card-subtitle>
                                <v-row>
                                    <v-col cols="2" class="d-flex justify-start">
                                        <v-row>
                                            <v-col cols="12" class="d-flex justify-center">
                                                <v-avatar size="128">
                                                    <v-icon size="128">mdi-account</v-icon>
                                                </v-avatar>
                                            </v-col>
                                            <v-col cols="12" class="d-flex justify-center">
                                                <div style="font-size: 24px;">胡健</div>
                                            </v-col>
                                            <v-col cols="12" class="d-flex justify-center">
                                                <v-btn color="primary">修改头像</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-subtitle>
                        </v-col>

                        <v-col cols="22" class="d-flex align-center justify-center">
                            <v-card-text>
                                <v-list dense density="compact">
                                    <v-card class="mx-auto" max-width="300">
                                        <v-list density="compact">
                                            <v-list-subheader>REPORTS</v-list-subheader>

                                            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                                                <template v-slot:prepend>
                                                    <v-icon :icon="item.icon"></v-icon>
                                                </template>

                                                <v-list-item-title v-text="item.text"></v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-card>
                                </v-list>
                            </v-card-text>
                        </v-col>
                    </v-row>

                    <v-row align="center">
                        <v-col cols="auto">
                            <v-card-subtitle class="text-danger">
                                * 若您的个人信息有误，请联系系统管理员处理
                            </v-card-subtitle>
                        </v-col>
                        <v-col>
                            <v-card-actions>
                                <v-btn color="primary">修改密码</v-btn>
                                <v-btn color="error">退出登录</v-btn>
                            </v-card-actions>
                        </v-col>

                    </v-row>
                </v-card>
            </v-col>
            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts" setup name="AdminView">
import { useRouter } from 'vue-router'
const router = useRouter()

let userid = 114514
let username = 'hugo-root'
let items = [
    { text: '学工号: 22373058', icon: 'mdi-account' },
    { text: '用户名: hugo', icon: 'mdi-badge-account-horizontal-outline' }
]
function goToUserManagement() {
    router.push('/admin/userManagement')
}
function goToExerciseManagement() {
    router.push('/admin/exerciseManagement')
}
function goToAdminView() {
    router.push('/admin')
}
</script>

<style>
.text-danger {
    color: red;
}
</style>