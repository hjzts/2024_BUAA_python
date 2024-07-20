import { defineStore } from "pinia"

export const useToken = defineStore("token", {
    state: () => {
        return {
            token: "0",
        }
    },
    actions: {
        clear() {
            this.token = "0"
        },
    },
    persist: true,
})
