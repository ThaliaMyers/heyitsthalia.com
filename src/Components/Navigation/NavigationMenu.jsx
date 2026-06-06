import './hamburgers.css'
import {useState} from "react";

export default function NavigationMenu() {
    const [menuExpanded, setMenu] = useState(false);

    return (
        <>
            <button className={'hamburger hamburger--collapse' + menuExpanded ? ' is-active': ''} type="button"
            onClick={() => {
                setMenu(!menuExpanded);
            }}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <p>Menu</p>
        </>
    )
}