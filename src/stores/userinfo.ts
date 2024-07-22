import { defineStore } from "pinia"
import { type GetUserInfoResponse } from "@/types"

export const useUserInfo = defineStore("userinfo", {
    state: () => {
        return {
            type: "",
            username: "",
            avatarurl: "",
            studentid: "",
        }
    },
    actions: {
        fillUser(data: GetUserInfoResponse) {
            this.type = "user"
            this.username = data.username
            this.avatarurl = data.avatarurl
            this.studentid = data.studentid
        },
        fillAdmin(adminname: string) {
            this.type = "admin"
            this.username = adminname
            this.avatarurl = "" // TODO: 补充默认的头像地址
            this.studentid = ""
        },
    },
})
