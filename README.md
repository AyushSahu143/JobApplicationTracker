# Job Application Tracker

A modern job application tracking dashboard built to manage, organize, and persist job applications with a clean and scalable frontend architecture.

This application focuses on **real-world frontend engineering patterns** such as global state management, controlled forms, data persistence, guarded routes, and modular UI design — not just UI rendering.


## ✨ Features

### 🔐 Authentication (Fake Auth)
- Login and logout flow
- User-scoped session persistence using `localStorage`
- Protected routes to prevent unauthorized access

### 📋 Job Management
- Add job applications with:
  - Company
  - Role
  - Status (Applied, Interview, Offer, Rejected)
  - Notes
- User-specific job data isolation
- Immutable state updates for reliability

### 🎨 Modern UI/UX
- Clean, consistent dark theme
- Card-based layout with clear visual hierarchy
- Modal-based interaction for focused actions
- Responsive design using Tailwind CSS

### 💾 Data Persistence
- Jobs stored per user in `localStorage`
- Automatic state hydration on refresh
- Predictable state flow using React Context


## 🧠 Core Concepts & Skills Demonstrated

- React Context API for global state management
- Controlled forms and predictable state modeling
- Separation of concerns (Layout vs Pages vs Components)
- Conditional rendering and UI state control
- Client-side persistence with `localStorage`
- Route protection and navigation flow
- Immutable state updates
- Clean UI architecture (App Shell pattern)
- Scalable component structure


## 🛠 Tech Stack

- **React.js**
- **React Router**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**


## 📂 Project Structure (Simplified)

src/
│── components/
│   ├── Dashboard/
│   ├── AddJobs/
│   ├── Header/
│   ├── Footer/
│── Context/
│   ├── AuthContext
│   ├── JobContext
│── Layout.jsx
│── App.jsx


## 🎯 Why This Project Matters

This project goes beyond basic CRUD demos by emphasizing:

- Clear **state ownership**
- User-scoped data persistence
- UI consistency through a centralized layout
- Realistic dashboard patterns used in production applications

It mirrors how **internal tools and SaaS dashboards** are designed and built in real engineering teams.


## 🚀 Future Enhancements

- Edit and delete job applications
- Search and filter by role or status
- Dashboard analytics and summaries
- Backend integration (Node.js + database)
- Real authentication providers


## 👤 Author

**Ayush Sahu**  
B.Tech Computer Science & Engineering  

Focused on building scalable, maintainable, real-world applications with strong fundamentals in frontend and backend development.
