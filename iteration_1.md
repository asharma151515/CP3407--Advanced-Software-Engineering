# 🧹 Iteration 1 Plan – MyClean App

**Duration:** 4 weeks  
**Start:** June 2025
**End:** June 2025
=======


---------------------------------------------------------------------------------------------------------------------------------------------
# Iteration 1 User Stories and Planning (MyCleaner - Scruhubb)
----------------------------------------------------------------------------------------------------------------------------------------------
| User Story             | Priority | Estimation (Days) | Description                                      | Note                             |
|------------------------|----------|--------------------|--------------------------------------------------|----------------------------------|
| User Registration      | High     | 3                  | Users sign up with email & password              | Essential for new users          |
| User Login             | High     | 2                  | Users log in with existing credentials           | Core feature                     |
| View Services          | High     | 3                  | Show available cleaning options with filters     | Enables users to browse          |
| Book Appointment       | High     | 4                  | Select date/time and book a service              | Core booking functionality       |
| Real-Time Confirmation | High     | 2                  | Show instant booking status                      | Keeps users informed             |

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


**Total Estimated Effort (Per Developer):** `14 days`  
**Team Size:** `4 developers`  
**Total Estimated Team-Days (E1):** `14 × 4 = 56`

----------------------------------------------------------------------------------------------------

# 🚀 Iteration 1: Velocity, Task Assignment & Burndown Chart (MyCleaner – SCRUBHUB)

---

## 1️⃣ Velocity Table

| Feature/Task             | Estimation (days) | Status        | Days Counted/Worked |
|--------------------------|-------------------|---------------|----------------------|
| User Registration        | 3.0               | ✅ Done       | 3.0                  |
| User Login               | 2.0               | ✅ Done       | 2.0                  |
| View Services            | 3.0               | ✅ Done       | 3.0                  |
| Book Appointment         | 4.0               | ✅ Done       | 4.0                  |
| Real-Time Confirmation   | 2.0               | ✅ Done       | 2.0                  |

---

🟢 **Total Velocity (Completed Work):** `14.0 days`

> 🔍 *Note: All stories completed fully. No partials or carryover.*

---

## 📊 Velocity Calculation

> **Formula:**  
> `Velocity = Sum of all completed story estimations`

Velocity = 3 (User Registration)
+ 2 (User Login)
+ 3 (View Services)
+ 4 (Book Appointment)
+ 2 (Real-Time Confirmation)
= ✅ 14 days


✅ **Velocity for Iteration 1 = 14.0**

---

## 👨‍💻 Developer Task Assignment

| Developer | Features Worked On                             | Approx. Contribution (days) |
|-----------|--------------------------------------------------|-----------------------------|
| Dev 1     | User Registration, Book Appointment             | ~5.0                        |
| Dev 2     | User Login, Real-Time Confirmation              | ~4.0                        |
| Dev 3     | View Services, Book Appointment                 | ~3.0                        |
| Dev 4     | User Registration, Integration & Testing        | ~2.0                        |

---

## 📈 Burndown Chart
# Iteration 1 #
<img width="900" height="600" alt="burndown_chart_iteration1" src="https://github.com/user-attachments/assets/1ff8d5eb-e4f4-4748-95d8-3e1102405a66" />

---

## 🔹 Burndown Chart Explanation

- **X-axis:** Sprint Days (Day 0 to Day 10)  
- **Y-axis:** Remaining Work (in days)

### 🟦 Planned Remaining Line:
Smooth, ideal linear reduction from 14 → 0, assuming even progress.

### 🟧 Actual Remaining Line:
Real progress day-by-day, completed **on time** with no remaining tasks.

---

## 📋 Burndown Data Table

| Sprint Day | Planned Remaining Work (days) | Actual Remaining Work (days) |
|------------|-------------------------------|-------------------------------|
| 0          | 14                            | 14                            |
| 1          | 12.6                          | 13                            |
| 2          | 11.2                          | 11                            |
| 3          | 9.8                           | 9.5                           |
| 4          | 8.4                           | 7                             |
| 5          | 7.0                           | 6                             |
| 6          | 5.6                           | 4.5                           |
| 7          | 4.2                           | 3                             |
| 8          | 2.8                           | 2                             |
| 9          | 1.4                           | 1                             |
| 10         | 0                             | 0                             |

---



### 📌 Takeaways:

- 🧾 Estimations were accurate, and delivery was smooth.
- 🤝 Team coordination and load balancing were strong.
- 🔄 Use this as a benchmark for comparing Iteration 2’s velocity.

---



###  Conclusion

- *Ideal days* = estimated time without interruptions or multitasking.
- Velocity helps forecast realistic delivery timelines.
- *Iteration 1* velocity (`0.7`) will guide future planning and estimations.

---

## 🧠 Summary & Reflection

| Metric                 | Value         |
|------------------------|---------------|
| Total Planned Work     | 14 days       |
| Total Completed Work   | 14 days       |
| Velocity               | ✅ 14          |
| Carryover Work         | ❌ 0           |
| Completion Rate        | ✅ 100%        |

---

