import Frame from "../../assets/OurPlace/frame.svg";
import Barista from "../../assets/OurPlace/barista.svg";
import MainBanner from "../../assets/OurPlace/banner-middle-01.svg";
import BottomBanner1 from "../../assets/OurPlace/banner-middle-02.svg";
import BottomBanner2 from "../../assets/OurPlace/banner-middle-03.svg";
import BottomBanner3 from "../../assets/OurPlace/banner-middle-04.svg";
import Background from "../../assets/OurPlace/cover.svg";

import "./OurPlace.scss";

const OurPlace = () => {
  return (
    <section
      className="ourplace"
      id="our_place"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img className="top-frame" src={Frame} alt="top-frame" />
      <div className="title">
        <span>OUR PLACE</span>
      </div>
      <div className="text">
        <p>
          Imagine entering a space where tradition and modernity meet to create
          a unique coffee experience. The walls are adorned with earthy tones
          and wooden details, evoking a sense of comfort and warmth. The aroma
          of freshly roasted coffee fills the air, promising a sensory journey
          with each sip.
        </p>
        <p>
          In the background, the soft melody of jazz mixes with the sounds of
          the city, while natural light pours through the large windows,
          illuminating the space with vibrant energy. Each table is an
          invitation to slow down and enjoy the art of conversation, surrounded
          by plants that bring a touch of green and life to the environment.
        </p>
        <p>
          Here, every detail is thought out to harmonize with the previous text,
          offering an urban refuge where time seems to slow down, allowing you
          to reconnect with yourself and the simple pleasures of life. Welcome
          to your new favorite destination for moments of pause and inspiration.
        </p>
      </div>
      <div className="barista">
        <img src={Barista} alt="Barista Leticia Salles" />
        <span>Leticia Salles</span>
      </div>
      <div className="main-banner">
        <img src={MainBanner} alt="Main Banner" />
      </div>
      <div className="bottom-banners">
        <img src={BottomBanner1} alt="Bottom banner" />
        <img src={BottomBanner2} alt="Bottom banner" />
        <img src={BottomBanner3} alt="Bottom banner" />
      </div>
      <img className="bottom-frame" src={Frame} alt="bottom-frame" />
    </section>
  );
};

export default OurPlace;
