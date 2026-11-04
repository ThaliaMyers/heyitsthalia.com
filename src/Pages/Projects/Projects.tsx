import {getWebsitePhotoAlbums} from "@/Firebase/PhotoAlbum/PhotoAlbumService.tsx";
import {useEffect, useState} from "react";
import type {PhotoAlbum} from "@/Firebase/PhotoAlbum/PhotoAlbum.ts";
import GenericHeader from "@/Components/GenericSections/GenericHeader/GenericHeader.tsx";

export default function ProjectsPage() {
    const [photoAlbums, setPhotoAlbums] = useState<PhotoAlbum[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        loadPhotoAlbums();
        console.log(photoAlbums);
    }, []);
    
    const loadPhotoAlbums = async () => {
        try {
            console.log(await getWebsitePhotoAlbums());
            const data = await getWebsitePhotoAlbums();
            setPhotoAlbums(data);
        }
        catch (error) {
            console.error("Failed to load:", error);
        }
        finally {
            setLoading(false);
        }
    };
    
    return(
        <>
            <title>Hey, it's Thalia Myers!</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>
            
            <GenericHeader middleText={""} bigText={"Photography"} smallText={""} />
            
            <hr />
        </>
    )
}