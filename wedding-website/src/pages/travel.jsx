import Nav from "../components/nav";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

export default function Travel() {
  return (
    <div className="page-container">
      <Nav />
      <div className="content-wrapper">
        <div className="travel-option">
          <FaHotel />
          <h1 className="header-main">HOTEL HARTNESS</h1>
          <a
            href="https://maps.app.goo.gl/Pn66RdexLmsiRoft7"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            120 Halston Avenue, Greenville, SC 29615
          </a>
          <p className="block">Accommodations are reserved at Hotel Hartness for the weekend. All weekend activities will be hosted here and we encourage you to book your room soon.</p>
          <NavLink
            className="faux"
            to="https://reservations.travelclick.com/111785?groupID=4449021"
            target="_blank"
            rel="noreferrer"
          >
            Book
          </NavLink>
        </div>
        <div className="travel-option">
          <FaHotel />
          <h1 className="header-main">
            HAMTPON INN GREENVILLE AIRPORT
          </h1>
          <a
            href="https://maps.app.goo.gl/ZWB7GS7M3tn8bkh87"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            128 The Parkway, Greenville, SC 29615
          </a>
          <NavLink
            className="faux special-case"
            to="https://www.guestreservations.com/hampton-inn-suites-greenville-airport/booking?gad_source=1&gbraid=0AAAAADiMQMazPyAG2Cd74euRnk3TjZyCG&ctTriggered=true"
            target="_blank"
            rel="noreferrer"
          >
            Book
          </NavLink>
        </div>
        <div className="travel-option">
          <IoIosAirplane />
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
