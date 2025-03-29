# 🗳️ Voting Web App for ByteJam

A voting web application for managing and voting on teams, companies, and representatives. This app allows admins to create and manage entities while users can vote and view results. The system displays winners once voting concludes.

## 🛠️ Installation

Clone the Repository

```bash
git clone https://github.com/P091913/voting-app.git
```

-Navigate to the Project Directory

-Open the voting-app folder in Rider

-Run the following command to switch to the correct branch:
```bash
git checkout Neon-MVC-.NET
```
-Open **/voting-app/Frontend/bytejamFrontend** in **VSCode** for the frontend.

-Open **/voting-app/BackendAPI** in  **Rider** for the backend.

### 🔧 Install Dependencies

-In the VSCode terminal, navigate to the Frontend/bytejamFrontend folder and run:
```bash
npm install
```
## 🚀 Usage

Start the FrontendIn the voting-app/Frontend/bytejamFrontend directory, run:
```bash
npm start
```
### 💻 Access the Application

-Admin Page: http://localhost:3000

-Voting Page: http://localhost:3000/vote

## 🧰 Tech Stack

Frontend: React.js, Tailwind CSS, React Router, html2canvas, jsPDF

Backend: .NET (C#), ASP.NET Core

Database: SQLite

## ✅ Current Features

Admin Panel

Manage teams, companies, and school representatives.

View and display existing records on separate pages.

Export PNGs of Pins

Download a PNG of the page via the "Export" button.

TODO: Modify the export function on the company page to export pins for each group separately (e.g., "Google1 - Google4", "LeanTC1 - LeanTC4").

## 🔨 Upcoming Features

#### Voting System

  -Complete and enhance the voting page at /vote.

  -Implement vote calculation logic on the backend.

#### Admin Panel Improvements

  -Small Features:

    -Add a "Delete All" button for companies, school representatives, and teams.

    -Update the results display page.

  -Large Features:

    -Implement a "Start Voting" function to begin voting from the settings page.
  
    -Prepare and deploy the frontend for hosting.

#### Backend Enhancements

  -Docker setup for deployment outside of localhost.

  -Finalize and implement voting calculation logic.

#### Design Improvements

  -Complete the Tailwind styling to match the Figma Mockup.


