import AboutMeHeader from "./Header/AboutMeHeader.jsx";
import ContactDetails from "./ContactDetails/ContactDetails.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

export default function AboutMe() {
    return (
        <>
            <title>About | Thalia Myers</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>
            <AboutMeHeader />
            <ContactDetails />
            <ContactForm />
        </>
    )
}