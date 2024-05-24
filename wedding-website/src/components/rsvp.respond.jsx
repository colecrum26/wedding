import { useEffect, useState } from "react";

export default function RSVPRespond({guests, party}) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");
  const [refinedParty, setRefinedParty] = useState([]);

  function checkBlank() {
    if (party[1] === " ") {
      setRefinedParty((party.slice(0, 1)));
    } else {
      setRefinedParty(party);
    }
  }

  useEffect(() => {
    checkBlank();
  }, []);

  const guestNames = refinedParty.map((guest) => {
    if (refinedParty.length > 1) {
    return (
      <div className="guest-rsvp-container">
        <p>{guest}</p>
        {/* two rows per event (Y/N) */}
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </div>
    )} else {
      return (
        <div className="guest-rsvp-container">
          <p>{guest}</p>
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
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
          <button className="rsvp-classbtn">Confirm RSVP</button>
          </form>
      </div>
    </div>
  );
}
