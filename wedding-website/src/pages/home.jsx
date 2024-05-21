import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <img src="" alt="our best look" />
        <div className="info-container">
          <div className="general-info">
            <h1 className="header-main">REBECCA NORWOOD</h1>
            <p className="info-amper">and</p>
            <h1 className="header-main">COLE CRUMRINE</h1>
          </div>
          <div className="rsvp-container">
            <h2>May 3, 2025</h2>
            <h3>Hotel Hartness, Greenville, South Carolina</h3>
            <NavLink className="faux" to="/rsvp">
              RSVP
            </NavLink>
          </div>
        </div>
      <RSVPButton />
      </div>
    </div>
  );
}
