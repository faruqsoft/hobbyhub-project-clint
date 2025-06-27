// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBly9sBs3mz5kj7KHoxUM7qA3PmDt-_D8w",
  authDomain: "ass-10-hobbyhub.firebaseapp.com",
  projectId: "ass-10-hobbyhub",
  storageBucket: "ass-10-hobbyhub.firebasestorage.app",
  messagingSenderId: "867537913075",
  appId: "1:867537913075:web:b9e49117d760514c006386"
};

const app = initializeApp(firebaseConfig);
export default app;
