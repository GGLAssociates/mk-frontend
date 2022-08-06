
export interface LoginUser {
    username: string;
    password: string;
}

export interface LoginResult {
    token: string;
    message: string;
}

export interface LoggedInUser {
    role: Role;
    exp: Date;
}

export enum Role {
    Admin = 1,
    Visitor = 2
}