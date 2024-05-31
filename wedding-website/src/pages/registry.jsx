import { NavLink } from "react-router-dom";
import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";

export default function Registry() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h3>We'll post our registry here as soon as we finish building it!</h3>
        <NavLink
          to="/https://www.williams-sonoma.com/registry/jp2xlwtlrt/registry-list.html"
          target="_blank"
          rel="noreferrer"
        >
          Williams Sonoma
        </NavLink>
      </div>
      <RSVPButton />
    </div>
  );
}
