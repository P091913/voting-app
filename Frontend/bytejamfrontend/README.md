# Voteing Web App For ByteJam

A voting web application for managing and voting for teams, companies, and representatives. This app allows admins to create teams, companies, and representatives, while users can vote for teams and see the results. The system displays winners after voting.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Current Features](#current-features)
- [Tech Stack](#tech-stack)


## Installation

1. Clone Repositiory 
    - [https://github.com/P091913/voting-app](https://github.com/P091913/voting-app)
    
    ```bash
    git clone `https://github.com/P091913/voting-app.git`
    ```    
2. Navigate to the project directory in your files
    - Open the folder voteing-app in Rider 
    - In termanal enter `git checkout Neon-MVC-.NET`
    - Then you can open `/voteing-app/Frontend/bytejamFrontend` in VScode to get the Frontend
    - Then you can open `/voteing-app/BackendAPI` in Rider to get the Backend 
    
3. Install Dependencies
    - In VScode termanal enter `npm install` to get all dependencies


## Usage

In the project directory `voting-app/Frontend/bytejamFrontend`, you can run:

## `npm start` to start the project

    # Links in the app
    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view the admin page in your browser.
    Open [http://localhost:3000/vote](http://localhost:3000/vote) to view the voteing page in your browser


## Tech Stack

Frontend: React.js, Tailwind CSS, React Router, html2canvas, jsPDF 
Backend: .NET (C#), ASP.NET Core
Database: SQLite


## Current Features

Admin Panel: Diffrent Pages to do diffrent things: create teams, companies, and school reps; and display teams, companies, and school reps.

Exporting PNGs of Pins: Click the Export button to download the HTML of the page in a PNG file (TODO: On the Company page make it Export each group of people)
    Currently it Exports all of them, we need it to only do like Google1 - Google 4 then LeanTC1 - LeanTC4 so each Company get only their pins.




# Features to add in app overall

Voteing: Voteing side need to be finish "http://localhost:3000/vote" to go to the current voteing page

Design: Finish the Tailwind to get the project to look like the mock-up
[https://www.figma.com/design/1KBtOMoOeuQ8uqH429KYcI/Untitled?node-id=0-1&t=HgNrU3pxxbYJznDu-0](https://www.figma.com/design/1KBtOMoOeuQ8uqH429KYcI/Untitled?node-id=0-1&t=HgNrU3pxxbYJznDu-0)
To View the Mock-up 

Small Features on Admin Page: 
    - Delete All on Companies, SchoolReps, Teams
    - Updateing Results Page

Large Features on Admin Page:
    - Getting the voting time to "Start" a vote in the settings page
    - Setup to host Frontend

Large Features on Backend:
    - Docker Setup for non-localhost
    - Calculations for voteing
        -


