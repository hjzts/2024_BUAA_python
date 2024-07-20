import axios from "axios"
import { useToken } from "@/stores/token"
import emitter from "./emitter"

const baseURL = "http://localhost:5173/api/v1"

interface errDescription {
    [key: number]: string
}

const errDescription: errDescription = {
    99999: "未知错误",
    99991: "登录信息失效，请重新登录",
    100101: "账号或密码错误",
    100102: "该账号已被封禁",
    100201: "该用户名已被占用",
    100202: "用户名或密码中包含非法字符",
}

interface APIResponse {
    success: boolean
    errCode: number
    data: Object
}

export async function get(
    module: string,
    method: string,
    callback: (data: Object) => any,
    params?: object
) {
    const token = useToken()
    const url = "/" + module + "/" + method
    axios({
        method: "get",
        baseURL: baseURL,
        url: url,
        params: {
            token: token.token,
            ...params,
        },
        responseType: "json",
        responseEncoding: "utf8",
    })
        .then((response) => {
            const isAPIResponse = (data: any): data is APIResponse => {
                return (
                    typeof data.success == "boolean" &&
                    typeof data.errCode == "number" &&
                    typeof data.data == "object"
                )
            }
            if (response.status == 200 && isAPIResponse(response.data)) {
                const result = <APIResponse>response.data
                if (result.success) {
                    callback(result.data)
                } else {
                    emitter.emit("apierror", errDescription[result.errCode])
                }
            } else {
                emitter.emit("apierror", "网络错误：返回类型错误")
            }
        })
        .catch((error) => {
            emitter.emit("apierror", "网络错误：" + error.code)
        })
}

export async function post(
    module: string,
    method: string,
    callback: (data: Object) => any,
    body?: object,
    params?: object
) {
    const token = useToken()
    const url = "/" + module + "/" + method
    axios({
        method: "post",
        baseURL: baseURL,
        url: url,
        headers: {
            "Content-Type": "multipart/form-data",
        },
        params: {
            token: token.token,
            ...params,
        },
        data: body,
        responseType: "json",
        responseEncoding: "utf8",
    })
        .then((response) => {
            const isAPIResponse = (data: any): data is APIResponse => {
                return (
                    typeof data.success == "boolean" &&
                    typeof data.errCode == "number" &&
                    typeof data.data == "object"
                )
            }
            if (response.status == 200 && isAPIResponse(response.data)) {
                const result = <APIResponse>response.data
                if (result.success) {
                    callback(result.data)
                } else {
                    emitter.emit("apierror", errDescription[result.errCode])
                }
            } else {
                emitter.emit("apierror", "网络错误：请求返回类型错误")
            }
        })
        .catch((error) => {
            emitter.emit("apierror", "网络错误：" + error.code)
        })
}
