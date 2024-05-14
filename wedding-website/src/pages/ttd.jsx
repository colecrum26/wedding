import { NavLink } from "react-router-dom";
import Header from "../components/header";

export default function ThingsToDo() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="activities">
          <h1>PATTERSON KITCHEN + BAR</h1>
          <p>110 Halston Avenue, Greenville, SC 29615</p>
          <NavLink className="faux">View</NavLink>
        </div>
        <div className="activities">
          <h1>THE CAPTAIN AT HOTEL HARTNESS</h1>
          <p>120 Halston Avenue, Greenville, SC 29615</p>
          <NavLink className="faux">View</NavLink>
        </div>
        <div className="activities">
          <h1>SPA H</h1>
          <p>90 Traverse Drive, Greenville, SC 29615</p>
          <NavLink className="faux">View</NavLink>
        </div>
        <div className="activities">
          <h1>TOP GOLF</h1>
          <p>201 Clifton Court, Greenville, SC 29615</p>
          <NavLink className="faux">View</NavLink>
        </div>
        <div className="activities">
          <h1>BMW PERFORMANCE CENTER</h1>
          <p>1155 South Carolina 101, Greer, SC 29651</p>
          <NavLink className="faux">View</NavLink>
        </div>
        <div className="activities">
          <h1>DOWNTOWN GREENVILLE</h1>
          <p>Greenville, SC 29601</p>
          <p>
            From walking through Falls Park, to shopping on Main Street, you
            will find no shortage of things to do in Downtown Greenville. Make
            sure to take a picture on Liberty Bridge!
          </p>
        </div>
      </div>
    </div>
  );
}
