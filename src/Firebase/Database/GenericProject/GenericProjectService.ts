import {db} from "@/firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import {isDevelopment} from "@/Components/Helpers/IsDevelopment.tsx";
import type {GenericProject} from "@/Firebase/Database/GenericProject/GenericProject.ts";
import {createContext, useContext, useEffect, useState} from "react";


export class GenericProjectService {
    projects: GenericProject[] = [];
    private loading: Promise<GenericProject[]> | null = null;
    
    loadGenericProjects = (): Promise<GenericProject[]> => {
        this.loading ??= (async () => {
            try {
                const q = query(collection(db, "GenericProjects"));
                const querySnapshot = await getDocs(q);
                this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as GenericProject).toSorted().reverse();
                return this.projects;
            } catch (error) {
                this.loading = null;
                if (isDevelopment()) {
                    console.error("Error getting photo albums:", error);
                }
                throw error;
            }
        })();
        return this.loading;
    };
}

export const genericProjectService = new GenericProjectService();

export function useGenericProjectService() {
    const[projects, setProjects] = useState(genericProjectService.projects);
    useEffect(() => {
        genericProjectService.loadGenericProjects().then(setProjects);
    }, [])
    return projects;
}