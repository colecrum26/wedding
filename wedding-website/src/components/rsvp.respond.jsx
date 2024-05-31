import { useEffect, useState } from "react";
import "../style/rsvp.respond.css";

export default function RSVPRespond({ partyObj, guestObj }) {
  const [guest1RSVP, setGuest1RSVP] = useState({});
  const [guest2RSVP, setGuest2RSVP] = useState("");

  console.log(guestObj);

  function handleGuestResponse(e) {

    if (e.target.name === "y-rd" && e.target.value === "on")

    setGuest1RSVP({
      g1_first: guestObj.g1_first,
      g1_last: guestObj.g1_last,
      ...guest1RSVP,
        g1_attend_rd: "Yes"
    })
  }
  console.log(guest1RSVP);

  const guestInvites = partyObj.map(() => {
    if (
      partyObj[0].rd_invite === "N" &&
      partyObj[0].wp_invite === "Y" &&
      partyObj[0].c_invite === "Y" &&
      guestObj.guest2Name === " "
    ) {
      return (
        <div className="guest-invite-container">
          <p>
            <strong>{guestObj.guest1Name}</strong>
          </p>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-wp" id=""/>
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-wp" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-c" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-c" id="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      partyObj[0].rd_invite === "N" &&
      partyObj[0].wp_invite === "Y" &&
      partyObj[0].c_invite === "Y"
    ) {
      return (
        <div className="guest-invite-container">
          <p>
            <strong>{guestObj.guest1Name}</strong>
          </p>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-wp" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-wp" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-c" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-c" id="" />
              </div>
            </div>
          </div>
          <p>
            <strong>{guestObj.guest2Name}</strong>
          </p>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-wp" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-wp" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-c" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-c" id="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="guest-invite-container">
          <p>
            <strong>{guestObj.guest1Name}</strong>
          </p>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Rehearsal Dinner</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-rd" id="" onChange={handleGuestResponse}/>
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-rd" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-wp" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-wp" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-c" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-c" id="" />
              </div>
            </div>
          </div>
          <p>
            <strong>{guestObj.guest2Name}</strong>
          </p>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Rehearsal Dinner</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-rd" id="" onChange={handleGuestResponse}/>
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-rd" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-wp" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-wp" id="" />
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="y-c" id="" />
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="n-c" id="" />
              </div>
            </div>
          </div>
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
  }

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <form 
        onSubmit={confirmRSVP}
        >
          {guestInvites}
          <button className="rsvp-classbtn">Confirm RSVP</button>
        </form>
      </div>
    </div>
  );
}
