import styles from "./AboutMe.module.scss";
import GenericHeader from "../../Components/GenericSections/GenericHeader/GenericHeader.tsx";

export default function AboutMe() {
    return (
        <>
            <title>About | Thalia Myers</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>
            
            <GenericHeader middleText={
                "Here's some info"
            } bigText={
                "About Me"
            } smallText={
                "So, I don't feel like writing enough for a caption here. I also don't feel like reprogramming my header without it. You get this instead. If you like reading, scroll down."
            }></GenericHeader>
        </>
    )
}