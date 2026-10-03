import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './variables.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import CustomCursor from "./Components/UIComponents/CustomCursor/CustomCursor.jsx";
import Homepage from "./Pages/Homepage/Homepage.tsx";
import Contact from "./Pages/Contact/Contact.tsx";
import NavigationMenu from "./Components/Navigation/NavigationMenu.jsx";
import AboutMe from "./Pages/About/AboutMe.tsx";
import ScrollToTop from "./Components/Helpers/ScrollManagement/ScrollToTop/ScrollToTop.tsx";

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
