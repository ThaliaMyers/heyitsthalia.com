import './Header/Header.css'
import './Styles/TextStyles.css'
import Header from '../Homepage/Header/Header'
import MyInterests from "./MyInterests/MyInterests.jsx";

export default function Homepage() {
    return (
        <>
            <title>Hey, it's Thalia Myers!</title>
            <meta name="keywords" content=""/>
            <meta name="author" content="Thalia Myers" />
            <meta name="description"
                  content="I am a developer/designer/source of chaos. Technology is the creative manifestation of the jumble of ideas I call my brain. Oh, and I'm also probably one of the biggest nerds you'll ever meet."/>

            <Header/>
            <hr />
            <MyInterests/>
        </>
    )
}