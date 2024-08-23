import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./hamburger";
import "../style/nav.css";

export default function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }



    return (
        <header>
            <nav>
                <div className="nav-bar">   
                    <h1 className="page-top"><NavLink to="/" id="header-title">REBECCA & COLE</NavLink></h1>
                        <div className="navigation">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/schedule">Schedule</NavLink></li>
                                <li><NavLink to="/travel">Travel</NavLink></li>
                                <li><NavLink to="/registry">Registry</NavLink></li>
                                <li><NavLink to="/gallery">Gallery</NavLink></li>
                                <li><NavLink to="/wedding-party">Wedding Party</NavLink></li>
                                <li><NavLink to="/things-to-do">Things to Do</NavLink></li>
                                <li><NavLink to="/questions">FAQ</NavLink></li>
                            </ul>
                            <div className="hamburger" onClick={toggleHamburger}>
                                <Hamburger />
                            </div>
                        </div>
            

            <style jsx>{`


                @media (max-width: 767px) {
                    .hamburger {
                        display: flex;
                        align-self: flex-start;
                        margin-left: 5px;
                        z-index: 10;
                    }

                    .navigation ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: var(--primary-background);
                        border: 1px solid var(--accent-darkGold);
                        border-radius: 2px;
                        margin-top: 50px;
                        position: absolute;
                    }

                    .navigation ul li {
                        padding: 5px 0;
                    }
                }


            `}               
            </style>
                </div>
            </nav>
        </header>
    )
}