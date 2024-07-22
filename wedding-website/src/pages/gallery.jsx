import Header from "../components/header";
import RSVPButton from "../components/rsvpBtn";
import shot1 from "../assets/IMG_3996.JPG";
import shot2 from "../assets/IMG_3997.JPG";
import shot3 from "../assets/IMG_4007.JPG";
import shot4 from "../assets/IMG_4010.JPG";
import shot5 from "../assets/IMG_4022.JPG";
import shot6 from "../assets/IMG_4034.JPG";
import shot7 from "../assets/IMG_4047.JPG";
import shot8 from "../assets/IMG_4051.JPG";
import shot9 from "../assets/IMG_4064.JPG";
import shot10 from "../assets/IMG_4078.JPG";
import shot11 from "../assets/IMG_4102.JPG";
import shot12 from "../assets/IMG_4100.JPG";
import shot13 from "../assets/IMG_4108.JPG";
import shot14 from "../assets/IMG_4109.JPG";
import shot15 from "../assets/IMG_4111.JPG";
import shot16 from "../assets/IMG_4115.jpeg";

export default function Gallery() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper gallery">
        <img src={shot1} alt=""  className="gallery-image"/>
        <img src={shot2} alt=""  className="gallery-image"/>
        <img src={shot3} alt=""  className="gallery-image"/>
        <img src={shot4} alt=""  className="gallery-image"/>
        <img src={shot5} alt=""  className="gallery-image"/>
        <img src={shot6} alt=""  className="gallery-image"/>
        <img src={shot7} alt=""  className="gallery-image"/>
        <img src={shot8} alt=""  className="gallery-image"/>
        <img src={shot9} alt=""  className="gallery-image"/>
        <img src={shot10} alt="" className="gallery-image" />
        <img src={shot11} alt="" className="gallery-image" />
        <img src={shot12} alt="" className="gallery-image" />
        <img src={shot13} alt="" className="gallery-image" />
        <img src={shot14} alt="" className="gallery-image" />
        <img src={shot15} alt="" className="gallery-image" />
        <img src={shot16} alt="" className="gallery-image" />
      </div>
      <RSVPButton />
    </div>
  );
}
