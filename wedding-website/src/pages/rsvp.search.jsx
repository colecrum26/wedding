import { useEffect, useState } from "react";
// import useNavigate;
import Header from "../components/header";
import RSVPRespond from "../components/rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  const [searchedParty, setSearchedParty] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  console.log(guestList);
  console.log(searchedParty);

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

  function handleSearch(e) {
    e.preventDefault();
    if (guestList.includes(searchedParty)) {
      console.log("Success");
      setShowComponent(true);
    } else {
      console.log("Sorry, no invite");
    }
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
        <form action="" >
          <input
            type="text"
            onChange={(e) => {setSearchedParty(e.target.value)}}
          />
          <span>
            E.g. Johnny Appleseed, (not The Appleseeds or Mr. and Mrs.
            Appleseed)
          </span>
          <button onClick={handleSearch}>Continue</button>
          <div>{showComponent && <RSVPRespond guests={guestList} />}</div>
        </form>
      </div>
    </div>
  );
}
