# Iteration 2 Plan – MyClean App

**Duration:** 3 weeks  
**Start:** June 2025  
**End:** July 2025

----------------------------------------------------------------------------------------------------------------------------------
Iteration 2 – User Stories (MyCleaner – Scrubhub)
----------------------------------------------------------------------------------------------------------------------------------
Feature                  | Priority | Estimation | Status          | Notes
-------------------------|----------|------------|------------------|-------------------------------------------------------------
Booking Management       | High     | 4 days     | ✅ Done          | Cancel & Reschedule by customer via dashboard (UI + API)
Cleaner Availability     | Medium   | 3 days     | ✅ Done          | Slots managed via API
Payment Integration      | High     | 3 days     | ✅ Done          | Mock only
Notifications            | Medium   | 3 days     | ✅ Done          | Email confirmation working
Admin Dashboard          | Medium   | 3 days     | ✅ Partial       | Admin tools via raw DB access
User Profile Mgmt        | High     | 2 days     | ⚠️ Backend only  | No API to update yet
Chatbot Assistant        | Medium   | 2 days     | ✅ Done          | Helps with booking support and FAQs

---
# Iteration 1
---

# User Stories (Backlog)

- [1] **Booking History** | Priority: Medium | Estimate: 3 days  
  - *Description:* As a user, I want to view my past bookings and their statuses so that I can track my service history.  
  - *Note:* Adds value for repeat customers  
  - *US #1*

- [2] **View Services (Enhancements)** | Priority: Medium | Estimate: 2 days  
  - *Description:* As a user, I want to see more detailed service info and improved filters so that I can make better choices.  
  - *Note:* Enhances browsing experience  
  - *US #2*

- [3] **Eco-Friendly Badge** | Priority: Low | Estimate: 2 days  
  - *Description:* As a user, I want to see eco-friendly badges for services so I can choose greener options.  
  - *Note:* Visual indicator, optional but good for brand value  
  - *US #3*

- [4] **Real-Time Confirmation (Improvements)** | Priority: Medium | Estimate: 2 days  
  - *Description:* As a user, I want booking confirmation to be more reliable so I can trust the app’s updates.  
  - *Note:* Improves user trust  
  - *US #4*
---

# Iteration 2 – User Stories Breakdown (MyCleaner - *SCRUBHUB*)  
**📦 Total Estimated Time:  17.5 days`**

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

---

### 6. **Chatbot Assistant** (3 days)
- **💬 UI:** Embed chatbot widget on main pages (Home, Booking, Dashboard) – **0.5 day**
- **🤖 Backend:** Integrate chatbot logic with FAQs, booking help & cleaner query support – **1.25 days**
- **🔗 Integration:** Provide conversational triggers from buttons and alerts – **0.5 day**
- **🧪 Testing:** Chat flow validation and interaction logging – **0.75 day**

-------------------------


> 🔄 **Backlog Adjustments:**  
> - Roll over any **incomplete stories from Iteration 1**.  
> - Adjust estimates during daily stand-ups if blockers appear.  
> - Consider adding **Cleaner profile view/edit** if capacity allows.


--------------------------------------------------------------------------------------
# 🧮 Iteration 2: Velocity, Task Assignment & Burndown Chart

## 1️⃣ Velocity Table

| Feature/Task                    | Estimation (days) | Status              | Days Counted/Worked |
|--------------------------------|-------------------|---------------------|----------------------|
| Booking Reschedule/Cancel      | 5.0               | ✅ Done             | 4.0                  |
| Email Confirmation             | 3.0               | ✅ Done             | 3.0                  |
| Cleaner Availability Mgmt      | 3.0               | ✅ Done             | 3.0                  |
| Mock Payment Integration       | 2.0               | ✅ Done             | 3.0                  |
| Admin APIs (backend only)      | 2.0               | ⚠️ Partial (1.5 done) | 1.5                  |
| Chatbot Assistant              | 3.0               | ✅ Done             | 3.0                  |

🟢 **Total Velocity (Completed Work): 17.5 days**

> Note: For partially completed tasks, only the portion completed within the sprint is counted toward velocity.

---

## 📊 Velocity Calculation

**Velocity = Sum of effort (days) completed within the sprint**

`= 4.0 + 3.0 + 3.0 + 3.0 + 1.5 + 3.0 = 17.5 days`

---

## 👨‍💻 2. Developer Task Assignment

| Developer | Features Worked On                                 | Approx. Contribution (days) |
|-----------|-----------------------------------------------------|------------------------------|
| Dev 1     | Booking Reschedule/Cancel, Mock Payment             | ~5.0                         |
| Dev 2     | Booking Reschedule/Cancel, Admin APIs               | ~3.0                         |
| Dev 3     | Email Confirmation, Mock Payment                    | ~3.0                         |
| Dev 4     | Cleaner Availability Mgmt, Chatbot Assistant        | ~3.0                         |

---

## 📈 3. Burndown Chart

<img width="2000" height="1000" alt="burndown_chart_scrubhub" src="https://github.com/user-attachments/assets/6e81b0b2-c8e1-472e-a12d-5da24c662f56" />


---

### 🔹 Burndown Chart Explanation

**X-axis**: Sprint Days (Day 0 to Day 15)  
**Y-axis**: Remaining Work (in days)  
- Planned Remaining Line: Ideal, smooth reduction from 15 to 0  
- Actual Remaining Line: Real progress, ending with 0.0 days remaining

---

### 📋 Burndown Data Table

| Sprint Day | Planned Remaining Work (days) | Actual Remaining Work (days) |
|------------|-------------------------------|-------------------------------|
| 0          | 15                            | 15                            |
| 1          | 11                            | 13                            |
| 2          | 7                             | 11                            |
| 3          | 3                             | 9                             |
| 4          | 0                             | 7                             |
| 5-15       | 0                             | 0                             |

---

### 🧠 How to Interpret the Chart

- **Planned Line**: A smooth, steady decline assuming ideal progress.
- **Actual Line**: Shows real team performance. Some tasks took longer or remained incomplete.
- Gaps between lines highlight where work didn't align with estimates — useful for sprint retrospectives and improving future planning.

---

## ✅ Summary

- Total work completed: **17.5 days** out of **15** planned  
- Velocity for this iteration = **17.5**
- Remaining work (carryover) = **0.0 days**  
- Use this data in your next retrospective to discuss:
  - Estimation accuracy
  - Task balancing across the team
  - Whether the team can take on more work next sprint

---





