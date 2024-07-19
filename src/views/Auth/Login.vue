<template>
    <v-app>
        <v-main>
            <v-container fluid class="d-flex justify-center align-center fill-height login-background">
                <v-img src="../../../public/logo.png" class="logo" contain></v-img>
                <v-card class=" elevation-12 login-card">
                    <v-card-title class="text-center">
                        <h2 class="text-center">Welcome Back</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-icon icon="$vuetify"></v-icon>
                            <v-text-field label="学号" type="email" required></v-text-field>
                            <v-text-field label="密码" type="password" required></v-text-field>
                            <v-btn class="Login11" color="primary" block>Log In</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>

                    <v-card-subtitle class="text-center">
                        <!-- <v-btn text href="/auth/register">Register</v-btn> -->
                        Don't have an account yet? <a href="#">Sign up</a>
                    </v-card-subtitle>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script lang="ts" name="Login">

</script>
  
<style>
.login-background {
    background: linear-gradient(to bottom, #b3bbcc 0%, #a1a7aa 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.login-card {
    width: 400px;
}

.logo {
    max-height: 100px;
    margin-bottom: 16px;
}
</style>
  