import {db} from "@/firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import type {PhotoAlbum} from "@/Firebase/PhotoAlbum/PhotoAlbum.ts";
import {isDevelopment} from "@/Components/Helpers/IsDevelopment.tsx";


export const getWebsitePhotoAlbums = async (): Promise<PhotoAlbum[]> => {
    try {
        const q = query(collection(db, "PhotoAlbums"));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as PhotoAlbum).toSorted().reverse();
    } catch (error) {
        if (isDevelopment()) {
            console.error("Error getting photo albums:", error);
        }
        throw error;
    }
};