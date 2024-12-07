import { classRSVPType, createRSVPType, getRSVPTypes } from "../types/rsvp.types";

/**
 * Class for managing RSVP operations.
 */
export class RSVP {
    private BASE_URL: string;

    /**
     * Constructor for RSVP class.
     * 
     * @param {string} params.scriptID - The App Script ID for the Google Script (OPTIONAL).
     * @param {string} params.sheetID - The Google Sheet ID.
     * @param {string} params.sheetName - The name of the sheet within the Google Sheet.
     */
    constructor({ scriptID, sheetID, sheetName }: classRSVPType) {
        const appScriptID = 'AKfycbyLu-qRh882YXjuhcO13m6WSV1pzyfIGvAAF9peeBul4d42zEfsj2_eKnGp3JuDCCSL';

        this.BASE_URL = `https://script.google.com/macros/s/${scriptID ?? appScriptID}/exec?sheetName=${sheetName}&sheetID=${sheetID}`;
    }

    /**
     * Fetch RSVP data from the Google Sheet.
     * 
     * @param {string} params.action - Action type (default: 'GET_RSVP').
     */
    public async getRSVP<T>({ action }: getRSVPTypes = {}): Promise<T> {
        const url = `${this.BASE_URL}&action=${action ?? 'GET_RSVP'}`;
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`Failed to get RSVP: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    }

    /**
     * Create a new RSVP entry in the Google Sheet.
     * 
     * @param {string} params.action - Action type (default: 'POST_RSVP').
     * @param {string} params.name - Name of the person RSVPing.
     * @param {string} params.message - Message included with the RSVP.
     * @param {string} params.attendance - Attendance status (e.g., 'Yes', 'No').
     * @param {string} params.avatar - URL of the person's avatar.
     * @param {string} params.additional_info - Additional information for the RSVP.
     * @param {Date | string} params.time - Timestamp for the RSVP (default: current date).
     */
    public async createRSVP<T>({ action, attendance, message, name, time, additional_info, avatar }: createRSVPType): Promise<T> {
        // Base URL
        const baseUrl = `${this.BASE_URL}`;

        // Query parameter builder
        const params = new URLSearchParams();

        // Add parameters if they have a value
        if (action) params.append('action', action);
        else params.append('action', 'POST_RSVP');

        if (name) params.append('name', name);
        if (message) params.append('message', message);
        if (attendance) params.append('attendance', attendance);
        if (avatar) params.append('avatar', avatar);
        if (additional_info) params.append('additional_info', additional_info);

        // Add timestamp
        params.append('createdAt', new Date(time ?? new Date()).toDateString());

        // Construct the full URL
        const url = `${baseUrl}?${params.toString()}`;

        // Send the request
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
            },
            method: 'POST',
        });

        // Handle errors
        if (!response.ok) {
            throw new Error(`Failed to create RSVP: ${response?.status} ${response?.statusText}`);
        }

        // Return the response data
        return await response.json();
    }
}
