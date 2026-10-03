import '../../DefaultStyles/TextStyles.module.scss'
import Interests from "./Interests/Interests.jsx";
import Footer from "../../Components/UIComponents/Footer/Footer.jsx";
import GenericHeader from "../../Components/GenericSections/GenericHeader/GenericHeader.tsx";
import {calculateAge} from "../../Components/Helpers/CalculateAge.tsx";
import {getArticle} from "../../Components/Helpers/GetNumArticle.tsx";

export default function Homepage() {
    const birthday = new Date(2008, 2, 18);
    let age = calculateAge(birthday);
    let article = getArticle(age)
    
    return (
        <>
            <title>Hey, it's Thalia Myers!</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>
            
            <GenericHeader middleText={
                "Hi, my name is"
            } bigText={
                "Thalia"
            } smallText={
                `I am ${article} ${age} year old developer/designer/source of chaos.\n` +
                "Technology is the creative manifestation of the jumble of\n" +
                "ideas I call my brain. Oh, and I'm also probably one of the\n" +
                "biggest nerds you'll ever meet."
            }></GenericHeader>
            
            <hr />
            
            <Interests/>
            
            <Footer/>
        </>
    )
}