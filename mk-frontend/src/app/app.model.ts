
export interface Server {
    id: number;
    name: string;
    ipAddress: string;
    status: ServerStatus;
}

export enum ServerStatus {
    Off = 1,
    PendingUp = 2,
    On = 3,
    PendingDown = 4,
    Error = 5
}