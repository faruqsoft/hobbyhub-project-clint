import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import { Toaster } from "react-hot-toast";
// ✅ Add this line
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster position="top-right" />
  </AuthProvider>
</React.StrictMode>
);
