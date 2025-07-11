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

---


# 📦 MYcleaner – Iteration 2 User Stories

**🗓️ Iteration Duration:** 3 weeks  
**📅 Start:** 9 July 2025  
**📅 End:**   July 2025  
**👨‍💻 Team Size:** 4 Developers  
**🔢 Total Estimated Time (per developer):** 9 days  
**🧮 Total Team Effort:** 9 × 4 = 36 team-days

---

## 🎯 Iteration 2 Goals

---

### 🧾 US #1: Booking History

- **Priority:** Medium  
- **Estimate:** 3 days  
- **Description:**  
  As a user, I want to view my past bookings and their statuses so that I can keep track of my service history.  
- **Notes:** Adds value for repeat customers by showing booking history and completion/cancellation status.

---

### 🔍 US #2: View Services (Enhancements)

- **Priority:** Medium  
- **Estimate:** 2 days  
- **Description:**  
  As a user, I want better filters and detailed service listings so I can find the most suitable cleaning options.  
- **Notes:** Enhances user browsing experience with more control and transparency.

---

### 🌱 US #3: Eco-Friendly Badge

- **Priority:** Low  
- **Estimate:** 2 days  
- **Description:**  
  As a user, I want to see which services are eco-friendly so I can make environmentally conscious choices.  
- **Notes:** Adds an optional visual indicator (e.g., a green leaf icon) to services tagged as eco-friendly.

---

### ⚡ US #4: Real-Time Confirmation (Improvements)

- **Priority:** Medium  
- **Estimate:** 2 days  
- **Description:**  
  As a user, I want faster and more reliable confirmation updates so that I can trust the system.  
- **Notes:** Optimizes real-time update mechanisms to improve responsiveness and reduce booking uncertainty.

---

## 📊 Summary

- **Total Estimated Ideal Days (per developer):** `9`  
- **Total Estimated Team-Days:** `36`  
```




---------------------------------------------------------------------------


# 🚀 Iteration 2 – User Stories Breakdown (`MyCleaner – *SCRUBHUB*`)

**📅 Duration:** 3 weeks
**🟢 Start:** Wednesday, 18 June 2025
**🔴 End:** Tuesday, 8 July 2025
**🧑‍💻 Team Size:** 4 developers
**📊 Total Estimated Effort (Per Dev):** 9 days
**🧮 Team-Days (E2):** `9 × 4 = 36`

---

## ✅ US #1: Booking History *(3 days)*

**Priority:** Medium
**Goal:** Allow users to view a list of their previous bookings and statuses.

* [ ] 🧱 **Database**: Add `status`, `completedAt`, `cancellationReason` if needed – *0.5 day*
* [ ] 🔧 **Backend**: API to fetch past bookings by user – *0.75 day*
* [ ] 🎨 **UI**: Booking history page or section – *1 day*
* [ ] 🔗 **Integration**: Connect API to frontend – *0.5 day*
* [ ] 🧪 **Testing**: Unit and functional testing – *0.25 day*

---

## ✅ US #2: View Services (Enhancements) *(2 days)*

**Priority:** Medium
**Goal:** Improve service filters and display more service details.

* [ ] 🎨 **UI**: Add advanced filter options (e.g., price range, duration) – *0.5 day*
* [ ] 🔧 **Backend**: Update service query/filter logic – *0.5 day*
* [ ] 🔍 **Service Cards**: Add duration, cleaner bio, price, etc. – *0.5 day*
* [ ] 🧪 **Testing**: Filter functionality and UI updates – *0.5 day*

---

## ✅ US #3: Eco-Friendly Badge *(2 days)*

**Priority:** Low
**Goal:** Display a green icon for eco-friendly services.

* [ ] 🧱 **Database**: Add `ecoFriendly` boolean field – *0.25 day*
* [ ] 🔧 **Backend**: Include field in services API – *0.25 day*
* [ ] 🎨 **UI**: Show badge/icon on service card if `ecoFriendly = true` – *0.75 day*
* [ ] 🧪 **Testing**: Badge visibility and UI condition – *0.25 day*

---

## ✅ US #4: Real-Time Confirmation (Improvements) *(2 days)*

**Priority:** Medium
**Goal:** Improve speed and accuracy of confirmation system.

* [ ] 🔁 **WebSocket Polling**: Optimize or replace fallback polling – *0.75 day*
* [ ] 🧩 **Reliability Logic**: Prevent missed updates or duplicates – *0.5 day*
* [ ] 🎨 **UI Feedback**: Add loading states & real-time indicators – *0.5 day*
* [ ] 🧪 **Testing**: Stress test booking status sync – *0.25 day*

---

## 📈 Forecast

* **Total Ideal Days:** 9
* **Estimated Actual Team-Days (A2):** \~13 days (based on velocity 0.7 from Iteration 1)

  $$
  A2 = \frac{36}{0.7} \approx 51.4 \text{ team-days} → \text{Calendar days} = \frac{51.4}{4} \approx 13 \text{ days}
  $$

---

Let me know if you want this exported as a `.md` file or embedded in your GitHub repo!

