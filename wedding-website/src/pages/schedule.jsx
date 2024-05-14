import Header from "../components/header";

export default function Schedule() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="activities">
          <h1>FRIDAY, MAY 2, 2025</h1>
          <h3>Rehearsal Dinner</h3>
          <h4>(Invitation Only)</h4>
          <p>6:00pm - 8:00pm</p>
          <p>Hans & Franz Biergarten</p>
          <a href="">3124 South Carolina 14, Greenvile, SC 29615</a>
          <p>Attire: Dressy Casual</p>
        </div>
        <div className="activities">
          <h1>SATURDAY, MAY 3, 2025</h1>
          <h3>Ceremony & Reception</h3>
          <p>6:00pm - 11:00pm</p>
          <p>Hotel Hartness</p>
          <a href="">120 Halston Avenue, Greenville, SC 29615</a>
          <p>Attire: Black Tie</p>
          <h3>After Party</h3>
          <p>11:00pm (5/3/2024) - 12:30am (5/4/2024)</p>
        </div>
      </div>
    </div>
  );
}
