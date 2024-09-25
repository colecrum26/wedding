import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/rsvp.respond.css";

export default function RSVPRespond({ partyObj, guestObj }) {
  const [formData, setFormData] = useState({
    g1_first: guestObj.g1_first,
    g1_last: guestObj.g1_last,
    g2_first: guestObj.g2_first,
    g2_last: guestObj.g2_last,
    g1_attend_rd: "",
    g1_attend_wp: "",
    g1_attend_c: "",
    g2_attend_rd: "",
    g2_attend_wp: "",
    g2_attend_c: ""
  });

  const handleResponse = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked ? "Yes" : "No"
      });
  }

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("https://wedding-guestlist-production.up.railway.app/api/guests/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
    navigate("/rsvp-submitted");
  }

  const guestInvites = partyObj.map(() => {
    if (
      partyObj[0].rd_invite === "Y" &&
      partyObj[0].wp_invite === "Y" &&
      partyObj[0].c_invite === "Y" &&
      guestObj.guest2Name === " "
    ) {
      return (
        <div className="guest-invite-container">
          <p>Note: If you are not planning on attending, please leave the selection(s) blank and click Confirm RSVP.</p>
          <h3 className="rsvp-guest">{guestObj.guest1Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Rehearsal Dinner</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_rd">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_rd" id="g1_attend_rd" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_wp" id="g1_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_c" id="g1_attend_c" onChange={handleResponse}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (
      partyObj[0].rd_invite === "N" &&
      partyObj[0].wp_invite === "Y" &&
      partyObj[0].c_invite === "Y" &&
      guestObj.guest2Name === " "
    ) {
      return (
        <div className="guest-invite-container">
          <p>Note: If you are not planning on attending, please leave the selection(s) blank and then click Confirm RSVP.</p>
          <h3 className="rsvp-guest">{guestObj.guest1Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_wp" id="g1_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_c" id="g1_attend_c" onChange={handleResponse}/>
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
          <p>Note: If you are not planning on attending, please leave the selection(s) blank and click Confirm RSVP.</p>
          <h3 className="rsvp-guest">{guestObj.guest1Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_wp" id="g1_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_c" id="g1_attend_c" onChange={handleResponse}/>
              </div>
            </div>
          </div>
          <h3 className="rsvp-guest">{guestObj.guest2Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g2_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g2_attend_wp" id="g2_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g2_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g2_attend_c" id="g2_attend_c" onChange={handleResponse}/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="guest-invite-container">
          <p>Note: If you are not planning on attending, please leave the selection(s) blank and click Confirm RSVP.</p>
          <h3 className="rsvp-guest">{guestObj.guest1Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Rehearsal Dinner</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_rd">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_rd" id="g1_attend_rd" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_wp" id="g1_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g1_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g1_attend_c" id="g1_attend_c" onChange={handleResponse}/>
              </div>
            </div>
          </div>
          <h3 className="rsvp-guest">{guestObj.guest2Name}</h3>
          <div className="event-attendance-container">
            <div className="ind-event">
              <p>Rehearsal Dinner</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g2_attend_rd">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g2_attend_rd" id="g2_attend_rd" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Welcome Party</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g2_attend_wp">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g2_attend_wp" id="g2_attend_wp" onChange={handleResponse}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="g2_attend_c">Will Attend</label>
                <input type="checkbox" className="rsvp-check" name="g2_attend_c" id="g2_attend_c" onChange={handleResponse}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          {guestInvites}
          <button className="rsvp-classbtn" type="submit">Confirm RSVP</button>
        </form>
      </div>
    </div>
  );
}
