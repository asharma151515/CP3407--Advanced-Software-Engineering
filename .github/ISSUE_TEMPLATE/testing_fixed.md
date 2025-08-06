# 🧪 Testing & Debugging Documentation

This document outlines the test-driven development (TDD), debugging process, and bug resolution related to the `server.js` file in the `ScrubHub` project.

---

## 📚 Table of Contents

- [🔁 Test-Driven Development Strategy](#-test-driven-development-strategy)
- [🧪 Bug Report: Unexpected Token `)` in server.js](#-bug-report-unexpected-token--in-serverjs)
- [🔍 Root Cause](#-root-cause)
- [✅ Resolution](#-resolution)
- [🔁 Test Steps](#-test-steps)
- [📷 Evidence: Bug Screenshot](#-evidence-bug-screenshot)
- [✅ CI/CD Pipeline](#-cicd-pipeline)
- [✅ Summary](#-summary)

---

## 🔁 Test-Driven Development Strategy

- All components were tested using the TDD approach.
- Key focus areas:
  - ✅ Unit testing (white-box)
  - ✅ Integration testing
  - ✅ Grey-box testing
  - ✅ Acceptance testing (black-box)

## 🧪 Bug Report: Unexpected Token `)` in `server.js`

**Bug Title:** `SyntaxError: Unexpected token ')'` when starting server

**Environment:**  
- OS: Windows 10  
- Node.js: v22.16.0  

**File Location:**  
```
C:\Users\anshu\TRY BUGS\CP3407--Advanced-Software-Engineering-scrubhub\server.js
```

**Error Output:**
```
const app = ();
             ^
SyntaxError: Unexpected token ')'
```

---

## 🔍 Root Cause

The line in `server.js`:
```js
const app = ();
```
is invalid. It tries to assign `app` to an empty function call or value, which results in a syntax error.

---

## ✅ Resolution

Replace the invalid line:
```js
const app = ();
```
with the correct initialization of the Express application:
```js
const express = require('express');
const app = express();
```

---

## 🔁 Test Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd scrubhub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```

**Expected Output:** No syntax error; the server runs normally.

---

## 📷 Evidence: Bug Screenshot

![Bug Screenshot](link-to-screenshot-if-any)

---

## ✅ CI/CD Pipeline

GitHub Actions or any CI pipeline should include the following test types:
- Linting & Code Formatting
- Unit Testing
- Integration Testing

Status Badge:  
![CI Status](link-to-your-status-badge)

---

## ✅ Summary

- A syntax bug in `server.js` was quickly identified and resolved.
- The fix was applied by correcting the `app` initialization.
- The server now runs successfully and passes testing.