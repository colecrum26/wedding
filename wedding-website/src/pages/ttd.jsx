import { NavLink } from "react-router-dom";
import Header from "../components/header";

export default function ThingsToDo() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="activities">
          <h1 className="header-main">
            PATTERSON <br />
            KITCHEN + BAR
          </h1>
          <p>110 Halston Avenue, Greenville, SC 29615</p>
          <p>
            A contemporary American restaurant with Southern and International
            influences. Reservation required.
          </p>
          <NavLink
            className="faux"
            to="https://www.hotelhartness.com/experiences/dine"
            target="_blank"
          >
            View
          </NavLink>
        </div>
        <div className="activities">
          <h1 className="header-main">
            THE CAPTAIN <br />
            AT HOTEL HARTNESS
          </h1>
          <p>120 Halston Avenue, Greenville, SC 29615</p>
          <p>
            A cozy, reclaimed barn wood-clad bar with a warm atmosphere to enjoy
            craft cocktails, an extensive by the glass wine selection and light
            bites.
          </p>
          <NavLink
            className="faux"
            to="https://www.hotelhartness.com/experiences/dine"
            target="_blank"
          >
            View
          </NavLink>
        </div>
        <div className="activities">
          <h1 className="header-main">SPA H</h1>
          <p>90 Traverse Drive, Greenville, SC 29615</p>
          <p>
            Stretch out and feel your tensions ease at Spa H as expert
            therapists provide soothing massages and revitalizing facials. Ideal
            for pre-wedding pampering, romantic weekends, group visits and more.
          </p>
          <NavLink
            className="faux"
            to="https://www.hotelhartness.com/experiences/spa-h"
            target="_blank"
          >
            View
          </NavLink>
        </div>
        <div className="activities">
          <h1 className="header-main">TOPGOLF</h1>
          <p>201 Clifton Court, Greenville, SC 29615</p>
          <p>
            Enjoy the sprawling entertainment venue with a high-tech driving
            range and swanky lounge with drinks and games.
          </p>
          <NavLink
            className="faux"
            to="https://topgolf.com/us/greenville/"
            target="_blank"
          >
            View
          </NavLink>
        </div>
        <div className="activities">
          <h1 className="header-main">BMW PERFORMANCE CENTER</h1>
          <p>1155 South Carolina 101, Greer, SC 29651</p>
          <p>
            Looking for a once-in-a-lifetime excursion? Check out the BMW
            Performance Driving School located a short drive from Hotel
            Hartness! We promise you won't regret booking this thrilling
            experience.
          </p>
          <NavLink
            className="faux"
            to="https://bmwperformancecenter.com/"
            target="_blank"
          >
            View
          </NavLink>
        </div>
        <div className="activities">
          <h1 className="header-main">DOWNTOWN GREENVILLE</h1>
          <p>Greenville, SC 29601</p>
          <p>
            From walking through Falls Park to shopping on Main Street, you
            will find no shortage of things to do in Downtown Greenville. Make
            sure to take a picture on Liberty Bridge!
          </p>
        </div>
      </div>
    </div>
  );
}
