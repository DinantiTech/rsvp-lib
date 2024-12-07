# @dinantitech/rsvp

A simple library to interact with a Google Apps Script endpoint for retrieving RSVP data from Google Sheets. This library abstracts the process of sending requests and receiving JSON responses from the endpoint.

## Features

- Easy-to-use interface for fetching data from Google Sheets via Apps Script.
- Supports both JavaScript and TypeScript.

![Excel](https://github.com/user-attachments/assets/c6e3abf5-cbf9-4102-a7f5-37a95d47d1ad)

##### Note : 
- Ensure all column headers in the Google Sheet match the ones in the image above.
- Ensure the Sheet Name is correct.
- Finally, set the general access of the Google Sheet to <b>Anyone with the link</b> with <b>Editor</b> access.

## Installation

Install the package via NPM:

```bash
npm install @dinantitech/rsvp
```
Or
```bash
yarn add @dinantitech/rsvp
```

#### GET RSVP

##### Use Javascript / Node js
```Typescript
const { RSVP } = require("@dinantitech/rsvp");

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID (Optional)
const sheetName = 'your_google_sheet_name_here' // replace sheet name from Google Sheet
const sheetID = 'your_google_sheet_id_here' // replace sheet id from google sheet
const rsvp = new RSVP({ sheetName, sheetID });

async function fetchRSVP() {
    try {
        const result = await rsvp.getRSVP({
            action: 'action_from_app_script' // optional
        })

        console.log(result);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```

##### Use Typescript
```Typescript
import { RSVP } from '@dinantitech/rsvp';

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID (Optional)
const sheetName = 'your_google_sheet_name_here' // replace sheet name from Google Sheet
const sheetID = 'your_google_sheet_id_here' // replace sheet id from google sheet
const rsvp = new RSVP({ sheetName, sheetID });

interface RSVPData {
    name: string;
    message: string;
    attendance: string;
    createdAt: string;
    avatar: string;
    additional_info: string;
}

async function fetchRSVP() {
    try {
        const result = await rsvp.getRSVP<RSVPData[]>({
            action: 'action_from_app_script' // optional
        });
        console.log(result);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```

<br />

#### POST RSVP
##### Use Javascript / Node js
```Typescript
const { RSVP } = require("@dinantitech/rsvp");

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID (Optional)
const sheetName = 'your_google_sheet_name_here' // replace sheet name from Google Sheet
const sheetID = 'your_google_sheet_id_here' // replace sheet id from google sheet
const rsvp = new RSVP({ sheetName, sheetID });

async function fetchRSVP() {
    try {
        // any value is optional
        const result = await rsvp.createRSVP({
            name: 'string_value',
            message: 'string_value',
            attendance: 'string_value or boolean',
            time: 'string_value',
            avatar: 'string_value',
            additional_info: 'string_value'
        })

        console.log(result);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```

##### Use Typescript
```Typescript
import { RSVP } from '@dinantitech/rsvp';

const scriptID = 'your_google_script_id_here'; // Replace with your Google Apps Script ID (Optional)
const sheetName = 'your_google_sheet_name_here' // replace sheet name from Google Sheet
const sheetID = 'your_google_sheet_id_here' // replace sheet id from google sheet
const rsvp = new RSVP({ sheetName, sheetID });

interface RSVPResult {
    success: boolean;
    message: string;
}

async function fetchRSVP() {
    try {
        const result = await rsvp.createRSVP<RSVPResult>({
            name: 'string_value',
            message: 'string_value',
            attendance: 'string_value or boolean',
            time: 'string_value',
            avatar: 'string_value',
            additional_info: 'string_value'
        });

        console.log(result);
    } catch (error) {
        console.error('Error fetching RSVP:', error);
    }
}

fetchRSVP();
```