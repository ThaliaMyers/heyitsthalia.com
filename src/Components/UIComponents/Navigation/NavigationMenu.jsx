import './hamburgers.css'
import './NavigationMenu.scss'
import {useEffect } from "react";
import { NavLink} from "react-router";
import homeIcon from './home-icon-image.svg';
import {useMenuIsClosing} from "./ContextProviders/MenuIsClosingContext.tsx";
import {useMenuExpanded} from "./ContextProviders/MenuExpandedProvider.tsx";
import githubIcon from "../../.././assets/Images/Icons/Socials/github_icon.svg";
import instagramIcon from "../../.././assets/Images/Icons/Socials/instagram_icon.svg";
import githubIconGradient from "../../.././assets/Images/Icons/Socials/github_icon_gradient.svg";
import instagramIconGradient from "../../.././assets/Images/Icons/Socials/instagram_icon_gradient.svg";


export default function NavigationMenu() {
    const [menuExpanded, setMenu] = useMenuExpanded();
    const [isClosing, setIsClosing] = useMenuIsClosing();
    
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
                                <NavLink to="/" onClick={closeMenu} viewTransition>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" onClick={closeMenu} viewTransition>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutme" onClick={closeMenu} viewTransition>About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={closeMenu} viewTransition>Contact</NavLink>
                            </li>
                            <li className={"socialsRow"}>
                                <div className={"socialsContainer"}>
                                    <a href={"https://github.com/ThaliaMyers"} className={"socialsIconLink"}>
                                        <img src={githubIcon} className={"socialsIcon"}/>
                                    </a>
                                    <a href={"https://github.com/ThaliaMyers"} className={"socialsIconLink"}>
                                        <img src={githubIconGradient} className={"overlaySocialsIcon"}/>
                                    </a>
                                </div>
                                <div className={"socialsContainer"}>
                                    <a href={"https://www.instagram.com/heyitsthaliamyers"} className={"socialsIconLink"}>
                                        <img src={instagramIcon} className={"socialsIcon"}/>
                                    </a>
                                    <a href={"https://www.instagram.com/heyitsthaliamyers"} className={"socialsIconLink"}>
                                        <img src={instagramIconGradient} className={"overlaySocialsIcon"}/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}
