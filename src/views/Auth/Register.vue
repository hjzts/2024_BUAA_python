<template>
    <v-app>
        <v-main>
            <v-container fluid class="d-flex fill-height">
                <div class="login-background"></div>
                <v-row justify="center" align="center" class="w-100">
                    <v-col justify="center" cols="12" md="6">
                        <v-row justify="center">
                            <v-img src="../../../public/logo.png" class="logo"></v-img>
                        </v-row>
                        <v-row justify="center">
                            <v-card class="elevation-12 login-card">
                                <v-card-title class="text-center">
                                    <h2 class="text-center">Welcome Back</h2>
                                </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field label="学号" type="number" required></v-text-field>
                                        <v-text-field label="邮箱" type="email" required></v-text-field>
                                        <v-text-field label="密码" type="password" required></v-text-field>、
                                        <v-checkbox v-model="checkbox" color="green">
                                            <template v-slot:label>
                                                <div>
                                                    我同意
                                                    <v-tooltip location="bottom">
                                                        <template v-slot:activator="{ props }">
                                                            <a href="https://vuetifyjs.com" target="_blank" v-bind="props"
                                                                @click.stop>
                                                                服务条款和隐私政策
                                                            </a>
                                                        </template>
                                                    </v-tooltip>
                                                    。
                                                </div>
                                            </template>
                                        </v-checkbox>

                                        <v-col>
                                            <v-btn class="Login" color="primary" block>注册</v-btn>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col>
                                            <v-btn class="Login" color="primary" block>已有账号？登陆</v-btn>
                                        </v-col>
                                    </v-form>
                                </v-card-text>
                                <v-divider></v-divider>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup name="Login">
import { useRouter } from "vue-router"
const router = useRouter()
let checkbox = false
</script>

<style>
.custom-subtitle {
    font-size: 16px;
    text-align: left;
    font-weight: normal;
    line-height: 1.5;
    color: #333;
}

.v-input--selection-controls__input {
  border: 1px solid #2c993e; /* 设置边框颜色 */
  border-radius: 4px; /* 设置边框圆角 */
}

.custom-checkbox .v-input--selection-controls__ripple {
  border-radius: 3px; /* 确保复选框的圆角边框 */
}

.my-fill-height {
    height: 100%;
}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #819bd4 0%, #134ea5 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(50% 60%, 0% 0%, 100% 0%);
    /* z-index: -1; */
}

.login-card {
    width: 600px;
}

.logo {
    max-height: 120px;
    margin-bottom: 16px;
}
</style>
