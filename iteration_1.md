# 🧹 Iteration 1 Plan – MyClean App

**Duration:** 4 weeks  
**Start:** Wednesday, 21 May 2025  
**End:** Tuesday, 17 June 2025  

---

## 1. GitHub Tracking

- **Branch:** `iteration-1` (branched from `main` on or before 21 May 2025)  
- **Commits:**  
  - Daily, descriptive messages (e.g., `feat: Add cleaner profile form [Iteration-1]`)
- **Issues & Labels:**  
  - Each user story tracked as an issue with `todo`, `in-progress`, `done`
- **Pull Requests:**  
  - Each feature branch PR targets `iteration-1` (e.g., `feature/booking-calendar → iteration-1`)

---

## 2. Iteration 1 – User Stories (Backlog)

| ID | User Story                       | Priority | Est. (Days) | Description                                           | Note                         |
|----|----------------------------------|----------|-------------|-------------------------------------------------------|------------------------------|
| 1  | User Registration                | High     | 3           | Users sign up with email & password                   | Essential for new users      |
| 2  | User Login                       | High     | 2           | Users log in with existing credentials                | Core feature                 |
| 3  | View Services                    | High     | 3           | View available cleaning options with filters          | Enables users to browse      |
| 4  | Book Appointment                 | High     | 4           | Select date/time and book a service                   | Core booking functionality   |
| 5  | Real-Time Confirmation           | High     | 2           | See instant booking status updates                    | Keeps users informed         |

**Total Estimated Time (Per Developer):** 14 days  
**Team Size:** 4 developers  
**Total Estimated Team-Days (E1):** 14 × 4 = **56 ideal team-days**

---

## 🚀 User Stories Breakdown

### ✅ 1. User Registration *(3 days)*
- 🎨 UI: Registration form – *0.5 day*
- ✅ Validation: Email format & password rules – *0.5 day*
- 🔧 Backend: API to store user – *1 day*
- 📧 Optional: Confirmation email – *0.5 day*
- 🧪 Testing: Unit + integration – *0.5 day*

### ✅ 2. User Login *(2 days)*
- 🎨 UI: Login form – *0.5 day*
- 🔐 Backend: Verify credentials – *0.75 day*
- 🛡️ Session: JWT or session handling – *0.5 day*
- 🧪 Testing: Login + session flow – *0.25 day*

### ✅ 3. View Services *(3 days)*
- 🎨 UI: Service list + filter options – *1 day*
- 🔧 Backend: Filterable service API – *1 day*
- 🔗 Integration: UI & API – *0.5 day*
- 🧪 Testing: UI + filter logic – *0.5 day*

### ✅ 4. Book Appointment *(4 days)*
- 🎨 UI: Booking form – *1 day*
- 🔧 Backend: Availability + booking logic – *1.5 day*
- 🧩 Logic: Confirmation + error handling – *0.75 day*
- 🧪 Testing: End-to-end booking – *0.75 day*

### ✅ 5. Real-Time Confirmation *(2 days)*
- 🔁 Realtime: WebSocket or polling – *1 day*
- 🎨 UI: Live status display – *0.5 day*
- 🧪 Testing: Realtime feedback – *0.5 day*

---

## ✅ Iteration 1 Summary – MyClean App

### 🎯 Customer Goal
Deliver a minimum viable platform where users can:
- Register & log in
- View cleaner services
- Book services
- Receive confirmations
- Track appointments

### 🧾 Implemented User Stories

| ID   | Story Description                                               | Status         |
|------|------------------------------------------------------------------|----------------|
| US#1 | Register & login securely                                        | ✅ Completed   |
| US#2 | View available cleaners                                          | ✅ Completed   |
| US#3 | Book a cleaner with date/time                                    | ✅ Completed   |
| US#4 | Receive booking confirmation (email)                             | ✅ Completed   |
| US#5 | See real-time updates for booking                                | ✅ Completed   |

---

## ⚙️ Features & Architecture

### Backend
- **Tech Stack:** Node.js + Express + SQLite3
- **APIs:** `/register`, `/login`, `/booking`, `/availability`, `/send-confirmation`
- **Security:** Session management with `express-session`
- **Emails:** Confirmation emails sent via Mailgun (SMTP)

### Booking Logic
- Time slots: 3-hour blocks (`08:00–11:00`, etc.)
- Cleaners have fixed availability
- Conflict prevention built into backend

### Mock Payment
- Endpoint: `/api/payment`
- Accepts dummy card inputs for simulation

---

## 🧪 Testing & Verification

- Verified user flows via browser + Postman
- Tested:
  - Registration/Login
  - View & book services
  - Email receipt
  - Booking updates
- Manual UI testing + backend log tracing

---

## 📈 Team Velocity Calculation

### 📊 Initial Estimate
- **Estimated Ideal Effort (E1):** 14 days per developer × 4 = **56 ideal team-days**

### ⏱️ Actual Work Duration
- **Start:** 21 May 2025
- **End:** 17 June 2025 (28 calendar days)
- **Team Size:** 4 developers
- **Actual Effort (A1):** 28 × 4 = **112 actual team-days**

### ✅ Velocity (v1)
\[
\text{Velocity} = \frac{E1}{A1} = \frac{56}{112} = 0.5
\]

> **Final Iteration 1 Velocity:** `0.5 ideal days per actual team-day`

---

## 🔮 Forecast for Iteration 2 [Rough]

- **Estimated Ideal Effort for Iteration 2 (E2):** 25 days × 4 = **100 ideal team-days**
- **Estimated Actual Effort (A2):**
  \[
  A2 = \frac{100}{0.5} = 200 \text{ actual team-days}
  \]
- **Estimated Calendar Duration:**
  \[
  \frac{200}{4 \text{ developers}} = 50 \text{ days}
  \]

### 📌 Forecast Summary

| Metric                 | Value                      |
|------------------------|----------------------------|
| Velocity (v1)          | **0.5**                    |
| Ideal Team-Days (E2)   | 100                        |
| Actual Team-Days (A2)  | 200                        |
| Calendar Days (est.)   | **50 days**                |

---

## 📝 Notes & Improvements for Next Iteration

### Based on Feedback:
- Add cancel/reschedule booking options
- Improve password security (use bcrypt)
- Add cleaner ratings/reviews
- Filter available time slots
- Enhance form validation (frontend)

### Planned Enhancements:
- Add session timeout
- Refactor confirmation logic
- Implement cleaner availability update
- Expand unit testing and CI integration

---

##  Agile Reflection

| Agile Principle                  | Application in Iteration 1               |
|----------------------------------|------------------------------------------|
| Iterative Development            | Released in user story chunks            |
| Prioritized User Stories         | High-priority stories built first        |
| Time-Boxed Delivery              | Delivered MVP within 4 weeks             |
| Velocity Tracking                | Measured ideal vs. actual performance    |
| Continuous Feedback              | Customer suggestions collected for Iteration 2 |

---

## 📁 Repository Structure
mycleaner/
├── server.js
├── database/
│ └── sqlite.db
├── public/
│ ├── index.html
│ ├── register.html
│ ├── login.html
│ ├── cleaners.html
│ ├── dashboard.html
│ └── table.html


--------------

---

## ✅ Conclusion

- Team delivered all planned user stories for Iteration 1.
- Actual velocity was lower than expected (0.5), which will guide future planning.
- Ready to begin Iteration 2 with refined estimates and clearer expectations.

