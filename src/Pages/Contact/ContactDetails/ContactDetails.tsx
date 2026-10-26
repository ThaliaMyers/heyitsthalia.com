import styles from './ContactDetails.module.scss'
import GradientTextHeader
    from "../../../Components/UIComponents/TextComponents/GradientTextHeader/GradientTextHeader.tsx";

export default function ContactDetails() {
    return (
        <>
            <div className={styles.contactDetailsSection}>
                <GradientTextHeader tagType='h2' text='Email and Such' textSize='clamp(30px, 5vw, 100px)' margin="0px" />
                
                <h4 className={styles.emailCaption}>If you are a robot, just don't email me.</h4>
                <a className={styles.emailLink} href='mailto:contact@heyitsthalia.com'>contact@heyitsthalia.com</a>
            </div>
        </>
    )
}