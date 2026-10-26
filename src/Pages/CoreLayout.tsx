import styles from "./CoreLayout.module.scss";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import CustomCursor from "../Components/UIComponents/CustomCursor/CustomCursor.tsx";
import NavigationMenu from "../Components/UIComponents/Navigation/NavigationMenu.jsx";
import ScrollToTop from "../Components/Helpers/ScrollManagement/ScrollToTop/ScrollToTop.tsx";
import Homepage from "./Homepage/Homepage.tsx";
import Contact from "./Contact/Contact.tsx";
import AboutMe from "./About/AboutMe.tsx";
import {createContext, useContext, useState} from "react";
import {MenuIsClosingProvider} from "../Components/UIComponents/Navigation/ContextProviders/MenuIsClosingContext.tsx";
import {MenuExpandedProvider} from "../Components/UIComponents/Navigation/ContextProviders/MenuExpandedProvider.tsx";

export default function CoreLayout() {
    return (
        <>
            <MenuExpandedProvider>
                <MenuIsClosingProvider>
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
                </MenuIsClosingProvider>
            </MenuExpandedProvider>
        </>
    )
}