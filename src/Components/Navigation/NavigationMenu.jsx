import './hamburgers.css'
import './NavigationMenu.css'
import {useEffect, useState} from "react";
import { NavLink} from "react-router";
import homeIcon from './home-icon-image.svg';

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

    // Handle menu open/close shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore shortcuts when typing in an input
            const tag = document.activeElement?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;

            if (e.key === '/') {
                e.preventDefault();
                toggleMenu();
            } else if (e.key === 'Escape' && menuExpanded && !isClosing) {
                closeMenu();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [menuExpanded, isClosing]);

    const overlayClass = [
        'nav-overlay',
        menuExpanded && !isClosing ? 'nav-overlay--open' : '',
        isClosing ? 'nav-overlay--closing' : '',
    ].filter(Boolean).join(' ');

    return (
        <>
            <nav>
                <NavLink className="homeIcon" to="/" onClick={closeMenu}>
                    <img src={homeIcon} alt="Home" />
                </NavLink>
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
