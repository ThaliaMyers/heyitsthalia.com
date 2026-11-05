import {getWebsitePhotoAlbums} from "@/Firebase/Database/PhotoAlbum/PhotoAlbumService.tsx";
import {useEffect, useState} from "react";
import type {PhotoAlbum} from "@/Firebase/Database/PhotoAlbum/PhotoAlbum.ts";
import GenericHeader from "@/Components/GenericSections/GenericHeader/GenericHeader.tsx";

export default function ProjectsPage() {
    return(
        <>
            <title>Hey, it's Thalia Myers!</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>
            
            <GenericHeader middleText={""} bigText={"Projects"} smallText={""} />
            
            <hr />
        </>
    )
}