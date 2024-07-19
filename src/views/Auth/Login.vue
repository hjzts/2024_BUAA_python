<template>
    <v-app>
        <v-main>
            <v-container fluid class=" d-flex fill-height">
                <div class="login-background"></div>
                <v-row justify="center" align="center" class="w-100">
                    <v-col justify="center" cols="12" md="6">
                        <v-row justify="center">
                            <v-img src="../../../public/logo.png" class="logo"></v-img>
                        </v-row>
                        <v-row justify="center">
                            <v-card class=" elevation-12 login-card">
                                <v-card-title class="text-center">
                                    <h2 class="text-center">Welcome Back</h2>
                                </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field label="学号" type="email" required></v-text-field>
                                        <v-text-field label="密码" type="password" required></v-text-field>
                                        <v-btn class="Login" color="primary" block>Log In</v-btn>
                                    </v-form>
                                </v-card-text>
                                <v-divider></v-divider>

                                <v-card-subtitle class="text-center">
                                    Don't have an account yet? <a href="#">Sign up</a>
                                </v-card-subtitle>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script lang="ts" name="Login">

</script>
  
<style>
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
  