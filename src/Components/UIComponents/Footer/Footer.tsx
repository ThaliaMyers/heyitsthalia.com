import styles from "./Footer.module.scss"
// import "../../../DefaultStyles/TextStyles.module.scss"
import GradientTextHeader from "../TextComponents/GradientTextHeader/GradientTextHeader.tsx";
import {NavLink} from "react-router";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <hr></hr>
                <div className={styles.footerTitleText}>
                    <GradientTextHeader tagType='h3' text="Where to" textSize='clamp(30px, 3vw, 100px)' margin='0px' />
                    <br></br>
                    <GradientTextHeader tagType='h3' text="next?" textSize='clamp(30px, 3vw, 100px)' margin='0px' />
                </div>
                
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>
                        <NavLink to="/" viewTransition>Home</NavLink>
                    </li>
                    <li className={styles.footerListItem}>
                        <NavLink to="/projects" viewTransition>Projects</NavLink>
                    </li>
                    <li className={styles.footerListItem}>
                        <NavLink to="/aboutme" viewTransition>About Me</NavLink>
                    </li>
                    <li className={styles.footerListItem}>
                        <NavLink to="/contact" viewTransition>Contact</NavLink>
                    </li>
                </ul>
                
                <a href="mailto:contact@heyitsthalia.com" style={{ color: 'white' }}>contact@heyitsthalia.com</a>
                
                <p>©{(new Date().getFullYear())} Thalia Myers</p>
            </div>
        </>
    )
}