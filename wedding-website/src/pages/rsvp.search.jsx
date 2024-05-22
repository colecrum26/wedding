import { useEffect, useState } from "react";
// import useNavigate;
import Header from "../components/header";
import RSVPRespond from "../components/rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  // const [searchedParty, setSearchedParty] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  async function searchGuest() {
    try {
      let response = await fetch("http://localhost:5553/api/guests");
      let result = await response.json();
      console.log(result);
      setGuestList(result);
    } catch (err) {
      alert(err);
    }
  }


  function handleClick() {
    // if (guestList includes guestName => {})
    setShowComponent(true);
    // else => "We cannot find your name." etc etc
  }

  useEffect(() => {
    searchGuest();
  }, []);

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
        <span>
          E.g. Johnny Appleseed, (not The Appleseeds or Mr. and Mrs. Appleseed)
        </span>
        <button onClick={handleClick}>Continue</button>
        <div>{showComponent && <RSVPRespond guests={guestList} />}</div>
      </div>
    </div>
  );
}
