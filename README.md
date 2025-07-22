# cp3407-project-v2025 (MyClean App)

## Topic
A Booking and Management Platform for Cleaning Services

## Project Overview
Our team is developing a web-based application called **Scrubhub** a modern
and user-friendly cleaning service platform designed to connect customers
with cleaners efficiently. This platform not only simplifies the booking 
process but also empowers customers to choose cleaners based on language preferences,
such as Chinese-speaking cleaners, to address potential communication barriers. 
The application will feature real-time availability, cleaner profiles, secure bookings,
and feedback systems to improve transparency and trust.

## Purpose
The purpose of the MyClean website is to provide a simple and efficient platform for users to book home cleaning services,
with the unique option to select cleaners based on language preferences to overcome communication barriers.

## Goals
- Secure email/password registration and login  
- Browse and book cleaning services  
- Booking reminders and post-service ratings  

### 👥 Team Roles

| Name              | Role               | Responsibilities                                                                 |
|-------------------|------------------- |----------------------------------------------------------------------------------|
| Asmita Sharma     | Project Manager    | Develop server-side logic, manage database, create APIs, handle authentication.  |
| Juninho Chandra   | Frontend Developer | Design and implement user interfaces, ensure responsive and intuitive UI/UX.     |
| Saung Hnin Phyu   | Documenataion & QA | Coordinate tasks, write documentation, perform testing, and manage deployment.   |

| Danil Boiarskii   | Developer          | UI and interface                                                                 |
=======
| Boiarskii Danil   | Developer          | UI and interface                                                                 |





## Project Planning BEFORE Iteration-1
- Use the supplied GitHub template  
- Ensure initial commits are timestamped BEFORE Iteration-1 start  
- Draft user stories per INVEST criteria  
- Create more stories than fit into Iterations 1 & 2  

### Initial Backlog Ideas
See [initial_backlog_ideas.md](./initial_backlog_ideas.md)  

# 📦 Database Initialization

This project uses **SQLite** to manage data storage. The database is initialized automatically on server startup, and the following tables are created to support 
application features such as user registration, cleaner profiles, booking management, and availability tracking.

----------------------------------------------------------------------

## 👤 Users Table (`users`)

**Stores registered customer information**

```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  dob TEXT,
  area TEXT,
  phone TEXT
);
```

---------------------------------------------------------------------------

## 🧹 Cleaners Table (`cleaners`)

Contains cleaner profiles, their service offerings, language capabilities, hourly rates, and country of origin.

```sql
CREATE TABLE IF NOT EXISTS cleaners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  languages TEXT,   -- comma-separated values, e.g., "Mandarin, English"
  services TEXT,    -- comma-separated values, e.g., "Mopping, Vacuuming"
  price INTEGER,
  country TEXT,
  image TEXT
);
```

---------------------------------------------------------------------------------

## 📆 Availability Table (`availability`)

Represents each cleaner's available time slots for booking.

```sql
CREATE TABLE IF NOT EXISTS availability (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT,          -- format YYYY-MM-DD
  startTime TEXT,     -- format HH:MM
  endTime TEXT,       -- format HH:MM
  cleanerId INTEGER,
  FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
);
```

------------------------------------------------------------------------------


## 📋 Bookings Table (`bookings`)

Tracks all booking transactions made by customers. Each record links a user to a cleaner along with booking date, time, amount, and status.

```sql
CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customerName TEXT,
  customerEmail TEXT,
  customerId INTEGER,
  date TEXT,          -- format YYYY-MM-DD
  startTime TEXT,     -- format HH:MM
  endTime TEXT,       -- format HH:MM
  cleanerId INTEGER,
  amount REAL,
  status TEXT,        -- e.g., pending, confirmed, completed
  FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
);

**Note** ---> The `/api/send-confirmation` endpoint creates a booking and sends a confirmation email to the user using Mailgun SMTP.

----------------------------------------------------------------------------------



## 💳Payments Table (`payments`)


Used for mock payment tracking during bookings.

```sql
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bookingId INTEGER,
  amount REAL,
  paymentMethod TEXT,       -- e.g., credit_card
  transactionDate TEXT,     -- ISO format, e.g., 2025-06-14T12:00:00Z
  status TEXT,              -- e.g., success, failed
  FOREIGN KEY (bookingId) REFERENCES bookings(id)
);
```

------------------------------------------------------------------------

**Conclusion** This setup ensures a structured and scalable backend system for managing cleaning service operations efficiently.

------------------------------------------------------------------------

## Project Plan
Detailed planning artifacts:  
- **Backlog & INVEST-compliant stories** → [project-plan.md#user-stories-backlog](./project-plan.md#user-stories-backlog)  
- **Iteration 1 Goals**               → [iteration_1.md#iteration-1-goals](./iteration_1.md#iteration-1-goals)  
- **Iteration 2 Goals**               → [iteration_2.md#iteration-2-goals](./iteration_2.md#iteration-2-goals)  

## Iteration 1 [Duration: 3–4 weeks]
Start: 2025-06-02  
End:   2025-06-23  

## Iteration 2 [Duration: 3–4 weeks]
Start: 2025-06-24  
End:   2025-07-15  

## Actual Iterations
- [Iteration 1 Board](./iteration_1.md)  
- [Iteration 2 Board](./iteration_2.md)  

## License
[MIT](./LICENSE.txt)

