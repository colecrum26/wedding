import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";

export default function Travel() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="travel-option">
          <span>Hotel</span>
          {/* adjust margin somewhere */}
          <h1 className="header-main">HOTEL HARTNESS</h1>
          <a
            href="https://maps.app.goo.gl/Pn66RdexLmsiRoft7"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            120 Halston Avenue, Greenville, SC 29615
          </a>
          <p className="block">Room blocks are reserved under Norwood-Crumrine Wedding</p>
          <p className="block">Discount Code: NorwoodCrumrine</p>
          <NavLink
            className="faux"
            to="https://www.hotelhartness.com/"
            target="_blank"
            rel="noreferrer"
          >
            View
          </NavLink>
        </div>
        <div className="travel-option">
          <span>Hotel</span>
          <h1 className="header-main">
            COURTYARD GREENVILLE-SPARTANBURG AIRPORT
          </h1>
          <a
            href="https://maps.app.goo.gl/By7KX6N7Mr9gFVg96"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            115 The Parkway, Greenville, SC 29615
          </a>
          <NavLink
            className="faux special-case"
            to="https://www.marriott.com/en-us/hotels/gspph-courtyard-greenville-spartanburg-airport/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
            target="_blank"
            rel="noreferrer"
          >
            View
          </NavLink>
        </div>
        <div className="travel-option">
          <span>Flight</span>
          <h1 className="header-main">
            GREENVILLE-SPARTANBURG INT'L AIRPORT (GSP)
          </h1>
          <NavLink
            className="faux"
            to="https://gspairport.com/"
            target="_blank"
            rel="noreferrer"
          >
            View
          </NavLink>
        </div>
      </div>
      <RSVPButton />
    </div>
  );
}
