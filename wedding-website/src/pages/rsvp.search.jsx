import { useEffect, useState } from "react";
import Nav from "../components/nav";
import RSVPRespond from "../components/rsvp.respond";

export default function RSVPSearch() {
  const [guestList, setGuestList] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [guestObj, setGuestObj] = useState({});
  const [partyObj, setPartyObj] = useState([{}]);
  const [showComponent, setShowComponent] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");

  async function searchGuest() {
    try {
      let response = await fetch("https://wedding-guestlist-production.up.railway.app/api/guests", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    for (let party of guestList) {
      if (`${party.g1_first} ${party.g1_last}` === searchedName ||
          `${party.g2_first} ${party.g2_last}` === searchedName )
       {
        setGuestObj({
          g1_first: `${party.g1_first}`,
          g1_last: `${party.g1_last}`,
          guest1Name: `${party.g1_first} ${party.g1_last}`,
          g2_first: `${party.g2_first}`,
          g2_last: `${party.g2_last}`,
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
        setShowComponent(false);
        setDisplayMessage("Sorry, we were unable to find your invitation.")
      }
    }
  }

  return (
    <div>
      <Nav />
      <h1>RSVP</h1>
      <div className="rsvp-dialogue">
        <p className="instructions">
          Please enter the first and last name of one member of your party
          below. 
        </p>
        <p className="instructions">You'll be able to RSVP for you and a guest (or your family) from this page.</p>
          <div className="form-el-wrapper">
            <input
              type="text"
              autoCapitalize="words"
              onChange={(e) => {setSearchedName(e.target.value.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase()))}}
            />
          </div>
          <div className="form-el-wrapper">
            <span className="eg-search">
              (E.g. Johnny Appleseed, not The Appleseeds or Mr. and Mrs.
              Appleseed)
            </span>
          </div>
          <div className="form-el-wrapper wbtn">
            <button className="rsvp-classbtn" onClick={handleSearch}>Continue</button>
          </div>
          <div>{showComponent === true ? showComponent && <RSVPRespond partyObj={partyObj} guestObj={guestObj} list={guestList}/> : displayMessage }</div>
        <p className="instructions rsvp">For questions or concerns, please contact the couple directly.</p>
      </div>
    </div>
  );
}
