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
import PhotographyPage from "@/Pages/Projects/Photography/Photography.tsx";
import ProjectsPage from "@/Pages/Projects/Projects.tsx";

export default function CoreLayout() {
    return (
        <>
            <MenuExpandedProvider>
                <MenuIsClosingProvider>
                    <BrowserRouter>
                        <ScrollToTop />
                        <NavigationMenu />
                        <Routes>
                            {/*Core Navigation Pages*/}
                            <Route path="/" element={<Homepage />} />
                            <Route path="/home" element={<Navigate to="/" replace />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                            
                            {/*Projects Pages*/}
                            <Route path="/projects" element={<ProjectsPage />}/>
                            <Route path="/projects/photography" element={<PhotographyPage />}/>
                        </Routes>
                    </BrowserRouter>
                    <CustomCursor />
                </MenuIsClosingProvider>
            </MenuExpandedProvider>
        </>
    )
}