import styles from "./Footer.module.scss"
// import "../../../DefaultStyles/TextStyles.module.scss"
import GradientTextHeader from "../TextComponents/GradientTextHeader/GradientTextHeader.tsx";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <hr></hr>
                <div className={styles.footerTitleText}>
                    <GradientTextHeader tagType='h3' text="Where to next?" textSize='clamp(30px, 3vw, 100px)' margin='0px' />
                </div>
                
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>Home</li>
                    <li className={styles.footerListItem}>Projects</li>
                    <li className={styles.footerListItem}>About Me</li>
                    <li className={styles.footerListItem}>Contacts</li>
                </ul>
                
                <a href="mailto:contact@heyitsthalia.com" style={{ color: 'white' }}>contact@heyitsthalia.com</a>
                
                <p>©{(new Date().getFullYear())} Thalia Myers</p>
            </div>
        </>
    )
}