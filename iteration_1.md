# Iteration 1 Plan – MyClean App

**Duration:** 4 weeks  
**Start:** Wednesday, 21 May 2025  
**End:** Tuesday, 17 June 2025

---

## 1. GitHub Tracking

- **Branch:** `iteration-1` (branched from `main` on or before 21 May 2025)  
- **Commits:**  
  - Daily, descriptive messages, for example:  
    - `feat: Add cleaner profile form [Iteration-1]`  
    - `docs: Update iteration-1 plan`  
    - `test: Add unit tests for profile creation`  
- **Issues & Labels:**  
  - Create a GitHub Issue for each user story in this iteration and label as **todo**, **in-progress**, or **done**.  
- **Pull Requests:**  
  - Open a PR for each feature branch targeting `iteration-1` (e.g., `feature/booking-calendar` → `iteration-1`).

-------------------------------------------------------------------------------------------

## 2. Iteration 1 

### ✅ User Stories (Backlog)

- [1 ] **User Registration** | Priority: High | Estimate: 3 days  
  - *Description*: As a new user, I want to sign up with email & password so that I can create an account.  
  - *Note*: Essential for new users  
  - *US #1*

- [2 ] **User Login** | Priority: High | Estimate: 2 days  
  - *Description*: As a registered user, I want to log in with existing credentials so that I can access my account.  
  - *Note*: Core feature  
  - *US #2*

- [3 ] **View Services** | Priority: High | Estimate: 3 days  
  - *Description*: As a user, I want to view available cleaning options with filters so that I can browse services.  
  - *Note*: Enables users to browse  
  - *US #3*

- [4 ] **Book Appointment** | Priority: High | Estimate: 4 days  
  - *Description*: As a user, I want to select date/time and book a service so that I can schedule an appointment.  
  - *Note*: Core booking functionality  
  - *US #4*

- [5 ] **Real-Time Confirmation** | Priority: High | Estimate: 2 days  
  - *Description*: As a user, I want to see instant booking status so that I am informed about my appointment.  
  - *Note*: Keeps users informed  
  - *US #5*

**Total Estimated Time: 14 days**
-------------------------------------------------------------------------------------------------
# MYcleaner – Iteration 1 User Stories and Planning
| User Story             | Priority | Estimation (Days) | Description                                      | Note                             |
|------------------------|----------|--------------------|--------------------------------------------------|----------------------------------|
| User Registration      | High     | 3                  | Users sign up with email & password              | Essential for new users          |
| User Login             | High     | 2                  | Users log in with existing credentials           | Core feature                     |
| View Services          | High     | 3                  | Show available cleaning options with filters     | Enables users to browse          |
| Book Appointment       | High     | 4                  | Select date/time and book a service              | Core booking functionality       |
| Real-Time Confirmation | High     | 2                  | Show instant booking status                      | Keeps users informed             |

**Total Estimated Effort (Per Developer):** `14 days`  
**Team Size:** `4 developers`  
**Total Estimated Team-Days (E1):** `14 × 4 = 56`

---------------------------------------------------------------------------------------------------
### Actual Effort

- **Actual Duration of Iteration 1:** `20 working days`
- **Total Actual Team-Days (A1):** `20 × 4 = 80`

-------------------------------------------------------------------------------------------------
# ✅ Iteration 1 Summary – MyClean App


## Customer Goal

Build a minimum viable cleaning service web platform where users can:

- Register and login
- View available cleaners
- Book cleaning services
- Receive email confirmations
- Review booking history

---

## User Stories Implemented

| ID   | User Story                                                                 | Status        |
|------|----------------------------------------------------------------------------|----------------|
| US#1 | As a user, I want to register and login securely.                         | ✅ Implemented |
| US#2 | As a user, I want to view available cleaners.                             | ✅ Implemented |
| US#3 | As a customer, I want to book a cleaner and select time/date.            | ✅ Implemented |
| US#4 | As a user, I want to receive a booking confirmation via email.           | ✅ Implemented |
| US#5 | As a cleaner, I want to manage and view availability.                    | ✅ Implemented |
| US#6 | As a customer, I want to view my past and upcoming bookings.             | ✅ Implemented |

---

## Features & Architecture

### Backend (`server.js`)
- Built with `Node.js` + `Express`
- RESTful API endpoints:
  - `/api/register`, `/api/login`
  - `/api/cleaner`, `/api/availability`, `/api/booking`
  - `/api/user/dashboard`, `/api/send-confirmation`
- SQLite3 used for persistent storage
- Session handling via `express-session`
- Email confirmations via `nodemailer` (Mailgun SMTP)

### Database Tables
- `users`, `cleaners`, `availability`, `bookings`, `payments`
- Dummy cleaner data auto-inserts on first run

### Booking Logic
- Booking slot is 3 hours
- Cleaner availability stored separately
- Predefined slots used for simplicity:  
  `08:00–11:00`, `11:00–14:00`, `14:00–17:00`, `17:00–20:00`

### Email Confirmation
- Sends HTML and plain text using Mailgun
- Includes cleaner info, time, service, and contact

### Payment (Mock)
- `/api/payment` endpoint to simulate transactions
- Accepts card number, expiry, CVC (not stored)

---------

## Testing & Verification

- Manual testing with browser and Postman
- Verified all user flows:
  - Registration/login
  - Cleaner list loading
  - Slot booking and confirmation email
  - Booking dashboard
- Console logging and in-browser debugging

------------

## Ready for Iteration 2


- 💬 **Customer Feedback**:
  - Add slot availability filter by cleaner
  - Use dropdown to choose from available times
  - Improve password security with hashing
  - Add cancel/edit booking options

- 🧹 **Planned Enhancements**:
  - Use `bcrypt` for password hashing
  - Add input validation and frontend form checks
  - Integrate cleaner ratings and reviews
  - Improve session timeout and security
  - Refactor `/send-confirmation` logic to reduce duplication

---

## 🧠 Head First Alignment

| HFSD Concept                       | How It Was Applied                      |
|-----------------------------------|-----------------------------------------|
| Iterative Development             | Delivered working software in chunks    |
| User Stories → Tasks              | Broke each story into backend endpoints |
| Task Board & Velocity             | Estimated days per task (tracked offline)|
| "Good Enough" Design              | Delivered functional MVP first          |
| Working Code > Perfect Code       | Iteration focused on functional delivery|
| Constant Customer Feedback        | Iteration 2 incorporates new insights    |

---

## 📁 Repository Structure

src/
├── server.js
├── database (sqlite)
├── public/
│ ├── Index/index.html
│ ├── Registration/register.html
│ ├── Cleaner/cleaners.html
│ ├── dashboard.html
│ └── table.html

----------------------------------
### Velocity Calculation

We calculate team velocity using the formula:

v1 = E1 / A1


\[ v1 = \frac{56}{80} = 0.7 \]

**Iteration 1 Velocity:** `0.7 ideal days per actual team-day`

----------------------------------------------------------------------------------------------

### 📈 Forecast for Next Iteration

Assume estimated effort for Iteration 2 is `E2 = 48 ideal team-days`.  
We can forecast actual working days as:

\[ A2 = \frac{E2}{v1} = \frac{48}{0.7} \approx 69 \text{ team-days} \]

\[\text{Estimated Calendar Days} = \frac{69}{4} \approx 17.25 \text{ days (rounded to 18)}\]

-------------------------------------------------------------------------------------------

###  Conclusion

- *Ideal days* = estimated time without interruptions or multitasking.
- Velocity helps forecast realistic delivery timelines.
- *Iteration 1* velocity (`0.7`) will guide future planning and estimations.



---------------------------------------------------------------------------------------------
