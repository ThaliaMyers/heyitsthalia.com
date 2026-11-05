import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";
import GradientTextHeader from "../../../Components/UIComponents/TextComponents/GradientTextHeader/GradientTextHeader.tsx";
import './Photography.module.scss';
import {NavLink} from "react-router";
import GenericHeader from "@/Components/GenericSections/GenericHeader/GenericHeader.tsx";
import {getWebsitePhotoAlbums} from "@/Firebase/Database/PhotoAlbum/PhotoAlbumService.tsx";
import type {PhotoAlbum} from "@/Firebase/Database/PhotoAlbum/PhotoAlbum.ts";
import {isDevelopment} from "@/Components/Helpers/IsDevelopment.tsx";

export default function PhotographyPage() {
    const [photoAlbums, setPhotoAlbums] = useState<PhotoAlbum[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadPhotoAlbums();
        if (isDevelopment()) {
            console.log(photoAlbums);
        }
    }, []);
    
    const loadPhotoAlbums = async () => {
        try {
            const data = await getWebsitePhotoAlbums();
            
            if (isDevelopment()) {
                console.log(data);
            }
            
            setPhotoAlbums(data);
        }
        catch (error) {
            if (isDevelopment()) {
                console.error("Failed to load:", error);
            }
        }
        finally {
            setLoading(false);
        }
    };
    
    return (
        <></>
    );
}
