import Nav from "../components/nav";
import RSVPButton from "../components/rsvpBtn";
import { NavLink } from "react-router-dom";

export default function Registry() {
  return (
    <div className="page-container">
      <Nav />
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
        <div className="registry-host">
          <h1 className="registry-loc">A'MANO</h1>
          <NavLink 
            className="faux"
            to="https://shopamanogifts.com/apps/giftregistry/registry/339154?_r=1&utm_source=gift_reggie&utm_medium=gift_reggie&utm_campaign=gift_reggie&utm_content=339154"
            target="blank"
            rel="noreferrer"
          >
            View
          </NavLink>
        </div>
        <div className="registry-host">
        <h1 className="registry-loc">THE SHOPS OF PROVENCE</h1>
        <NavLink
          className="faux"
          to="https://provence.myshoplocal.com/registry.cfm/47782/Norwood_Crumrine/May-03-2025"
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
