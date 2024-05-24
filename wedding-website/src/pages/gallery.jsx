import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";

export default function Gallery() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h3>Cute pics of us will go on this page!</h3>
      </div>
      <RSVPButton />
    </div>
  );
}
