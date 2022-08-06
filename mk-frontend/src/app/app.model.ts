
export interface NewServer {
    name: string;
}

export interface Server extends NewServer {
    id: number;
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