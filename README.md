# 🎯 HobbyHub – Connect Through Hobbies

**HobbyHub** is a full-featured MERN stack web application that empowers users to create, join, and manage local hobby-based groups. Whether you're into painting, gaming, or reading – HobbyHub helps you find your tribe.

---

## 🌐 Live Link

- 🔗 **Client:** [https://your-firebase-app.web.app](https://your-firebase-app.web.app)  
- 🔗 **Server/API:** [https://your-vercel-server.vercel.app](https://your-vercel-server.vercel.app)

> _Replace with your actual Firebase and Vercel deployment URLs._

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React.js
- Tailwind CSS
- Firebase Authentication
- React Router DOM
- Framer Motion
- React Hot Toast
- React Tooltip / React Awesome Reveal

### 💻 Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- dotenv for env config
- CORS middleware

---

## ✅ Features

- 🔐 **Firebase Auth** (Google sign-in, logout)
- ✍️ **Create New Groups** (protected by private routes)
- 👥 **Join Hobby Groups** (with limit checks and date validation)
- 🛠️ **Update / Delete Created Groups**
- 📅 **Start Date Restrictions** (disabled joining after start date)
- 💡 **Tooltips, Toasts & Animations** for better user experience
- 🌗 **Dark / Light Mode** toggle
- 📱 **Fully Responsive Design** with Tailwind

---

## 🧪 Environment Variables

### Server-side `.env` (not to be pushed to GitHub)
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
