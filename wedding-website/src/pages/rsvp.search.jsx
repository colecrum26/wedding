import { useState } from "react";
import Header from "../components/header";
import RSVPRespond from "./rsvp.respond";

export default function RSVPSearch() {
  const [showComponent, setShowComponent] = useState(false);

  function handleClick() {
    setShowComponent(true);
  }

  return (
    <div>
      <Header />
      <h1>RSVP</h1>
      <div className="rsvp-dialogue">
        <p>
          Please enter the first and last name of one member of your party
          below. You'll be able to RSVP for you and a guest (or your family) on the
          next page.
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
