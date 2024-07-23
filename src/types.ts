export interface LoginResponse {
    token: string
}

export interface GetUserInfoResponse {
    username: string
    avatarurl: string
    studentid: string
}

export interface UpdateAvatarResponse {
    avatarurl: string
}

export interface UpdateStundentIDResponse {
    studentid: string
}

export interface OCRResponse {
    text: string
}

interface PublicExercise {
    type: 0 | 1 | 2 | 10
    title: string
    content: string
    option: string[]
    answer: string[]
}

// 创建的题目，用于createExercise和updateExercise
export interface NewExercise extends PublicExercise {
    tag: number[]
}

// 获取的题目，用于getReachableExercise、getExerciseByID、searchExercise、getExerciseFromTag、getRecommendExercise
export interface GotExercise extends PublicExercise {
    exerciseid: string
    createusername: string
    tag: {
        tagid: number
        tagname: string
    }[]
}

// 获取有屏蔽信息的题目，用于getAllExercise
export interface AdminExercise extends GotExercise {
    isBlock: boolean
}
