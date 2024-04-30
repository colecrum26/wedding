import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <h1 className="header-title"><NavLink>REBECCA & COLE</NavLink></h1>
                <ul className="nav-links">
                    <li className="nav-item"><NavLink>Schedule</NavLink></li>
                    <li className="nav-item"><NavLink>Travel</NavLink></li>
                    <li className="nav-item"><NavLink>Registry</NavLink></li>
                    <li className="nav-item"><NavLink>Gallery</NavLink></li>
                    <li className="nav-item"><NavLink>Wedding Party</NavLink></li>
                    <li className="nav-item"><NavLink>Things to Do</NavLink></li>
                    <li className="nav-item"><NavLink>FAQ</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;