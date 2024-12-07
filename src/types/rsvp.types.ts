export type classRSVPType = {
    sheetName: string;
    sheetID: string;
    scriptID?: string;
}

export type getRSVPTypes = {
    action?: string;
}

export type createRSVPType = {
    name: string;
    message: string;
    attendance: string;
    time: Date;
    action?: string;
}