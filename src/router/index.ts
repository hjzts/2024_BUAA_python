import { createRouter, createWebHashHistory } from "vue-router"
import Auth from "@/views/Auth/AuthView.vue"
import login from "@/views/Auth/Login.vue"
import Register from "@/views/Auth/Register.vue"
import AdminLogin from "@/views/Auth/AdminLogin.vue"
import Home from "@/views/Home/HomeView.vue"
import AdminView from "@/views/Admin/AdminView.vue"
import UserManagement from "@/views/Admin/UserManagement.vue"
import ExerciseManagement from "@/views/Admin/ExerciseManagement.vue"
import AdminManagement from "@/views/Admin/AdminManagement.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/auth",
        },
        {
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
            path: "/home",
            component: Home,
        },
        {
            path: "/admin",
            component: AdminView,
            children: [
                {
                    path: "",
                    redirect: "/admin/userManagement"
                },
                {
                    name: "userManagement",
                    path: "userManagement",
                    component: UserManagement,
                },
                {
                    name: "exerciseManagement",
                    path: "exerciseManagement",
                    component: ExerciseManagement,
                },
                {
                    name: "adminManagement",
                    path: "adminManagement",
                    component: AdminManagement,
                },
            ],
        },
    ],
})

export default router
