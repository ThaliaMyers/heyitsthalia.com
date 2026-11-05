import {db} from "@/firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import type {PhotoAlbum} from "@/Firebase/Database/PhotoAlbum/PhotoAlbum.ts";
import {isDevelopment} from "@/Components/Helpers/IsDevelopment.tsx";
import type {GenericProject} from "@/Firebase/Database/GenericProject/GenericProject.ts";

class GenericProjectService {
    projects: GenericProject[] = [];
    
    loadGenericProjects = async (): Promise<void> => {
        try {
            const q = query(collection(db, "GenericProjects"));
            const querySnapshot = await getDocs(q);
            this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as GenericProject).toSorted().reverse();
        } catch (error) {
            if (isDevelopment()) {
                console.error("Error getting photo albums:", error);
            }
            throw error;
        }
    };
}