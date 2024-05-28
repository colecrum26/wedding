import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";

export default function FAQ() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="question">
          <h1 className="header-main">WHY HOTEL HARTNESS?</h1>
          <p>
            We chose Hotel Hartness because of Rebecca's special connection to
            the property. The main hotel property was formerly the home of Pat
            and Mary Lou Hartness, Rebecca's great uncle and aunt. Rebecca,
            along with the Hartness family, celebrated many holidays in the
            stunning dining room, that is now the hotel lobby. In The Captain,
            you can see paintings and photos of the Hartness family, including
            Rebecca's great-grandfather Tom Hartness, and her great uncle Pat.
          </p>
        </div>
        <div className="question">
          <h1 className="header-main">
            WHAT TIME SHOULD I ARRIVE AT THE CEREMONY?
          </h1>
          <p>
            Please arrive at 5:30pm to find your seat. The ceremony will begin
            at 6:00pm.
          </p>
        </div>
        <div className="question">
          <h1 className="header-main">ARE KIDS WELCOME?</h1>
          <p>
            While we love your little ones, we kindly ask that all wedding
            events be adults only. We hope you can enjoy the weekend off to
            celebrate!
          </p>
        </div>
        <div className="question">
          <h1 className="header-main">IS THERE A DRESS CODE?</h1>
          <p>
            We ask that our guests wear black tie attire. Want to dress for the
            theme? Feel free to express yourself in fabulous
            garden-party-inspired formal wear! Consult the{" "}
            <a href="/schedule" className="in-copy-link">
              schedule
            </a>{" "}
            for the entire weekend's dress code.
          </p>
        </div>
      </div>
      <RSVPButton />
    </div>
  );
}
