import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './variables.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import CustomCursor from "./Components/CustomCursor/CustomCursor.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import NavigationMenu from "./Components/Navigation/NavigationMenu.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import ScrollToTop from "./Components/ScrollManagement/ScrollToTop/ScrollToTop.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAOmqX10LGVdfAfo8iMlfh5cHjJ2xeDuzI",
    authDomain: "heyitsthalia-com.firebaseapp.com",
    projectId: "heyitsthalia-com",
    storageBucket: "heyitsthalia-com.firebasestorage.app",
    messagingSenderId: "1051268720260",
    appId: "1:1051268720260:web:de9518ca59bb70a22a04d1",
    measurementId: "G-TNGSGMEBC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <NavigationMenu />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
      </BrowserRouter>
      <CustomCursor />
  </StrictMode>,
)
