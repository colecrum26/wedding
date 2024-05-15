import { useEffect, useState } from "react";
import Header from "../components/header";
import RSVPRespond from "./rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  const [guestName, setGuestName] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  // async function searchGuest() {
  //   try {
  //     let response = await fetch("url-goes-here");
  //     let result = await response.json();
  //     setGuestList(result);
  //   }
  //   catch(err) {
  //     alert(err);
  //   }
  // }

  function handleClick() {
    setShowComponent(true);
  }

  // let guests = getListOf(list, "guest1");

  // useEffect(() => {
  //   searchGuest();
  // }, []);

  return (
    <div>
      <Header />
      <h1>RSVP</h1>
      <div className="rsvp-dialogue">
        <p className="instructions">
          Please enter the first and last name of one member of your party
          below. You'll be able to RSVP for you and a guest (or your family).
        </p>
        <input type="text" />
        <span>E.g. Johnny Appleseed, (not The Appleseeds or Mr. and Mrs. Appleseed)</span>
        <button onClick={handleClick}>Continue</button>
        <div>
          {showComponent && <RSVPRespond />}
        </div>
      </div>
    </div>
  );
}
