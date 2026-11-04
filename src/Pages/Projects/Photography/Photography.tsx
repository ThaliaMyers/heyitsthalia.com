import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";
import GradientTextHeader from "../../../Components/UIComponents/TextComponents/GradientTextHeader/GradientTextHeader.tsx";
import './Photography.module.scss';
import {NavLink} from "react-router";

export default function PhotographyPage() {
    return (
        <></>
    );
}
