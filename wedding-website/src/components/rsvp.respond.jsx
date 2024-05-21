import { useState } from "react";
import { Form } from "react-router-dom";

export default function RSVPRespond() {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");

  function populateGuest() {
    // if (1 guest) => {return name}
    // else if (2+ guests) => {return names}
  }

  function confirmRSVP(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formData.entries();
    for (const entry of data) {
      console.log(entry);
    }
    // send response(s) to RSVP table
  }

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <form onSubmit={confirmRSVP}>
          <p>name 1</p>
          <label htmlFor="rsvp-yes">Attending</label>
          <input type="checkbox" name="rsvp-yes" id="" />
          <label htmlFor="rsvp-no">Will Not Attend</label>
          <input type="checkbox" name="rsvp-no" id="" />
          <p>name 2</p>
          <label htmlFor="rsvp-yes">Attending</label>
          <input type="checkbox" name="rsvp-yes"/>
          <label htmlFor="rsvp-no">Will Not Attend</label>
          <input type="checkbox" name="rsvp-no"/>
          <button>Confirm RSVP</button>
          </form>
      </div>
    </div>
  );
}
