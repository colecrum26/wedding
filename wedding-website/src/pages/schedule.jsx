import Header from "../components/header";

export default function Schedule() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="events">
          <h1 className="header-name">FRIDAY, MAY 2, 2025</h1>
          <h1>Rehearsal Dinner</h1>
          <p>6:00pm - 8:00pm</p>
          <p>Hans & Franz Biergarten</p>
          <a href="https://maps.app.goo.gl/u9faBurUW4bbZvHh6" className="address-link">3124 South Carolina 14, Greenvile, SC 29615</a>
          <p>Attire: Casual Cocktail</p>
          <h1>Welcome Party</h1>
          <p>8:00pm - 10:00pm</p>
          <p>The Captain at Hotel Hartness</p>
          <a href="https://maps.app.goo.gl/DXcL6Mjs8DtGCsM19" className="address-link">120 Halston Avenue, Greenville, SC 29615</a>
          <p>Attire: Casual Cocktail</p>
        </div>
        <div className="events">
          <h1 className="header-name">SATURDAY, MAY 3, 2025</h1>
          <h1>Ceremony & Reception</h1>
          <p>6:00pm - 11:00pm</p>
          <p>Hotel Hartness</p>
          <a href="https://maps.app.goo.gl/DXcL6Mjs8DtGCsM19" className="address-link">120 Halston Avenue, Greenville, SC 29615</a>
          <p>Attire: Black Tie</p>
          <h1>After Party</h1>
          <p>11:00pm - 12:30am</p>
          <p>The Captain at Hotel Hartness</p>
          <a href="https://maps.app.goo.gl/DXcL6Mjs8DtGCsM19" className="address-link">120 Halston Avenue, Greenville, SC 29615</a>
        </div>
      </div>
    </div>
  );
}
