import { NavLink } from "react-router-dom";
import "../style/header.css";

function Header() {
    return (
        <header>
            <nav>
                <h1 className="header-main page-top"><NavLink to="/" id="header-title">REBECCA & COLE</NavLink></h1>
                <ul className="nav-links">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/schedule">Schedule</NavLink></li>
                    <li className="nav-item"><NavLink to="/travel">Travel</NavLink></li>
                    <li className="nav-item"><NavLink to="/registry">Registry</NavLink></li>
                    <li className="nav-item"><NavLink to="/gallery">Gallery</NavLink></li>
                    <li className="nav-item"><NavLink to="/wedding-party">Wedding Party</NavLink></li>
                    <li className="nav-item"><NavLink to="/things-to-do">Things to Do</NavLink></li>
                    <li className="nav-item"><NavLink to="/questions">FAQ</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;