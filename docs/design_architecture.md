# design_architecture.md – Scrub Hub

## 1. Components Overview

### Frontend (Presentation Layer)
- **Technology**: HTML, CSS, JavaScript
- **Responsibilities**:
  - Displays pages like registration, login, dashboard, cleaner profiles
  - Collects user input from forms
  - Uses `fetch` to interact with backend APIs

### Backend (Application Layer)
- **Technology**: Node.js + Express
- **Responsibilities**:
  - Handles all HTTP routes for registration, login, cleaner availability, booking
  - Manages user sessions and redirects
  - Sends confirmation emails using Mailgun via Nodemailer
  - Reads/writes to the SQLite database

### Storage (Data Layer)
- **Technology**: SQLite
- **Responsibilities**:
  - Stores structured data: users, cleaners, bookings, availability
  - Serves as the database backend for persistent data

## 2. Layered Architecture Diagram

    [User Interface]
        ↓
    [Frontend - HTML/CSS/JS (fetch API)]
        ↓ REST API Calls
    [Backend - Node.js + Express]
        ↓ SQL Queries
    [SQLite Database]

## 3. Feature Flows

### User Registration
1. User fills out form in `register.html`.
2. Form submits to POST `/register`.
3. Backend checks uniqueness and saves to SQLite (`users` table).
4. Redirects user to login page with success/error feedback.

### User Login
1. User submits form to POST `/login`.
2. Backend checks `users` table for email/password.
3. If valid, session is created and response includes redirect to `/dashboard`.

### Dashboard
1. GET `/dashboard` page fetches data from GET `/api/user/dashboard`.
2. Shows recent bookings, upcoming services, and messages.
3. Allows navigation to other booking or messaging sections.

### Cleaner List & Availability
1. GET `/api/cleaners` fetches all cleaner profiles.
2. GET `/api/cleaner-slots?name=XXX&date=YYY` checks booked slots and returns available predefined 3-hour slots.

### Booking
1. Booking form submits to POST `/api/send-confirmation`.
2. Backend looks up cleaner, calculates price, saves to `bookings` table.
3. Sends confirmation email using Nodemailer + Mailgun.

### Payment (Mock)
1. Payment form sends data to POST `/api/payment`.
2. Backend logs mock payment and responds with success message.

## 4. Backend Routes Summary

### Users
- POST `/register`: Register user
- POST `/login`: Login and start session
- GET `/api/user/dashboard`: Get user's bookings

### Cleaners
- GET `/api/cleaner`: Get all cleaners (raw)
- GET `/api/cleaners`: Get all cleaners (parsed)
- GET `/api/cleaner-slots`: Get available slots for a cleaner by name and date

### Booking & Availability
- GET `/api/availability`: Get all availability
- POST `/api/availability`: Add a new availability slot
- POST `/api/booking`: Save new booking (admin/manual)
- POST `/api/send-confirmation`: Save booking and send email confirmation

### Payment
- POST `/api/payment`: Mock payment submission

### Utility
- GET `/tables`: List table names
- GET `/table/:name`: View table content
- GET `/send-email`: Send test email using Mailgun

## 5. Mail Service Integration
- **Mailer**: Nodemailer using Mailgun SMTP
- **Email Type**: HTML and plain-text confirmation emails
- **Sender Email**: asmita.sharma@my.jcu.edu.au
- **Configuration**:
  - `host: smtp.mailgun.org`
  - `port: 587`
  - `auth.user/pass`: stored manually in code (should move to `.env` in production)

## 6. Static Pages Routing
- `/`: Index landing page
- `/login`: Redirect to `/`
- `/register`: Registration form
- `/dashboard`: User dashboard after login
- `/cleaners`: List of cleaners
- `/table`: View data tables

## 7. Security Notes
- Passwords stored in plaintext (needs bcrypt hashing in production)
- Session management via `express-session`
- Email and password input validations required on both frontend and backend
- SMTP credentials currently hardcoded (should be moved to environment variables)

---
**Conclusion:** This design architecture document outlines the core structure and data flow for Scrub Hub. It implements a three-tier architecture using a modular approach, providing clean separation of frontend, backend, and data layers.
