import { useEffect, useState } from "react";
import "../style/rsvp.respond.css";

export default function RSVPRespond({ partyObj, guestObj }) {
  const [guest1RSVP, setGuest1RSVP] = useState("");
  const [guest2RSVP, setGuest2RSVP] = useState("");
  const [checkedResponse, setCheckedResponse] = useState([]);
  const [formData, setFormData] = useState({
    g1_first: "",
    g1_last: "",
    g2_first: "",
    g2_last: "",
    g1_attend_rd: "",
    g1_attend_wp: "",
    g1_attend_c: "",
    g2_attend_rd: "",
    g2_attend_wp: "",
    g2_attend_wp: "",
    responses: []
  });

  const handleResponse = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleCheckbox = (e) => {
    const { g1_attend_wp, checked } = e.target;
    setFormData((prevFormData) => {
      if (checked) {
        return { ...prevFormData, responses: [prevFormData.responses] }
      } else {
        return { ...prevFormData, responses: prevFormData.responses.filter((response) => response !== g1_attend_wp)}
      }
    })
  }
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5553/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.err("Error:", err);
    }
  }

  // function handleResponse(e) {
  //   if (e.target.checked) {
  //     setCheckedResponse([...checkedResponse, e.target.value]);
  //   } else {
  //     setCheckedResponse(checkedResponse.filter((item) => item !== e.target.value));
  //   }
  // }
  // console.log(checkedResponse);

  // function handleGuestResponse(e) {
  //   if (e.target.name === "y-rd" && e.target.value === "on")

  //   setGuest1RSVP({
  //     g1_first: guestObj.g1_first,
  //     g1_last: guestObj.g1_last,
  //     ...guest1RSVP,
  //       g1_attend_rd: "Yes"
  //   });
  //   setGuest2RSVP({
  //     g2_first: guestObj.g2_first,
  //     g2_last: guestObj.g2_last,
  //     ...guest2RSVP,
  //       g2_attend_rd: "Yes"
  //   });
  // }
  // console.log(guest1RSVP);
  // console.log(guest2RSVP);

  // useEffect(() => {
  //   if (guest1RSVP && guest2RSVP) {
  //     setFormData([guest1RSVP, guest2RSVP]);
  //   } else if (guest1RSVP) {
  //     setFormData([guest1RSVP]);
  //   }
  // },[guest1RSVP, guest2RSVP]);

  // console.log(formData);

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
                <input type="checkbox" name="WP-Yes" checked={formData.responses.includes('WP-Yes')} id="" onChange={handleCheckbox}/>
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="WP-No" checked={formData.responses.includes('WP-Yes')} id="" onChange={handleCheckbox}/>
              </div>
            </div>
            <div className="ind-event">
              <p>Ceremony</p>
              <div className="rsvp-checkboxes">
                <label htmlFor="">Will Attend</label>
                <input type="checkbox" name="C-Yes" id="" onChange={handleResponse}/>
                <label htmlFor="">Will Not Attend</label>
                <input type="checkbox" name="C-No" id="" onChange={handleResponse}/>
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
                <input type="checkbox" name="y-rd" id="" />
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
                <input type="checkbox" name="y-rd" id="" />
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

  // function confirmRSVP(e) {
  //   e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = formData.entries();
    // for (const entry of data) {
    //   console.log(entry);
    // }
  // }

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
