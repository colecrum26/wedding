import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";

export default function Schedule() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="events">
          <h1 className="header-main">FRIDAY, MAY 2, 2025</h1>
          <h1 className="event-title">Rehearsal Dinner</h1>
          <p id="io-note">(Invitation Only)</p>
          <p className="event-time">6:00pm - 8:00pm</p>
          <p>Patterson Kitchen & Bar</p>
          <a
            href="https://maps.app.goo.gl/P1DLLtYHZG9etaMW8"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            110 Halston Avenue, Greenvile, SC 29615
          </a>
          <p className="attire">Attire: Cocktail</p>
          <h1 className="event-title">Welcome Party</h1>
          <p className="event-time">8:00pm - 10:00pm</p>
          <p>Hotel Hartness</p>
          <a
            href="https://maps.app.goo.gl/P1DLLtYHZG9etaMW8"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            110 Halston Avenue, Greenville, SC 29615
          </a>
          <p className="attire">Attire: Cocktail</p>
        </div>
        <div className="events">
          <h1 className="header-main">SATURDAY, MAY 3, 2025</h1>
          <h1 className="event-title">Ceremony & Reception</h1>
          <p className="event-time">6:00pm - 11:00pm</p>
          <p>Hotel Hartness</p>
          <a
            href="https://maps.app.goo.gl/DXcL6Mjs8DtGCsM19"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            120 Halston Avenue, Greenville, SC 29615
          </a>
          <p className="attire">Attire: Black Tie</p>
          <h1 className="event-title">After Party</h1>
          <p className="event-time">11:00pm - 12:30am</p>
          <p>The Captain at Hotel Hartness</p>
          <a
            href="https://maps.app.goo.gl/DXcL6Mjs8DtGCsM19"
            className="address-link"
            target="_blank"
            rel="noreferrer"
          >
            120 Halston Avenue, Greenville, SC 29615
          </a>
        </div>
      </div>
      <RSVPButton />
    </div>
  );
}
