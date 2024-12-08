export type classRSVPType = {
    sheetName: string;
    sheetID: string;
    scriptID?: string;
}

export type getRSVPTypes = {
    action?: string;
}

export type createRSVPType = {
    action?: string;
    name?: string;
    message?: string;
    attendance?: string;
    avatar?: string;
    additional_info?: string;
}