# Iteration 2 Plan – MyClean App

**Duration:** 3 weeks  
**Start:** June 2025  
**End:** July 2025

-------------------------------------------------------------------------------------------------------- 
# 🚀 Iteration 2 – User Stories  (MyCleaner – *Scrubhub*)                                              |
-------------------------------------------------------------------------------------------------------|
| Feature                  | Priority | Estimation | Status            | Notes                         |
| ------------------------ | -------- | ---------- | ---------------   | ----------------------------- |
| **Booking Management**   | High     | 4 days     | ✅ Done          | Cancel & Reschedule working   |
| **Cleaner Availability** | Medium   | 3 days     | ✅ Done          | Slots managed via API         |
| **Payment Integration**  | High     | 3 days     | ✅ Done          | Mock only                     |
| **Notifications**        | Medium   | 3 days     | ✅ Done          | Email confirmation working    |
| **Admin Dashboard**      | Medium   | 3 days     | ✅ Partial       | Admin tools via raw DB access |
| **User Profile Mgmt**    | High     | 2 days     | ⚠️ Backend only  | No API to update yet          |


-------------------------------------------------------
# Iteration 2 – User Stories Breakdown (MyCleaner - *SCRUBHUB*)  
**📦 Total Estimated Time: 15 Days**

---

### 1. **Booking Reschedule/Cancel** (5 days)  
- **🎨 UI:** Add reschedule & cancel buttons to booking list – **1 day**  
- **🔧 Backend:** API to update booking date/time & status (cancel) – **1.5 days**  
- **🔄 Logic:** Validate new date/time, check cleaner availability – **1 day**  
- **📧 Email:** Trigger notification emails on reschedule/cancel – **0.75 day**  
- **🧪 Testing:** Unit and integration tests for booking modification – **0.75 day**

---

### 2. **Email Confirmation** (3 days)  
- **📧 Backend:** Implement email confirmation on registration & bookings – **1.25 days**  
- **🎨 UI:** Display confirmation pending & resend confirmation option – **0.5 day**  
- **🔗 Integration:** Link email status to user account flow – **0.5 day**  
- **🧪 Testing:** Email delivery & UI status tests – **0.75 day**

---

### 3. **Cleaner Availability Management** (3 days)  
- **🎨 UI:** Cleaner dashboard to set/update availability slots – **1 day**  
- **🔧 Backend:** API to store/manage availability times – **1 day**  
- **🔄 Logic:** Sync availability with booking system – **0.5 day**  
- **🧪 Testing:** Availability validation and booking conflicts – **0.5 day**

---

### 4. **Mock Payment Integration** (2 days)  
- **🎨 UI:** Payment form & confirmation – **0.5 day**  
- **🔧 Backend:** Payment API stub & status handling – **1 day**  
- **🔗 Integration:** Link payment status to booking confirmation – **0.25 day**  
- **🧪 Testing:** Payment flow & edge cases – **0.25 day**

---

### 5. **Admin APIs (Backend only)** (2 days)  
- **🔧 Backend:** Admin APIs for user management, booking oversight, & reports – **1.25 days**  
- **🧪 Testing:** Unit tests for admin API endpoints – **0.75 day**

-------------------------


> 🔄 **Backlog Adjustments:**  
> - Roll over any **incomplete stories from Iteration 1**.  
> - Adjust estimates during daily stand-ups if blockers appear.  
> - Consider adding **Cleaner profile view/edit** if capacity allows.


--------------------------------------------------------------------------------------

# 🧮 Iteration 2: Velocity, Task Assignment & Burndown Chart

---

## 1️⃣ Velocity Table

| Feature/Task                | Estimation (days) | Status                       | Days Counted/Worked |
|-----------------------------|-------------------|------------------------------|----------------------|
| Booking Reschedule/Cancel   | 5.0               | ✅ Done                      | 4.0                  |
| Email Confirmation          | 3.0               | ✅ Done                      | 3.0                  |
| Cleaner Availability Mgmt   | 3.0               | ✅ Done                      | 3.0                  |
| Mock Payment Integration    | 2.0               | ✅ Done                      | 3.0                  |
| Admin APIs (backend only)   | 2.0               | ⚠️ Partial (1.5 days done)   | 1.5                  |


**🟢 Total Velocity (Completed Work): 14.5 days**

> **Note:** For partially completed tasks, only the portion completed within the sprint is counted toward velocity.


## 📊 Velocity Calculation
Velocity = Sum of effort (days) completed within the sprint

     = 4.0 + 3.0 + 3.0 + 3.0 + 1.5 + 0.0

     = **14.5 days**


---

## 👨‍💻 2. Developer Task Assignment

| Developer | Features Worked On                              | Approx. Contribution (days) |
|-----------|--------------------------------------------------|------------------------------|
| Dev 1     | Booking Reschedule/Cancel, Mock Payment          | ~5.0                         |
| Dev 2     | Booking Reschedule/Cancel, Admin APIs            | ~3.0                         |
| Dev 3     | Email Confirmation, Mock Payment                 | ~3.0                         |
| Dev 4     | Cleaner Availability Mgmt, User Profile Mgmt     | ~3.0                         |

---

## 📈 3. Burndown Chart


**Burn downchart ** :- <img width="994" height="623" alt="image" src="https://github.com/user-attachments/assets/0811b2ac-71aa-4d95-8c14-9cb2676e5e8e" />

### 🔹 Burndown Chart Explanation

- **X-axis**: Sprint Days (Day 0 to Day 5)
- **Y-axis**: Remaining Work (in days)
- **Planned Remaining Line**: Ideal, smooth reduction from 15 to 0
- **Actual Remaining Line**: Real progress, ending with **3.5 days** remaining

### 📋 Burndown Data Table

| Sprint Day | Planned Remaining Work (days) | Actual Remaining Work (days) |
|------------|-------------------------------|------------------------------|
| 0          | 15                            | 15                           |
| 1          | 12                            | 13                           |
| 2          | 9                             | 11                           |
| 3          | 6                             | 7                            |
| 4          | 3                             | 4                            |
| 5          | 0                             | 3.5                          |

---

### 🧠 How to Interpret the Chart

- **Planned Line**: A smooth, steady decline assuming ideal progress.
- **Actual Line**: Shows real team performance. Some tasks took longer or remained incomplete.
- The final value (**3.5 days**) reflects **carryover work** to the next sprint.
- **Gaps between lines** highlight where work didn't align with estimates — useful for sprint retrospectives and improving future planning.

---

## ✅ Summary

- **Total work completed**: `14.5 days` out of `15 planned`
- **Velocity** for this iteration = **14.5**
- **Remaining work** (carryover) = **3.5 days**
- Will used this data in your next **retrospective** to discuss:
  - Estimation accuracy
  - Partial task delays
  - How to better distribute work across the team

---




---------------------------------------------------------------------------------





