import { classRSVPType, createRSVPType, getRSVPTypes } from "../types/rsvp.types";

export class RSVP {
    private BASE_URL: string;

    constructor({ scriptID, sheetID, sheetName }: classRSVPType) {
        this.BASE_URL = `https://script.google.com/macros/s/${scriptID}/exec?sheetName=${sheetName}&sheetID=${sheetID}`
    }

    public async getRSVP<T>({ action }: getRSVPTypes): Promise<T> {
        const url = `${this.BASE_URL}&action=${action ?? 'GET_RSVP'}`
        const result = await fetch(url, { method: 'GET' })

        return await result.json()
    }

    public async createRSVP<T>({ action, attendance, message, name, time }: createRSVPType): Promise<T> {
        const url = `${this.BASE_URL}?action=${action}&name=${name}&message=${message}&attendance=${attendance}&createdAt=${time}`

        const result = await fetch(url, {
            headers: {
                Accept: 'application/json'
            },
            method: 'POST'
        });

        return await result.json()
    }
}