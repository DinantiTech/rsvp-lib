# @dinantitech/rsvp

A simple library to interact with a Google Apps Script endpoint for retrieving RSVP data from Google Sheets. This library abstracts the process of sending requests and receiving JSON responses from the endpoint.

## Features

- Easy-to-use interface for fetching data from Google Sheets via Apps Script.
- Supports both JavaScript and TypeScript.

## Installation

Install the package via NPM:

```bash
npm install @dinantitech/rsvp
```

##### Use Javascript / Node js
```JavaScript
const { RSVP } = require("@dinantitech/rsvp);

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID
const rsvp = new RSVP({ scriptID });

async function fetchRSVP() {
    try {
        const data = await rsvp.getRSVP({
            action: 'read',
            sheetID: 'your_sheet_id_here', // Replace with your Google Sheet ID
            sheetName: 'your_sheet_name_here', // Replace with your Google Sheet name
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```

##### Use Typescript
```Typescript
import { RSVP } from '@dinantitech/rsvp';

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID
const rsvp = new RSVP({ scriptID });

interface RSVPData {
    name: string;
    email: string;
    response: string;
}

async function fetchRSVP() {
    try {
        const data = await rsvp.getRSVP<RSVPData[]>({
            action: 'read',
            sheetID: 'your_sheet_id_here', // Replace with your Google Sheet ID
            sheetName: 'your_sheet_name_here', // Replace with your Google Sheet name
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```