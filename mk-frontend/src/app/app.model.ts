import { Role } from "./auth/auth.model";

export interface NewServer {
    worldName: string;
}

export interface Server extends NewServer {
    id: number;
    ipAddress: string;
    serverStatus?: ServerStatus;
    statusName?: string;
}

export interface Option<K,V> {
    id: K,
    name: V
}

export enum ServerStatus {
    Off = 1,
    PendingUp = 2,
    On = 3,
    PendingDown = 4,
    Error = 5
}

export const ServerStatusLabel = new Map<ServerStatus, string> ([
    [ServerStatus.Off, 'Off'],
    [ServerStatus.PendingUp, 'Launching'],
    [ServerStatus.On, 'On'],
    [ServerStatus.PendingDown, 'Shutting Down'],
    [ServerStatus.Error, 'Error']
])

export const ServerStatusColour = new Map<ServerStatus, string> ([
    [ServerStatus.Off, '#424242'],
    [ServerStatus.PendingUp, '#091d68'],
    [ServerStatus.On, '#00bd60'],
    [ServerStatus.PendingDown, '#091d68'],
    [ServerStatus.Error, '#950000']
])

export class User {
    id?: number;
    username: string = '';
    roleId?: Role;
    password?: string;
}

export interface DisplayUser extends User {
    editMode: boolean,
    initialUser: User
}

export interface ActionResult<T = undefined> {
    success: boolean;
    message: string;
    payload?: T;
}
