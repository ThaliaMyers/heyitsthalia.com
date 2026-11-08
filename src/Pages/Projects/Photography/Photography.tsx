import GradientTextHeader from "../../../Components/UIComponents/TextComponents/GradientTextHeader/GradientTextHeader.tsx";
import './Photography.module.scss';
import {NavLink} from "react-router";
import GenericHeader from "@/Components/GenericSections/GenericHeader/GenericHeader.tsx";
import {isDevelopment} from "@/Components/Helpers/IsDevelopment.tsx";
import {useGenericProjectService} from "@/Firebase/Database/GenericProject/GenericProjectService.ts";

export default function PhotographyPage() {
    const albums = useGenericProjectService().filter(p => p.categoryId === "photography");
    
    return (
        <>
            {albums.map(album => (
                <div key={album.id}>
                    <h2>{album.title}</h2>
                    <p>{album.subtitle}</p>
                    {album.coverImage && <img src={album.coverImage} alt={album.title} />}
                </div>
            ))}
        </>
    );
}
