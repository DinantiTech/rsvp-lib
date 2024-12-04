import { getRSVPTypes } from "../types/rsvp.types";

export class RSVP {
    private BASE_URL: string;

    constructor({ scriptID }: { scriptID: string }) {
        this.BASE_URL = `https://script.google.com/macros/s/${scriptID}/exec`
    }

    public async getRSVP<T>({ action, sheetID, sheetName }: getRSVPTypes ): Promise<T> {
        const url = `${this.BASE_URL}?action=${action}&tableName=${sheetName}&sheetId=${sheetID}`
        const result = await fetch(url, { method: 'GET' })

        return await result.json()
    }
}