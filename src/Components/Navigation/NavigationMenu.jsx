import './hamburgers.css'
import './NavigationMenu.css'
import {useState} from "react";

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
            <button
                className={`hamburger hamburger--collapse${menuExpanded && !isClosing ? ' is-active' : ''}`}
                type="button"
                onClick={toggleMenu}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <div className={overlayClass} onClick={closeMenu}>
                <nav className="nav-menu" onClick={(e) => e.stopPropagation()}>
                    <ul>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#interests" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#projects" onClick={closeMenu}>About Me</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
