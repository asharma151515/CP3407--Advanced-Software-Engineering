---
name: Bug report
about: Create a report to help us improve
title: "[BUG] Error: Cannot find module 'express' when running server.js"
labels: bug
assignees: asharma151515

---

**Describe the bug**
When attempting to start the Node.js server using `node server.js`, it throws a "Cannot find module 'express'" error.

**To Reproduce**
Steps to reproduce the behavior:
1. Clone the repo
2. Navigate to `CP3407--Advanced-Software-Engineering-scrubhub`
3. Run `node server.js` in terminal
4. Error is thrown regarding missing 'express' module

**Expected behavior**
The server should start successfully and listen on the specified port (e.g., 3000) without errors.

**Screenshots**
Not applicable, but here's the error message:
node:internal/modules/cjs/loader:1404
throw err;
^

Error: Cannot find module 'express'
Require stack:

C:\Users\anshu\TRY BUGS\CP3407--Advanced-Software-Engineering-scrubhub\server.js


**Desktop (please complete the following information):**
- OS: Windows 10 (10.0.26100.4652)
- Node.js: v22.16.0
- NPM: [You can get this by running `npm -v`]

**Smartphone**
Not applicable

**Additional context**
The project was missing `node_modules`. Installing dependencies using `npm install` resolved the issue.
Suggested fix:
```bash
npm install express
