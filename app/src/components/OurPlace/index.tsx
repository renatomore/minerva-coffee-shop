import "./OurPlace.scss";

const OurPlace = () => {
  return (
    <div className="ourplace-container">
      <img
        className="background-frame"
        src="src/assets/OurPlace/frame.svg"
        alt=""
      />
      <div className="ourplace-title">
        <span>OUR PLACE</span>
      </div>
      <div className="ourplace-text">
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
      <div className="ourplace-barista">
        <img src="src/assets/OurPlace/barista.svg" alt="" />
        <span>Leticia Salles</span>
      </div>
      <div className="ourplace-main-banner">
        <img src="src/assets/OurPlace/banner-middle-01.svg" alt="" />
      </div>
      <div className="ourplace-bottom-banners">
        <img src="src/assets/OurPlace/banner-middle-02.svg" alt="" />
        <img src="src/assets/OurPlace/banner-middle-03.svg" alt="" />
        <img src="src/assets/OurPlace/banner-middle-04.svg" alt="" />
      </div>
      <img
        className="background-bottom-frame"
        src="src/assets/OurPlace/frame.svg"
        alt=""
      />
    </div>
  );
};

export default OurPlace;
