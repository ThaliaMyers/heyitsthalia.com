import './Styles/Contact.css'
import ContactHeader from "./Header/ContactHeader.jsx";
import ContactDetails from "./ContactDetails/ContactDetails.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

export default function Contact() {
    return (
        <>
            <title>Contact | Thalia Myers</title>
            <ContactHeader />
            <ContactDetails />
            <ContactForm />
        </>
    )
}