import './hamburgers.css'
import './NavigationMenu.css'
import {useState} from "react";
import { NavLink} from "react-router";

export default function NavigationMenu() {
    const [menuExpanded, setMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openMenu = () => {
        setIsClosing(false);
        setMenu(true);
    };

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenu(false);
            setIsClosing(false);
        }, 550);
    };

    const toggleMenu = () => {
        if (menuExpanded && !isClosing) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const overlayClass = [
        'nav-overlay',
        menuExpanded && !isClosing ? 'nav-overlay--open' : '',
        isClosing ? 'nav-overlay--closing' : '',
    ].filter(Boolean).join(' ');

    return (
        <>
            <nav>
                <button
                    className={`hamburger hamburger--collapse${menuExpanded && !isClosing ? ' is-active' : ''}`}
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    <span className="menu-label-track">
                        <span className={`menu-label-inner${menuExpanded && !isClosing ? ' menu-label-inner--open' : ''}`}>
                            <span className="menu-label-text">Menu</span>
                            <span className="menu-label-text">Close</span>
                        </span>
                    </span>
                </button>

                <div className={overlayClass} onClick={closeMenu}>
                    <nav className="nav-menu" onClick={(e) => e.stopPropagation()}>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutme" onClick={closeMenu}>About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}
