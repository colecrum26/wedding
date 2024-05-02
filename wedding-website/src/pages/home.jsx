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
            <div>&</div>
        <div className="rsvp-name">
            <h2>Rebecca Norwood</h2>
        </div>
      </div>
    </div>
  );
}
