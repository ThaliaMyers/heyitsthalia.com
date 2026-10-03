import './Contact.module.css'
import ContactDetails from "./ContactDetails/ContactDetails.js";
import ContactForm from "./ContactForm/ContactForm.js";
import GenericHeader from "../../Components/GenericSections/GenericHeader/GenericHeader.tsx";

export default function Contact() {
    return (
        <>
            <title>Contact | Thalia Myers</title>
            <GenericHeader middleText={
                "Have Questions?"
            } bigText={
                "Contact Me"
            } smallText={
                "Let me know of any questions, comments, or suggestions you have about anything I do. I'm always looking for ideas for my next random project."
            }></GenericHeader>

            <hr />
            <ContactDetails />
            <ContactForm />
        </>
    )
}