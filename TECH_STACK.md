# 🛠️ **Tech Stack Used in ScrubHub Cleaning Service Web App**

---

## ✅ **Languages & Frameworks***
- **JavaScript (Node.js)** – Server-side runtime for backend logic  
- **HTML/CSS** – Frontend structure and styling  
- **Express.js** – Web framework for routing and middleware  
- **EJS / Pug / HTML** – Templating engine or static files for rendering frontend pages  

---

## 📦 **Backend Tools**
- **Express Router** – Modular routing  
- **body-parser** – Parses incoming JSON/form data  
- **dotenv** – Load environment variables from `.env`  
- **Mailgun-js / Nodemailer** – Email confirmations & notifications  
- **bcrypt** – Secure password hashing  
- **jsonwebtoken (JWT)** – Token-based user sessions (optional)  

---

## 🗃️ **Database**
- **SQLite** – Lightweight SQL-based local database  
- **better-sqlite3** or **sqlite3** – Node.js SQLite integration

  **Layout of the SQL**
  <img width="1913" height="977" alt="image" src="https://github.com/user-attachments/assets/d2fb137c-6b47-494c-849c-0a3fbf7d70f6" />

---

## 📫 **Email Integration**
- **Mailgun** – Email service provider for sending transactional emails  
- **Mailgun-js** – Node.js SDK to connect with Mailgun API  

    **Demo**
  
<img width="649" height="318" alt="image" src="https://github.com/user-attachments/assets/4778be9e-a8ac-463b-914b-e0eddff067e4" />

---

## 📁 **Storage & Data Handling**
- **JSON files** – Used for mock data or simple record keeping  
- **fs (File System)** – Read/write support for file-based data storage  

---

## 🌐 **Frontend UI Pages**
- **Home**
- **Login / Register**
- **Dashboard** – (Role-based: Customer / Admin)
- **Booking page**
- **About Us**
- **Service Details**
- **Contact or Review System UI**
- **Notification**

---


- **Home**
<img width="982" height="492" alt="image" src="https://github.com/user-attachments/assets/d5decd3f-6144-4e9d-9671-a977046dcfe9" /> 

---

- **Login / Register**
<img width="992" height="501" alt="image" src="https://github.com/user-attachments/assets/48bb1281-e501-4ee8-b4c6-bc93f7f99c4e" />

---

- **Dashboard** – (Role-based: Customer / Admin)
<img width="962" height="410" alt="image" src="https://github.com/user-attachments/assets/288a01fe-2aea-468e-bfe0-1caf31ef844e" />

---

- **Booking page**
<img width="782" height="398" alt="image" src="https://github.com/user-attachments/assets/810e9f4e-cc67-4f50-9caa-afd4a889436a" />
<img width="225" height="240" alt="image" src="https://github.com/user-attachments/assets/4372499e-d109-4ece-b485-f4822d1b3bbe" />



---

- **Notification**
<img width="752" height="287" alt="image" src="https://github.com/user-attachments/assets/1374c6a1-04bf-40a4-ad71-c001b1531dc9" />





## 💬 **Chatbot Integration (AI Support)**

I have integrated a simple **AI-based chatbot** to assist users with basic queries such as:

- **How to book a cleaning service**
- **How to contact support**
- **Service availability**
- **Pricing and package guidance**
- **General FAQs**

This chatbot enhances **user interaction** by providing **real-time assistance** and helps reduce **customer support workload**.


<img width="422" height="648" alt="image" src="https://github.com/user-attachments/assets/0507ea69-4641-4ba7-883f-aef583485b21" />

---

## 👥 **Role-Based Access**
- **Cleaner Profile**
- **Customer Profile**
- **Admin Dashboard**
- **Authentication Middleware** – Controls access to protected routes by user role  

---

## 🔔 **Interactive Features**
- **Real-time Availability / Scheduling**
- **Booking Workflow**
- **Mock Payment Integration**
- **Email / Pop-up Notifications**
- **Review System** – Ratings & comments  
- **Messaging System** – (Optional real-time chat or inbox logic)

---

## 🛡️ **Security**
- **GitGuardian** – Detect exposed secrets in Git commits  
- **.env File** – Store sensitive credentials securely  
- **Input Validation** – Prevent injections and insecure inputs  

---

## ⚙️ **DevOps & Tools**
- **Git & GitHub** – Version control, team collaboration  
- **Nodemon** – Auto-reloads server in development  
- **Postman / Thunder Client** – API testing  
- **Figma** – Prototyping and UI/UX design  
- **VS Code** – Source code editor  

---




## 🌱 **Optional Add-ons**
- **Live Chat Widget** – (Tawk.to or WhatsApp SDK)  
- **Newsletter Subscription** – (Mailchimp or custom backend)  
- **Google Maps API** – Location-based service support  
- **“Back to Top” Button** – Improves user experience  

---

# 📡 **API Endpoints (HTTP POST Requests)**

All POST routes are designed for creating or processing data. Below are the key POST API endpoints implemented in the project:


<img width="1024" height="1536" alt="Create a visually ap" src="https://github.com/user-attachments/assets/67d719cf-cf6c-476f-a8e5-e041c0d93bfe" />


---

## 🔐 **Authentication**
- `POST /register` – Register a new user (Customer or Cleaner)  
  - **Body**: `{ username, email, password, role }`
  - **Description**: Stores user data in DB, hashes password with bcrypt, sends email confirmation

- `POST /login` – Authenticate existing user  
  - **Body**: `{ email, password }`
  - **Description**: Verifies credentials, returns JWT token or sets session

---

## 🧹 **Service Booking**
- `POST /bookings` – Book a cleaning service  
  - **Body**: `{ customerId, cleanerId, serviceType, date, time, address }`
  - **Description**: Stores booking info in DB, triggers notification

- `POST /availability` – Update cleaner's available time slots  
  - **Body**: `{ cleanerId, availableDates }`
  - **Description**: Updates calendar availability for cleaner

---

## 💳 **Mock Payment**
- `POST /payment` – Process booking payment (mock)  
  - **Body**: `{ bookingId, amount, method }`
  - **Description**: Simulates a payment transaction (no real gateway)

---

## 📨 **Communication & Notification**
- `POST /send-email` – Trigger email (Mailgun)  
  - **Body**: `{ to, subject, message }`
  - **Description**: Sends confirmation or notification email to user

- `POST /messages` – Post a chat message between cleaner and customer  
  - **Body**: `{ senderId, receiverId, message }`
  - **Description**: Stores message in DB or temp JSON, supports optional chat feature

---

## 🌟 **Reviews**
- `POST /reviews` – Submit a service review  
  - **Body**: `{ customerId, cleanerId, rating, comment }`
  - **Description**: Adds user review after service is completed

---

## 🔒 **Admin**
- `POST /admin/create-user` – Admin creates user with specific role  
  - **Body**: `{ username, email, password, role }`
  - **Description**: Restricted to admin panel actions

---

✅ All POST routes include:
- **Validation** using middleware
- **Error handling** with standardized messages
- **Security** via input sanitation, JWT verification, or session checks

---
