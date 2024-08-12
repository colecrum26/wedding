import { useState } from "react"
import Hamburger from "./hamburger"

export default function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }



    return (
        <div className="nav-test">
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </div>

            <style jsx>{`
                .nav-test {
                    width: 100%;
                }

                .navigation {
                    display: block;
                    width: 100%;
                    height: 50px;
                    background-color: blue;
                }

                .navigation ul {
                    display: flex;
                    flex-wrap: wrap;
                    align-self: flex-end;
                    float: right;
                    margin: 10px 0;
                    padding: 0 25px;
                }

                .navigation ul li {
                    list-style-type: none;
                    padding-right: 10px;
                }

                .hamburger {
                    display: none;
                    z-index: 6;
                }

                @media (max-width: 767px) {
                    .hamburger {
                        display: flex;
                        // padding-top: 10px;
                        // margin-left: 10px;
                        // z-index: 10;
                    }

                    .navigation ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: fixed;
                    }
                }


            `}               
            </style>
        </div>
    )
}