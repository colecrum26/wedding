import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";

export default function Gallery() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h3>Once we take our engagement photos, we'll put them here!</h3>
      </div>
      <RSVPButton />
    </div>
  );
}
