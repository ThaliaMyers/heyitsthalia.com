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
