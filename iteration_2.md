# Iteration 2 Plan – MyClean App

**Duration:** 3 weeks  
**Start:** Wednesday, 18 June 2025  
**End:** Tuesday, 8 July 2025

---

## 1. GitHub Tracking

- **Branch:** `iteration-2` (branched from `main` after merging `iteration-1`)  
- **Milestones:** Create a GitHub Milestone named “Iteration 2” and assign Issues accordingly.  
- **Commits:** Daily, descriptive messages, e.g.:  
  - `feat: Add rating & review UI [Iteration-2]`  
  - `docs: Update iteration-2 plan`  
  - `test: Add unit tests for review and earnings [Iteration-2]`  
- **Issues & Labels:**  
  - Create a GitHub Issue for each Iteration 2 user story and label as **todo**, **in-progress**, or **done**.  
- **Pull Requests:**  
  - Open a PR for each feature branch targeting `iteration-2` (e.g., `feature/ratings-review` → `iteration-2`).

-------


### Iteration 2 – User Stories (Backlog)

| ID | Feature                   | Priority | Estimation | Description                         |
|----|---------------------------|----------|------------|-------------------------------------|
| 1  | User Profile Management   | High     | 3 days     | Update personal info and preferences|
| 2  | Booking Management        | High     | 4 days     | Cancel/reschedule bookings          |
| 3  | Reviews & Ratings         | Low      | 1 day      | Rate and review cleaners            |
| 4  | Payment Integration       | High     | 5 days     | Online transaction handling         |
| 5  | Cleaner Availability      | Medium   | 3 days     | Update working hours                |
| 6  | Admin Dashboard           | Medium   | 4 days     | Admin tools for platform control    |
| 7  | Notifications & Reminders | Medium   | 3 days     | Alerts for bookings and actions     |



---
# 🚀 Iteration 2 – User Stories Breakdown (MyCleaner – *Scrubhub*)

**📆 Duration:**  
Start: Wednesday, 8 July 2025  
End: 
---

## ✅ User Stories (Backlog)

[1 ] **Booking History** |**Priority: Medium**  | **Estimate: 3 days** 
- **Description**: As a user, I want to view my past bookings and their statuses so that I can track my service history.  
- **Note**: Adds value for repeat customers  
- **US #1**

[2 ] **View Services (Enhancements)** | **Priority: Medium** | **Estimate: 2 days**  
- **Description**: As a user, I want to see more detailed service info and improved filters so that I can make better choices.  
- **Note**: Enhances browsing experience  
- **US #2**

[3 ] **Eco-Friendly Badge** |**Priority: Low** | **Estimate: 2 days** 
- **Description**: As a user, I want to see eco-friendly badges for services so I can choose greener options.  
- **Note**: Visual indicator, optional but good for brand value  
- **US #3**

[4 ] **Real-Time Confirmation (Improvements)** |**Priority: Medium** | **Estimate: 2 days**
- **Description**: As a user, I want booking confirmation to be more reliable so I can trust the app’s updates.  
- **Note**: Improves user trust  
- **US #4**
-------------------------------------------------------
# 📌 Iteration 2 – User Stories Breakdown (MyCleaner – *SCRUBHUB*)

🗓️ **Total Estimated Time: **

---

## ✅ 1. User Profile Management – *3 days*  
🧑‍💼 Users can view and update their personal details and preferences.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Profile page: display and edit user data | 1 day |
| 🔧 Backend | API: fetch & update profile data securely | 1 day |
| 🧪 Testing | Form validation & update scenarios | 1 day |

---

## ✅ 2. Booking Management (Cancel/Reschedule) – *4 days*  
📅 Users can cancel or change their upcoming appointments.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Add cancel/reschedule options in booking history | 1 day |
| 🔧 Backend | API to update/cancel bookings + availability check | 1.5 days |
| 🧩 Logic | Adjust availability upon rescheduling | 1 day |
| 🧪 Testing | End-to-end flow for modify/cancel | 0.5 day |

---

## ✅ 3. Reviews & Ratings – *1 day*  
⭐ Users can rate cleaners and leave reviews.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Add rating stars and text review input | 0.5 day |
| 🔧 Backend | API to save and fetch reviews | 0.25 day |
| 🧪 Testing | Submit and display reviews | 0.25 day |

---

## ✅ 4. Payment Integration – *5 days*  
💳 Users can complete payments online.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Payment form (card/bank/wallet input) | 1 day |
| 🔧 Backend | Payment gateway integration (e.g., Stripe) | 2 days |
| 🛡️ Security | Secure handling of transaction data | 1 day |
| 🧪 Testing | Simulated payments and edge cases | 1 day |

---

## ✅ 5. Cleaner Availability Management – *3 days*  
🗓️ Cleaners/admins can update their available time slots.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Schedule interface for cleaners/admins | 1 day |
| 🔧 Backend | API to set/get availability | 1 day |
| 🧪 Testing | Booking conflict prevention | 1 day |

---

## ✅ 6. Admin Dashboard – *4 days*  
🧮 Admins can manage users, cleaners, and bookings.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🎨 UI | Dashboard layout: tabs for users, bookings, cleaners | 1 day |
| 🔧 Backend | Admin-level APIs for user and booking data | 1.5 days |
| 🧩 Logic | Filter/search & actions (block/reschedule/delete) | 1 day |
| 🧪 Testing | Admin access + permissions | 0.5 day |

---

## ✅ 7. Notifications & Reminders – *3 days*  
🔔 Users/cleaners get alerts about bookings.

| Task | Description | Est. Time |
|------|-------------|-----------|
| 🔔 Logic | Notification triggers (e.g., booking updates) | 1 day |
| 📧 Channels | Email/push/SMS setup (select one to start) | 1 day |
| 🧪 Testing | Trigger and receive test notifications | 1 day |

-------------------------

## 📊 Summary Table

| Feature                     | Priority | Estimation | Description                             |
|----------------------------|----------|------------|-----------------------------------------|
| User Profile Management    | High     | 3 days     | Update personal info and preferences    |
| Booking Management         | High     | 4 days     | Cancel/reschedule bookings              |
| Reviews & Ratings          | Low      | 1 day      | Rate and review cleaners                |
| Payment Integration        | High     | 5 days     | Online transaction handling             |
| Cleaner Availability       | Medium   | 3 days     | Update working hours                    |
| Admin Dashboard            | Medium   | 4 days     | Admin tools for platform control        |
| Notifications & Reminders | Medium   | 3 days     | Alerts for bookings and actions         |

---

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

