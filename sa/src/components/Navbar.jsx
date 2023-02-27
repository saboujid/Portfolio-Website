import logo from "/src/assets/Logo_white.png"
import { Link } from "react-scroll"
import menu from '../assets/menu.png'
import { BiX, BiHome, BiUser, BiCodeAlt, BiBriefcase, BiInfoCircle } from 'react-icons/bi'
import React from "react"
export default function Navbar() {
    const [active, setActive] = React.useState("Menu");
    const [toggleOpen, setToggleOpen] = React.useState("menu-open");
    const [toggleClose, setToggleClose] = React.useState("menu-close");

    function handleToggle() {
        active == "Menu" ? setActive("Menu menu-active") : setActive("Menu");
        toggleOpen == "menu-open" ? setToggleOpen("open-toggled") : setToggleOpen("menu-open");
        toggleClose == "menu-close" ? setToggleClose("close-toggled") : setToggleClose("menu-close");

    }


    return (
        <div className="Navbar">
            <img src={logo} alt="S" className="logo" />

            <div className={active}>
                <div className="menu-list">
                    <BiHome className="icons-menu" />
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><h3>Home</h3></Link>
                </div>
                <div className="menu-list">
                    <BiInfoCircle className="icons-menu" />
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><h3>About</h3></Link>
                </div>
                <div className="menu-list">
                    <BiCodeAlt className="icons-menu" />
                    <Link to="skillset" spy={true} smooth={true} offset={-80} duration={500}><h3>Skillset</h3></Link>
                </div>
                <div className="menu-list">
                    <BiUser className="icons-menu" />
                    <Link to="projects" spy={true} smooth={true} offset={-10} duration={500}><h3>Projects</h3></Link>
                </div>
                <div className="menu-list">
                    <BiBriefcase className="icons-menu" />
                    <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}><h3>Experience</h3></Link>
                </div>
            </div>
            <div className="contact">
                <button><a href="https://www.linkedin.com/in/saad-aboujid-118ba519b/" target="_blank"> Let’s Connect </a></button>
            </div>
            <BiX id={toggleClose} onClick={handleToggle}/>
            <img src={menu} id={toggleOpen} onClick={handleToggle}/>

        </div>
    )
}