<template>
    <v-container class="my-3">
        <v-card prepend-icon="mdi-account-circle" title="查看您的信息" max-width="600px" location="bottom">
            <v-divider />
            <v-row no-gutters class="my-10" align="center" justify="center">
                <v-col cols="4">
                    <v-row justify="center">
                        <v-avatar :image="userInfo.avatarurl" size="x-large" rounded="50" />
                    </v-row>
                    <v-row class="py-2" justify="center">
                        <v-col cols="8">
                            <v-divider />
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mb-2">
                        <div class="text-h5">{{ userInfo.username }}</div>
                    </v-row>
                    <v-row justify="center">
                        <v-btn
                            ref="change_avatar_button"
                            variant="text"
                            prepend-icon="mdi-pencil"
                            color="primary"
                            size="large">
                            修改头像
                        </v-btn>
                    </v-row>
                </v-col>
                <v-divider vertical />
                <v-col>
                    <v-list>
                        <v-list-item prepend-icon="mdi-account">
                            <v-list-item-title>
                                用户名
                                <span class="mx-1"></span>
                                {{ userInfo.username }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-card-account-details">
                            <v-list-item-title>
                                学号
                                <span class="mx-1"></span>
                                {{ userInfo.studentid ? userInfo.studentid : "未填写" }}
                            </v-list-item-title>
                            <template v-slot:append>
                                <v-btn variant="text" color="primary" ref="change_studentid_button">修改学号</v-btn>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-card>

    </v-container>

    <UserEvaluation/>


    <ChangeAvatar :activator="change_avatar_button" />
    <ChangeStudentID :activator="change_studentid_button" />
</template>

<script lang="ts" setup name="UserCenter">
    import ChangeAvatar from "@/components/UserCenter/ChangeAvatar.vue"
    import ChangeStudentID from "@/components/UserCenter/ChangeStudentID.vue"
    import UserEvaluation from "@/components/UserCenter/UserEvaluation.vue";
    import { useUserInfo } from "@/stores/userinfo"
    import { ref } from "vue"

    const userInfo = useUserInfo()

    let change_avatar_button = ref()
    let change_studentid_button = ref()
</script>

<style scoped></style>
