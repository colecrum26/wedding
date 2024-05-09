import Header from "../components/header";
import { NavLink } from "react-router-dom";
import "../style/home.css";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h1>HELLO</h1>
        <img src="" alt="our best look" />
      </div>
      <div className="general-info">
        <div>
          <h2>Cole Crumrine</h2>
          <p>&</p>
          <h2>Rebecca Norwood</h2>
          <h4>May 3, 2025</h4>
          <h5>Hotel Hartness, Greenville, South Carolina</h5>
        </div>
        <div className="rsvp-container">
          <NavLink className="faux" to="/rsvp">RSVP</NavLink>
        </div>
      </div>
    </div>
  );
}
