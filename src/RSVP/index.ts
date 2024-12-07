import { classRSVPType, createRSVPType, getRSVPTypes } from "../types/rsvp.types";

export class RSVP {
    private BASE_URL: string;

    constructor({ scriptID, sheetID, sheetName }: classRSVPType) {
        const appScriptID = 'AKfycbyLu-qRh882YXjuhcO13m6WSV1pzyfIGvAAF9peeBul4d42zEfsj2_eKnGp3JuDCCSL';

        this.BASE_URL = `https://script.google.com/macros/s/${scriptID ?? appScriptID}/exec?sheetName=${sheetName}&sheetID=${sheetID}`;
    }

    public async getRSVP<T>({ action }: getRSVPTypes = {}): Promise<T> {
        const url = `${this.BASE_URL}&action=${action ?? 'GET_RSVP'}`
        const response = await fetch(url, { method: 'GET' })

        if (!response.ok) {
            throw new Error(`Failed to get RSVP: ${response.status} ${response.statusText}`);
        }

        return await response.json()
    }

    public async createRSVP<T>({ action, attendance, message, name, time }: createRSVPType): Promise<T> {
        const url = `${this.BASE_URL}?action=${action ?? 'POST_RSVP'}&name=${name}&message=${message}&attendance=${attendance}&createdAt=${new Date(time).toDateString()}`

        const response = await fetch(url, {
            headers: {
                Accept: 'application/json'
            },
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error(`Failed to get RSVP: ${response?.status} ${response?.statusText}`);
        }

        return await response.json()
    }
}