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




## Project Planning BEFORE Iteration-1
- Use the supplied GitHub template  
- Ensure initial commits are timestamped BEFORE Iteration-1 start  
- Draft user stories per INVEST criteria  
- Create more stories than fit into Iterations 1 & 2  

### Initial Backlog Ideas
See [initial_backlog_ideas.md](./initial_backlog_ideas.md)  

## 4. Database Initialization
This project uses SQLite to store all data .

## Tables Created##
*users* — stores customer details

*cleaners* — stores cleaner profiles and their services

*bookings* — stores booking information for customers and cleaners

*payments* — stores payment transactions linked to bookings

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE,
  passwordHash TEXT,
  dob TEXT,
  area TEXT,
  phone TEXT
);

-- Cleaners Table
CREATE TABLE IF NOT EXISTS cleaners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  languages TEXT,    -- comma-separated values, e.g. "Mandarin, English"
  services TEXT,     -- comma-separated values, e.g. "mopping, vacuuming"
  hourlyRate REAL,
  description TEXT
);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customerId INTEGER,
  cleanerId INTEGER,
  date TEXT,           -- format YYYY-MM-DD
  startTime TEXT,      -- format HH:MM
  endTime TEXT,        -- format HH:MM
  amount REAL,
  status TEXT,         -- e.g. pending, confirmed, completed, cancelled
  FOREIGN KEY (customerId) REFERENCES users(id),
  FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bookingId INTEGER,
  amount REAL,
  paymentMethod TEXT,       -- e.g. credit_card
  transactionDate TEXT,     -- ISO 8601 format, e.g. 2025-06-14T12:00:00Z
  status TEXT,              -- e.g. success, failed
  FOREIGN KEY (bookingId) REFERENCES bookings(id)
);

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

