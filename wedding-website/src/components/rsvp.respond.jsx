import { useEffect, useState } from "react";

export default function RSVPRespond({ party, invites }) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");
  const [refinedParty, setRefinedParty] = useState([]);
  const [guest1Obj, setGuest1Obj] = useState({});
  const [guest2Obj, setGuest2Obj] = useState({});

  console.log(invites);
  console.log(refinedParty);

  function checkSolo() {
    if (party[1] === " ") {
      setRefinedParty(party.slice(0, 1));
    } else {
      setRefinedParty(party);
    }
  }

  function createGuest1() {
    for (let i = 0; i < refinedParty.length; i++) {
      setGuest1Obj({
        guestName: refinedParty[0],
        rd_invite: invites[0],
        wp_invite: invites[1],
        c_invite: invites[2]
      });
    }
  }

  function createGuest2() {
    for (let i = 0; i < refinedParty.length; i++) {
      setGuest1Obj({
        guestName: refinedParty[1],
        rd_invite: invites[0],
        wp_invite: invites[1],
        c_invite: invites[2]
      });
    }
  }

  useEffect(() => {
    createGuest1();
    createGuest2();
    checkSolo();
  }, []);



  console.log(guest1Obj);
  console.log(guest2Obj);

  const guestInvites = invites.map((occ) => {
    // refine logic of this render
    if (occ === "Y") {
      return (
        <div className="event-container">
          <div className="event-attendance">
            <p>Rehearsal Dinner</p>
            <label htmlFor="">Will Attend</label>
            <input type="checkbox" name="y-wp" id="" />
            <label htmlFor="">Will Not Attend</label>
            <input type="checkbox" name="n-wp" id="" />
          </div>
          <div className="event-attendance">
            <p>Welcome Party</p>
            <label htmlFor="">Will Attend</label>
            <input type="checkbox" name="y-wp" id="" />
            <label htmlFor="">Will Not Attend</label>
            <input type="checkbox" name="n-wp" id="" />
          </div>
          <div className="event-attendance">
            <p>Ceremony</p>
            <label htmlFor="">Will Attend</label>
            <input type="checkbox" name="y-wp" id="" />
            <label htmlFor="">Will Not Attend</label>
            <input type="checkbox" name="n-wp" id="" />
          </div>
        </div>
      );
    }
  });

  const guestNames = refinedParty.map((guest) => {
    if (refinedParty.length > 1) {
      return (
        <div className="guest-rsvp-container">
          <p>
            <strong>{guest}</strong>
          </p>
        </div>
      );
    } else {
      return (
        <div className="guest-rsvp-container">
          <p>
            <strong>{guest}</strong>
          </p>
        </div>
      );
    }
  });

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
          {guestInvites}
          <button className="rsvp-classbtn">Confirm RSVP</button>
        </form>
      </div>
    </div>
  );
}
