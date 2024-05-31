import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";

export default function Registry() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h1 className="registry-loc">WILLIAMS SONOMA</h1>
        <NavLink
          className="faux"
          to="https://www.williams-sonoma.com/registry/jp2xlwtlrt/registry-list.html"
          target="_blank"
          rel="noreferrer"
        >
          View
        </NavLink>
      </div>
      <RSVPButton />
    </div>
  );
}
