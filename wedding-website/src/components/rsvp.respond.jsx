import { useEffect, useState } from "react";

export default function RSVPRespond({guests, party}) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");

  console.log(guests);
  console.log(party);


  // async function populateGuest() {
  //   return await guests.map((guest) => {
  //     setGuest1(guest.g1_first + " " + guest.g1_last);
  //     console.log(guest1);
  //   })
  // }

  function confirmRSVP(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formData.entries();
    for (const entry of data) {
      console.log(entry);
    }
    // send response(s) to RSVP table
  }


  // useEffect(() => {
  //   populateGuest();
  // }, []);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <form onSubmit={confirmRSVP}>
          


          
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
