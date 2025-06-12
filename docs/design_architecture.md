# Design Architecture – Scrub Hub

## 1. Components Overview

### Frontend (Presentation Layer)
- **Technology**: HTML, CSS, JavaScript
- **Responsibilities**:
  - Shows pages for registration, login, and service browsing
  - Collects user input from forms
  - Sends and receives data from the backend using `fetch`

### Backend (Application Layer)
- **Technology**: Node.js
- **Responsibilities**:
  - Handles user actions like registration and login
  - Gets data from the frontend and checks or updates JSON files
  - Sends back results in JSON format

### Storage (Data Layer)
- **Technology**: Local JSON Files
- **Responsibilities**:
  - Stores data like users and (in the future) bookings
  - Acts like a small database
  - Read and write handled by the backend

## 2. Layered Architecture

The app is organized in 3 layers:

    [User]
    ↓ (Interacts with)
    [Frontend (HTML/JS)]
    ↓ (API Requests)
    [Backend (Node.js)]
    ↓ (Reads/Writes)
    [JSON Files]

Each layer has its own job:
- The frontend shows the website and collects input
- The backend does the logic and talks to the files
- The JSON files store the data

## 3. Component Interactions

### User Registration
1. User fills in the registration form on the frontend.
2. The frontend sends this info to `/register` on the backend.
3. The backend adds the new user to `users.json`.
5. If successful, it redirects to the login page for the user to log in.

### User Login
1. User enters their email and password in the login form.
2. The frontend sends the data to `/login` on the backend.
3. Backend checks `users.json` for a matching email and password.
4. If correct, backend redirects the user to the dashboard page.
5. If not, it sends an error message to let the user know.

