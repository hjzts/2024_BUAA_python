<template>
    <v-app>
        <v-main>
            <v-container fluid class="d-flex justify-center align-center fill-height login-background">
                <v-card class="elevation-12 login-card">
                    <v-card-title class="text-center">
                        <v-img src="@/assets/vultr-logo.png" class="logo" contain></v-img>
                        <h2 class="text-center">Welcome Back</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email Address" prepend-icon="mdi-email" type="email"
                                required></v-text-field>
                            <v-text-field label="Password" prepend-icon="mdi-lock" type="password" required></v-text-field>
                            <v-btn class="mt-4" color="primary" block>Log In</v-btn>
                            <v-btn text class="mt-2">Forgot password?</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn icon>
                            <v-icon>mdi-application-cog</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-github</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon>mdi-google</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-card-subtitle class="text-center">
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
    background: linear-gradient(to bottom, #002b55 0%, #004b85 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.login-card {
    width: 400px;
}

.logo {
    max-height: 100px;
}
</style>
  