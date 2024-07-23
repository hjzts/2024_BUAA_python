export interface LoginResponse {
    token: string
}

export interface GetUserInfoResponse {
    username: string
    avatarurl: string
    studentid: string
}

export interface updateAvatarResponse {
    avatarurl: string
}

export interface updateStundentIDResponse {
    studentid: string
}
