import { useEffect, useState } from "react";
// import useNavigate;
import Header from "../components/header";
import RSVPRespond from "../components/rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [guestParty, setGuestParty] = useState([]);
  const [guest1, setGuest1] = useState([]);
  const [guest2, setGuest2] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  console.log(guestList);

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

  function createParties() {
    for (let party of guestList) {
      console.log(party.g1_first);
    }
  }


  function handleSearch(e) {
    e.preventDefault();
    // reevaluate loop
    for (let party of guestList) {
      if (party.g1_first + " " + party.g1_last === searchedName ||
          party.g2_first + " " + party.g2_last === searchedName
      ) {
        console.log("Success");
        setShowComponent(true);
      } else {
        console.log("Sorry, no invite")
      }
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
          <div className="form-el-wrapper">
            <input
              type="text"
              onChange={(e) => {setSearchedName(e.target.value)}}
            />
          </div>
          <div className="form-el-wrapper">
            <span>
              E.g. Johnny Appleseed, (not The Appleseeds or Mr. and Mrs.
              Appleseed)
            </span>
          </div>
          <div className="form-el-wrapper wbtn">
            <button className="rsvp-searchbtn" onClick={handleSearch}>Continue</button>
          </div>
          <div>{showComponent && <RSVPRespond guests={guestList} />}</div>
        </form>
      </div>
    </div>
  );
}
