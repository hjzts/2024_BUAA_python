import { createRouter, createWebHashHistory } from "vue-router"
import Auth from "@/views/Auth/AuthView.vue"
import login from "@/views/Auth/Login.vue"
import Register from "@/views/Auth/Register.vue"
import AdminLogin from "@/views/Auth/AdminLogin.vue"
import Home from "@/views/Home/HomeView.vue"
import AdminView from "@/views/Admin/AdminView.vue"
import UserManagement from "@/views/Admin/UserManagement.vue"
import ExerciseManagement from "@/views/Admin/ExerciseManagement.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/auth",
        },
        {
            name: "auth",
            path: "/auth",
            component: Auth,
            children: [
                {
                    name: "login",
                    path: "login",
                    component: login,
                },
                {
                    name: "register",
                    path: "register",
                    component: Register,
                },
                {
                    name: "adminLogin",
                    path: "adminLogin",
                    component: AdminLogin,
                },
            ],
        },
        {
            name: "home",
            path: "/home",
            component: Home,
        },
        {
            name: "admin",
            path: "/admin",
            component: AdminView,
            children: [
                {
                    name: "userManagement",
                    path: "userManagement",
                    component: UserManagement,
                },
                {
                    name: "exerciceManagement",
                    path: "exerciceManagement",
                    component: ExerciseManagement,
                },
            ],
        },
    ],
})

export default router
