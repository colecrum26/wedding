import Header from "../components/header";
import "../style/home.css";

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h1>HELLO</h1>
        <img src="" alt="our best look" />
      </div>
      <div className="rsvp-dialogue">
        <div className="rsvp-name">
          <h2>Cole Crumrine</h2>
        </div>
        <p>&</p>
        <div className="rsvp-name">
          <h2>Rebecca Norwood</h2>
        </div>
        <div className="rsvp-info">
          <h4>May 3, 2025</h4>
          <h5>Hotel Hartness, Greenville, South Carolina</h5>
          <button>RSVP</button>
        </div>
      </div>
    </div>
  );
}
