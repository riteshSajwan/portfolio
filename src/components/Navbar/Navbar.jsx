import React from 'react';
import './Navbar.css'
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./../../images/uparrow.svg"

const Navbar = () => {

    const navSlide = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    } 

    return (
        <>
            <div className='uparrow'>
                <ScrollToTop smooth color='black' component={<MySVG />}/>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="/">Portfo<span>lio.</span></a></div>
                    <a className="toggle-button" onClick={navSlide}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <a href="#home" className="menu-btn"><i className="fa-solid fa-house"></i>Home</a>
                            </li>

                            <li>
                                <a href="#about" className="menu-btn"><i className="fa-solid fa-address-card"></i>About</a>
                            </li>
                            
                            <li>
                                <a href="#projects" className="menu-btn"><i className="fa-solid fa-award"></i>Projects</a>
                            </li>
                            
                            <li>
                                <a href="#about" className="menu-btn"><i className="fa-solid fa-laptop-code"></i>Skills</a>
                            </li>
                            
                            <li>
                                <a href="#education" className="menu-btn"><i className="fa-solid fa-book-open"></i>Education</a>
                            </li>
                            
                            <li>
                                <a href="#contact" className="menu-btn"><i className="fa-solid fa-message"></i>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
