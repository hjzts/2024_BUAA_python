<!-- App.vue -->
<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-navigation-drawer app>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">个人中心</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list dense>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>个人信息</v-list-item-title>
                            </v-list-item>
                            <!-- 其他菜单项 -->
                        </v-list>
                    </v-navigation-drawer>
                </v-col>
                <v-col cols="9">
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
                                    <v-btn  color="primary">修改头像</v-btn>
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
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts" setup name="test">

</script>

<style>
.text-danger {
    color: red;
}
</style>