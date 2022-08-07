
export interface LoginUser {
    username: string;
    password: string;
}

export interface LoginResult {
    token: string;
    message: string;
}

export interface LoggedInUser {
    roleId: Role;
    exp: Date;
    username: string;
}

export enum Role {
    Admin = 1,
    Visitor = 2
}

export const RoleLabel = new Map<Role, string>([
    [Role.Admin, 'Admin'],
    [Role.Visitor, 'Visitor']
]);