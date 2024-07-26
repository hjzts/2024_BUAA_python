// ===== Auth =====
export interface LoginResponse {
    token: string
}

// ===== Admin =====
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

export interface AdminExercise extends GotExercise {
    isBlock: boolean
}

export interface GetAllExerciseResponse {
    pages: number
    thispage: AdminExercise[]
}

export interface AdminAdmin {
    adminid: number
    adminname: string
}

export interface GetAllAdminResponse {
    admins: AdminAdmin[]
}

// ===== UserInfo =====
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

export interface UserEvaluation {
    score: number[]
    time: Date[]
}

// ===== Exercise =====
// 公共题目
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
    exerciseid: number
    createusername: string
    tag: {
        tagid: number
        tagname: string
    }[]
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

// ===== Tag =====
export interface FullTag {
    tagid: number
    tagname: string
}

export interface GetCurrentUserTagResponse {
    tag: FullTag[]
}

// ===== Other =====
export interface NewExerciseItem {
    exerciseid: number | undefined
    exercise: NewExercise
}
