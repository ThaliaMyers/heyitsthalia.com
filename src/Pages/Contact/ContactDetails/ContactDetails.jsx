import './ContactDetails.css'
import GradientTextHeader from "../../../Components/TextComponents/GradientTextHeader.jsx";

export default function ContactDetails() {
    return (
        <>
            <div className='contactDetailsSection'>
                <GradientTextHeader tagType='h2' text='Email and Such' textSize='clamp(30px, 5vw, 100px)' />

                <h4 className='emailCaption'>If you are a robot, just don't email me.</h4>
                <a className='emailLink' href='mailto:contact@heyitsthalia.com'>contact@heyitsthalia.com</a>
            </div>
        </>
    )
}