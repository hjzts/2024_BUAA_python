export interface LoginResponse {
    token: string
}

export interface AdminUser {
    userid: number
    username: string
    avatarurl: string
    studentid: string
    isblock: boolean
}

export interface GetAllUserResponse {
    users: AdminUser[]
}

export interface GetUserInfoResponse {
    username: string
    avatarurl: string
    studentid: string
}

export interface UpdateAvatarResponse {
    avatarurl: string
}

export interface UpdateStudentIDResponse {
    studentid: string
}

export interface CreateExerciseResponse {
    exerciseid: number
}

export interface GetListExerciseResponse {
    pages: number
    thispage: GotExercise[]
}

export interface GetExerciseByIDResponse {
    isBlock: boolean
    data: GotExercise
}

export interface OCRResponse {
    text: string
}

export interface GetCurrentUserTagResponse {
    tag: FullTag[]
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

export interface NewExerciseItem {
    exerciseid: number | undefined
    exercise: NewExercise
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

export interface FullTag {
    tagid: number
    tagname: string
}
