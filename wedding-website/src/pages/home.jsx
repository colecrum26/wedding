import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import Countdown from "../components/countdown";
import { NavLink } from "react-router-dom";
import bestLook from "../assets/IMG_4135.JPG"

export default function Home() {
  return (
    <div className="page-container">
      <Header />
        <h1>May 3, 2025</h1>
      <div className="content-wrapper">
        <img src={bestLook} alt="our best look" id="" />
        <div className="info-container">
          <div className="general-info">
            <h1 className="header-main">REBECCA NORWOOD</h1>
            <p className="info-amper">and</p>
            <h1 className="header-main">COLE CRUMRINE</h1>
          </div>
          <div className="rsvp-container">
            <Countdown />
            <h3>Hotel Hartness, Greenville, South Carolina</h3>
            <NavLink className="faux" to="/rsvp">
              RSVP
            </NavLink>
          </div>
        </div>
      </div>
      <RSVPButton />
    </div>
  );
}
