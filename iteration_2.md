# Iteration 2 Plan – MyClean App

**Duration:** 3 weeks  
**Start:** Wednesday, June 2025  
**End:** Tuesday, July 2025

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

## 🧮 Total Estimated Time (# Roughly )
**Total Estimated Time (Individual):** 9 days  
**Team Size:** 4 developers  
**Total Team-Days (E2):** 9 × 4 = **36 days**

--------------------------------------------------------------------------------------

## 🧪 GitHub Workflow Setup

- **Branch Name:** `iteration-2` (branched from `main` after merging `iteration-1`)
- **Milestone:** `Iteration 2`
- **Labels:**  
  - `todo`, `in-progress`, `done`, `priority: high/medium/low`
- **Commits Format:**  

