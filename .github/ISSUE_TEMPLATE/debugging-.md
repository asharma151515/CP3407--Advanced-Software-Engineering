---
name: 'Debugging '
about: Use this template to report a bug, suggest a feature, or raise an issue
title: 'SyntaxError: Unexpected token '')''` when starting server'
labels: bug
assignees: asharma151515

---

🧪 Testing & Debugging Documentation
This document outlines the test-driven development (TDD), debugging process, and bug resolution related to the server.js file in the ScrubHub project.

📚 Table of Contents
🔁 Test-Driven Development Strategy

🧪 Bug Report: Unexpected Token ) in server.js

🔍 Root Cause

✅ Resolution

🔁 Test Steps

📷 Evidence: Bug Screenshot

✅ CI/CD Pipeline

✅ Summary

🔁 Test-Driven Development Strategy
All components were tested using the TDD approach.

Key focus areas:

✅ Unit testing (white-box)

✅ Integration testing

✅ Grey-box testing

✅ Acceptance testing (black-box)

🧪 Bug Report: Unexpected Token ) in server.js
Bug Title: SyntaxError: Unexpected token ')' when starting server

Environment:

OS: Windows 10

Node.js: v22.16.0

File Location:

vbnet
Copy
Edit
C:\Users\anshu\TRY BUGS\CP3407--Advanced-Software-Engineering-scrubhub\server.js
Error Output:

plaintext
Copy
Edit
const app = ();
             ^
SyntaxError: Unexpected token ')'
🔍 Root Cause
The line in server.js:

js
Copy
Edit
const app = ();
is invalid. It tries to assign app to an empty function call or value, which results in a syntax error.

✅ Resolution
Replace the invalid line:

js
Copy
Edit
const app = ();
with the correct initialization of the Express application:

js
Copy
Edit
const express = require('express');
const app = express();
🔁 Test Steps
Clone the repository:

bash
Copy
Edit
git clone <your-repo-url>
Navigate to the project directory:

bash
Copy
Edit
cd scrubhub
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
Expected Output: No syntax error; the server runs normally.

📷 Evidence: Bug Screenshot
(Add screenshot here if available)

✅ CI/CD Pipeline
GitHub Actions or any CI pipeline should include the following test types:

Linting & Code Formatting

Unit Testing

Integration Testing

Status Badge:

✅ Summary
A syntax bug in server.js was quickly identified and resolved.

The fix was applied by correcting the app initialization.

The server now runs successfully and passes testing.
