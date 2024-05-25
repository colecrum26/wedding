import { useEffect, useState } from "react";

export default function RSVPRespond({guests, party, invites}) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");
  const [refinedParty, setRefinedParty] = useState([]);

  console.log(invites);

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

  const guestInvites = invites.map((occ) => {
    // refine logic of this render
    if (invites[0] === "Y" && invites[1] === "Y" && invites[2] === "Y") {
    return (
      <p>test</p>
    );
  }
  })

  const guestNames = refinedParty.map((guest) => {
    if (refinedParty.length > 1) {
    return (
      <div className="guest-rsvp-container">
        <p><strong>{guest}</strong></p>
        <div className="event-attendance">
          <p>Rehearsal Dinner</p>
          <label htmlFor="">Will Attend</label>
        <input type="checkbox" name="y-wp" id="" />
        <label htmlFor="">Will Not Attend</label>
        <input type="checkbox" name="n-wp" id="" />
        </div>
        {guestInvites}
      </div>
    )} else {
      return (
        <div className="guest-rsvp-container">
          <p><strong>{guest}</strong></p>
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
          <button className="rsvp-classbtn">Confirm RSVP</button>
          </form>
      </div>
    </div>
  );
}
