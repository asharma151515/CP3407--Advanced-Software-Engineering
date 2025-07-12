# Iteration 1 Plan – MyClean App

**Duration:** 4 weeks  
**Start:** Wednesday,03 June 2025
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
# 🚀 Iteration 1 – User Stories Breakdown (`MyCleaner- *SCRUBHUB*`)

## 📦 Total Estimated Time: **14 Days**

----------------------------------------------

## ✅ 1. User Registration *(3 days)*

- [ ] 🎨 **UI**: Design registration form (email, password) – *0.5 day*
- [ ] ✅ **Validation**: Email format & password rules – *0.5 day*
- [ ] 🔧 **Backend**: API to create user in DB – *1 day*
- [ ] 📧 **(Optional)**: Send confirmation email – *0.5 day*
- [ ] 🧪 **Testing**: Unit & integration tests – *0.5 day*

---

## ✅ 2. User Login *(2 days)*

- [ ] 🎨 **UI**: Login form design – *0.5 day*
- [ ] 🔐 **Backend**: Verify credentials – *0.75 day*
- [ ] 🛡️ **Session**: Manage JWT or session – *0.5 day*
- [ ] 🧪 **Testing**: Session + login flow – *0.25 day*

---

## ✅ 3. View Services *(3 days)*

- [ ] 🎨 **UI**: Service list + filter options – *1 day*
- [ ] 🔧 **Backend**: API for services with filters – *1 day*
- [ ] 🔗 **Integration**: Connect UI filters to API – *0.5 day*
- [ ] 🧪 **Testing**: Filtering and UI testing – *0.5 day*

---

## ✅ 4. Book Appointment *(4 days)*

- [ ] 🎨 **UI**: Booking form with date/time – *1 day*
- [ ] 🔧 **Backend**: Create booking, check availability – *1.5 day*
- [ ] 🧩 **Logic**: Booking confirmation & error handling – *0.75 day*
- [ ] 🧪 **Testing**: End-to-end booking flow – *0.75 day*

---

## ✅ 5. Real-Time Confirmation *(2 days)*

- [ ] 🔁 **Realtime**: WebSocket or polling for booking updates – *1 day*
- [ ] 🎨 **UI**: Show live status – *0.5 day*
- [ ] 🧪 **Testing**: Real-time status testing – *0.5 day*

---


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

----------------------------------------------------------------------------------------------------

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