# 📝 Multi-User React Todo App

A dynamic task management application built with **React** and **Tailwind CSS**. 

Unlike standard Todo apps, this project features a **simulated multi-user environment**. It uses LocalStorage to create a "mock database," allowing different users to Sign Up, Login, and manage their own private task lists without seeing other users' data.

## 🚀 Live Demo
[Click here to view the Live Project](https://glass-todo-app-fawn.vercel.app/)

## ✨ Key Features

- **🔐 Multi-User Authentication:**
  - Custom Login and Signup flows.
  - "Mock Backend" logic: checks if users exist and validates passwords using LocalStorage.
- **🛡️ Data Isolation:**
  - Uses dynamic storage keys (`todos_username`) to ensure User A never sees User B's tasks.
  - Session persistence (stays logged in on refresh).
- **✅ Task Management:**
  - Add, Delete, and Update tasks.
  - specific "Done" vs "To Do" views.
  - Due Date tracking.
- **🎨 Responsive UI:**
  - Built with Tailwind CSS for a modern, dark-mode aesthetic.
  - Interactive notifications using React Hot Toast.

## 🛠️ Technologies Used

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Notifications:** React Hot Toast
- **State Management:** React `useState` & `useEffect`
- **Persistence:** Browser LocalStorage

## ⚙️ How It Works (The Logic)

This app simulates a database using the browser's LocalStorage:

1.  **User Directory:** A `users` array stores credentials: `[{ username: "ali", password: "123" }]`.
2.  **Data Segmentation:** When a user logs in (e.g., "ali"), the app dynamically switches the storage key to `todos_ali`.
3.  **Session:** The app tracks the `currentUser` state to prevent unauthorized access to routes.

## 💻 Getting Started

To run this project locally on your machine:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/]https://github.com/humayun-saeed1/glass-todo-app.git
2. **Install Dependencies**
cd glass-todo-app
npm install
3. **Run the Development Server**
npm run dev
Created by Humayun Saeed - Computer Science Student at Superior University
