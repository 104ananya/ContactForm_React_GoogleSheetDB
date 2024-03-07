# Contact Page 

## Description

A modern and user-friendly contact page built with React, featuring form validation and integration with Google Sheets for seamless data collection

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Google Sheets Integration](#google-sheets-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

    ```bash
   cd project-directory

3. Install dependencies:
    
    ```bash
   npm install

## Usage

1. Start the development server:

   ```bash
   npm start

   or

   npm run dev

2. Open your browser and go to http://localhost:5173 to view the application.

## Google Sheets Integration

The project includes integration with Google Sheets for data collection using NoCodeAPI:

1. Sign up for an account on NoCodeAPI and create a new Google Sheets API endpoint.
2. Obtain the API endpoint URL provided by NoCodeAPI for your Google Sheets integration.
3. Use the API endpoint URL in your project to send form submissions to the Google Sheets spreadsheet.
4. Ensure that the Google Sheets spreadsheet is configured to accept data from the API endpoint.

This setup eliminates the need for obtaining Google Sheets API credentials and manually configuring a credentials file. Instead, you can directly use the API endpoint provided by NoCodeAPI to handle the integration seamlessly.

Make sure to add the Url into .env file

    URL = <your_google_sheets_api_endpoint>
    

## Deployment

The project is deployed on Vercel for hosting React applications. 

You can access the deployed application using the following link: [Vercel Deployment Link](https://contact-form-react-google-sheet-db.vercel.app/) .

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-name).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License.