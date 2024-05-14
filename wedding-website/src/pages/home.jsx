import Header from "../components/header";
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
            <p>and</p>
            <h1 className="header-main">COLE CRUMRINE</h1>
            <h3>May 3, 2025</h3>
            <h4>Hotel Hartness, Greenville, South Carolina</h4>
          </div>
          <div className="rsvp-container">
            <NavLink className="faux" to="/rsvp">
              RSVP
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
