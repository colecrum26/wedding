import { useEffect, useState } from "react";

export default function RSVPRespond({guests, party}) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");

  console.log(guests);
  console.log(party);

  const guestNames = party.map((guest) => {
    console.log(guest);
    console.log(party[0]);
    if (party.length > 1) {
    return (
      <div>
        <p>{guest}</p>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </div>
    )} else {
      return (
        <div>
          <p>{guest}</p>
        </div>
      )
    }
  })

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
          
          {guestNames}

          
          {/* <p>name 1</p>
          <label htmlFor="rsvp-yes">Attending</label>
          <input type="checkbox" name="rsvp-yes" id="" />
          <label htmlFor="rsvp-no">Will Not Attend</label>
          <input type="checkbox" name="rsvp-no" id="" />
          <p>name 2</p>
          <label htmlFor="rsvp-yes">Attending</label>
          <input type="checkbox" name="rsvp-yes"/>
          <label htmlFor="rsvp-no">Will Not Attend</label>
          <input type="checkbox" name="rsvp-no"/> */}
          <button>Confirm RSVP</button>
          </form>
      </div>
    </div>
  );
}
