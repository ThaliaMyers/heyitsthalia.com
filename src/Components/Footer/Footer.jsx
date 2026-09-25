import "./Footer.css"
import "../../Pages/Homepage/Styles/TextStyles.css"
import GradientTextHeader from "../TextComponents/GradientTextHeader.jsx";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>

                <div className="footerTitleText">
                    <GradientTextHeader tagType='h2' text="That's all for this page." textSize='clamp(30px, 4vw, 100px)' margin='0px' />
                    <br></br>
                    <br></br>
                    <GradientTextHeader tagType='h3' text="Where to next?" textSize='clamp(30px, 3vw, 100px)' margin='0px' />
                </div>

                <ul className="footerList">
                    <li className="footerListItem">Home</li>
                    <li className="footerListItem">Projects</li>
                    <li className="footerListItem">About Me</li>
                    <li className="footerListItem">Contacts</li>
                </ul>

                <a href="mailto:contact@heyitsthalia.com" style={{ color: 'white' }}>contact@heyitsthalia.com</a>

                <p>©{(new Date().getFullYear())} Thalia Myers</p>
            </div>
        </>
    )
}