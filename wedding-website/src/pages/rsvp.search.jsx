import { useEffect, useState } from "react";
import Header from "../components/header";
import RSVPRespond from "../components/rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [guestObj, setGuestObj] = useState({});
  const [partyObj, setPartyObj] = useState([{}]);
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

  useEffect(() => {
    searchGuest();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    // reevaluate loop
    for (let party of guestList) {
      if (`${party.g1_first} ${party.g1_last}` === searchedName ||
          `${party.g2_first} ${party.g2_last}` === searchedName )
       {
        console.log("Success");
        setGuestObj({
          guest1Name: `${party.g1_first} ${party.g1_last}`,
          guest2Name: `${party.g2_first} ${party.g2_last}`
        })
        setPartyObj([{
          rd_invite: `${party.rd_invite}`,
          wp_invite: `${party.wp_invite}`,
          c_invite: `${party.c_invite}`
        }]);
        setShowComponent(true);
        break;
      } else {
        console.log("Sorry, no invite")
      }
    }
  }

  return (
    <div>
      <Header />
      <h1>RSVP</h1>
      <div className="rsvp-dialogue">
        <p className="instructions">
          Please enter the first and last name of one member of your party
          below. 
        </p>
        <p className="instructions">You'll be able to RSVP for you and a guest (or your family).</p>
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
            <button className="rsvp-classbtn" onClick={handleSearch}>Continue</button>
          </div>
          <div>{showComponent && <RSVPRespond partyObj={partyObj} guestObj={guestObj} />}</div>
        </form>
        <p>For questions or concerns, please contact the couple directly.</p>
      </div>
    </div>
  );
}
