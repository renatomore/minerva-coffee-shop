import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-container">
      <span className="about-title">About us</span>

      <div className="about">
        <img
          className="about-image left-image"
          src="src/assets/AboutUs/first.svg"
          alt="coffee"
        />
        <div className="about-text right-text">
          <span>
            Welcome to Minerva coffeshop, where every cup is a journey to
            delight. Nestled in the vibrant heart of São Paulo, we invite you to
            discover the art of coffee in our urban oasis.
          </span>
        </div>
      </div>

      <div className="about">
        <div className="about-text left-text">
          <span>
            From the rich aroma of our freshly roasted beans to the last sip of
            your perfectly crafted latte, experience the passion that brews in
            every detail. Join us for a moment of serenity, a burst of
            inspiration, or simply, a daily dose of happiness. Your perfect
            blend awaits.
          </span>
        </div>
        <img
          className="about-image right-image"
          src="src/assets/AboutUs/second.svg"
          alt="coffee"
        />
      </div>
      <div className="about" style={{ marginBottom: "144px" }}>
        <img src="src/assets/AboutUs/third.svg" alt="coffee" />
        <div className="fall-in-love">
          <div className="fall-in-love-text">FALL</div>
          <div className="fall-in-love-text">IN</div>
          <div className="fall-in-love-text">LOVE</div>
          <div className="fall-in-love-text">WITH</div>
          <div className="fall-in-love-text">OUR COFFEE</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
