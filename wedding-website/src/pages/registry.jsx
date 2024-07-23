import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";

export default function Registry() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="registry-host">
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
        <div className="registry-host">
        <h1 className="registry-loc">CRATE & BARREL</h1>
        <NavLink
          className="faux"
          to="https://www.crateandbarrel.com/gift-registry/rebecca-norwood-and-cole-crumrine/r7145067"
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
