import GradientTextHeader from "../../../Components/TextComponents/GradientTextHeader.jsx";
import './MyInterests.css'

export default function MyInterests() {
    return (
        <>
            <section className="myInterestsHeader">
                <GradientTextHeader tagType='h2' text='My Interests' textSize='clamp(30px, 5vw, 100px)' />
            </section>
        </>
    )
}