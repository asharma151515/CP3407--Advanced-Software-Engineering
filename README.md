# 🧼 Scrubhub – My Home Cleaning Platform (CP3407 Project v2025)

## 👥 Group 10 – Website for App Cleaning Services

---

## 📌 Topic

**A Booking and Management Platform for Cleaning Services**

---

## 🧩 Project Overview

**Scrubhub** is a modern and user-friendly **web-based application** developed to simplify and streamline **home cleaning service bookings**. It connects customers with cleaners while offering unique features like **language preferences** (e.g., Mandarin-speaking cleaners) to overcome communication barriers.

### 🛠 Key Features

* Real-time cleaner availability
* Cleaner profiles with ratings & languages
* Secure login & registration
* Booking management & email confirmations
* Feedback system for transparency

---

## 🎯 Purpose

To offer a **simple, efficient**, and **inclusive** platform for users to book trusted cleaning services, with the added benefit of selecting cleaners based on **language compatibility**.

---

## 🥅 Project Goals

* ✅ Secure registration and login (email/password)
* ✅ Browse & book cleaning services
* ✅ Booking reminders and post-service ratings

---

## 👩‍💻 Team Roles

| Name                | Role                                       | Responsibilities                                                                                                           |  Student ID   |
|-------------------  |-----------------------------------         |-----------------------------------------------------------------------------------------------------------------------     | ------------- |
| **Asmita Sharma**   | **Project Manager / Full-Stack Developer** | Led the entire development process including backend setup, database schema, API creation, authentication,                 |  14319716     |
|                     |                                               frontend integration, and email service implementation. Also managed GitHub and overall coordination.                     |               |
|                     |                                                                                                                                                                                         
| **Juninho Chandra** | UI Assistant (Support Role)              | Contributed to basic page structures and minor styling adjustments on the frontend.                                        |  14892639     |
| **Saung Hnin Phyu** | QA & Documentation Support               | Helped in writing brief documentation and participated in manual testing.                                                  |  14768614     |
| **Boiarskii Danil** | Research & Feedback Contributor          | Provided suggestions and feedback during development and helped with simple tasks like form validation or mock data entry. |  14533148     |


---

## 🧭 Project Planning (Before Iteration 1)

* ✅ Use supplied GitHub project template
* ✅ Timestamp all initial commits before Iteration 1
* ✅ Draft **INVEST-compliant** user stories
* ✅ Prepare backlog exceeding Iteration 1 & 2 capacity

📄 **See also:** [initial\_backlog\_ideas.md](./initial_backlog_ideas.md)

---

## 🗃 Database Initialization

This project uses **SQLite** to store and manage all user, cleaner, and booking data.
✅ Tables are created automatically during server startup.

---

### 👤 `users` Table – Registered Customers

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

---

### 🧹 `cleaners` Table – Cleaner Profiles

```sql
CREATE TABLE IF NOT EXISTS cleaners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  languages TEXT,   -- e.g., "Mandarin, English"
  services TEXT,    -- e.g., "Mopping, Vacuuming"
  price INTEGER,
  country TEXT,
  image TEXT
);
```

---

### 📆 `availability` Table – Available Time Slots

```sql
CREATE TABLE IF NOT EXISTS availability (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT,          -- YYYY-MM-DD
  startTime TEXT,     -- HH:MM
  endTime TEXT,       -- HH:MM
  cleanerId INTEGER,
  FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
);
```

---

### 📋 `bookings` Table – Booking Management

```sql
CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customerName TEXT,
  customerEmail TEXT,
  customerId INTEGER,
  date TEXT,
  startTime TEXT,
  endTime TEXT,
  cleanerId INTEGER,
  amount REAL,
  status TEXT,        -- e.g., pending, confirmed, completed
  FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
);
```

💡 **Note:** Bookings are created through `/api/send-confirmation` and a confirmation email is sent via **Mailgun SMTP**.

---

### 💳 `payments` Table – Mock Payment Records

```sql
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bookingId INTEGER,
  amount REAL,
  paymentMethod TEXT,       -- e.g., credit_card
  transactionDate TEXT,     -- e.g., 2025-06-14T12:00:00Z
  status TEXT,              -- success, failed
  FOREIGN KEY (bookingId) REFERENCES bookings(id)
);
```

---

## 📅 Project Timeline

| Iteration   | Duration  | Start Date | End Date   |
| ----------- | --------- | ---------- | ---------- |
| Iteration 1 | 3–4 weeks | 2025-06-02 | 2025-06-23 |
| Iteration 2 | 3–4 weeks | 2025-06-24 | 2025-07-15 |

📌 **Detailed Plans & Progress:**

* 📑 [Iteration 1 Goals](./iteration_1.md#iteration-1-goals)
* 📑 [Iteration 2 Goals](./iteration_2.md#iteration-2-goals)
* 📌 [Project Backlog](./project-plan.md#user-stories-backlog)

---

## 🧪 Testing & QA

* Manual & automated testing integrated into deployment
* Functionality verification for:

  * User Registration & Login
  * Booking flows
  * API communication
  * Email confirmations

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE.txt)

---


