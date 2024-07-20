<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>
                <v-list>
                    <v-list-item prepend-avatar="../../../public/labixiaoxin.jpg" :subtitle="userid"
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

            <v-card>
                <v-card-title>
                    查看您的信息
                </v-card-title>
                <v-card-subtitle>
                    <v-row>
                        <v-col cols="2">
                            <v-avatar size="64">
                                <v-icon size="64">mdi-account</v-icon>
                            </v-avatar>
                        </v-col>
                        <v-col cols="10">
                            <div>胡健</div>
                            <v-btn color="primary">修改头像</v-btn>
                        </v-col>
                    </v-row>
                </v-card-subtitle>
                <v-card-text>
                    <v-list dense>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account-card-details</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>学工号: 22373058</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>用户名: 学生</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-email</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>个人邮箱: 22373058@uuaa.edu.cn</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-calendar</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>创建时间: 2024-02-19</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>当前学期: 2024春-课程系统</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary">修改密码</v-btn>
                    <v-btn color="error">退出登录</v-btn>
                </v-card-actions>
                <v-card-subtitle class="text-danger">
                    * 若您的个人信息有误，请联系系统管理员处理
                </v-card-subtitle>
            </v-card>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts" setup name="AdminView">
import { useRouter } from 'vue-router'
const router = useRouter()

let userid = 114514
let username = 'hugo-root'
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