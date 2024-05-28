import { useEffect, useState } from "react";

export default function RSVPRespond({ partyObj, guestObj, guests, invites }) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");

  console.log(guestObj);
  console.log(partyObj);
  console.log(partyObj[0].rd_invite);

  const guestInvites = partyObj.map(() => {
    // work on this function - evaluate whether to just make one for names + invites
    if (
      partyObj[0].rd_invite === "Y" &&
      partyObj[0].wp_invite === "Y" &&
      partyObj[0].c_invite === "Y"
    ) {
      return <p>BOOYAH</p>;
    }
  });

  // const guestInvites = invites.map((occ) => {
  //   // refine logic of this render
  //   if (occ === "Y") {
  //     return (
  //       <div className="event-container">
  //           <h4>{guests[0]}</h4>
  //         <div className="event-attendance">
  //           <p>Rehearsal Dinner</p>
  //           <label htmlFor="">Will Attend</label>
  //           <input type="checkbox" name="y-wp" id="" />
  //           <label htmlFor="">Will Not Attend</label>
  //           <input type="checkbox" name="n-wp" id="" />
  //         </div>
  //         <div className="event-attendance">
  //           <p>Welcome Party</p>
  //           <label htmlFor="">Will Attend</label>
  //           <input type="checkbox" name="y-wp" id="" />
  //           <label htmlFor="">Will Not Attend</label>
  //           <input type="checkbox" name="n-wp" id="" />
  //         </div>
  //         <div className="event-attendance">
  //           <p>Ceremony</p>
  //           <label htmlFor="">Will Attend</label>
  //           <input type="checkbox" name="y-wp" id="" />
  //           <label htmlFor="">Will Not Attend</label>
  //           <input type="checkbox" name="n-wp" id="" />
  //         </div>
  //       </div>
  //     );
  //   }
  // });

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
          {guestInvites}
          <button className="rsvp-classbtn">Confirm RSVP</button>
        </form>
      </div>
    </div>
  );
}
