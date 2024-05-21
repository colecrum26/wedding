import { NavLink } from "react-router-dom";
import "../style/rsvpBtn.css";

export default function RSVPButton() {
  return (
      <NavLink className="rsvp-fauxbtn" to="/rsvp">RSVP</NavLink>
  );
}
