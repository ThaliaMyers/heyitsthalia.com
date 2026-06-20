import './Header/Header.css'
import './Styles/TextStyles.css'
import Header from '../Homepage/Header/Header'
import MyInterests from "./MyInterests/MyInterests.jsx";
// import NavigationMenu from "../../Components/Navigation/NavigationMenu.jsx";

export default function Homepage() {
    return (
        <>
            {/*<NavigationMenu />*/}
            <Header />
            <hr></hr>
            <MyInterests />
        </>
    )
}