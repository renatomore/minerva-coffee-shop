import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about-us" id="about_us">
      <div className="title">
        <span>About us</span>
      </div>

      <div className="about-container">
        <img
          className="left-image"
          src="src/assets/AboutUs/first.svg"
          alt="coffee"
        />
        <div className="text">
          <span className="right">
            Welcome to Minerva coffeshop, where every cup is a journey to
            delight. Nestled in the vibrant heart of São Paulo, we invite you to
            discover the art of coffee in our urban oasis.
          </span>
        </div>
      </div>

      <div className="about-container">
        <div className="text">
          <span className="left">
            From the rich aroma of our freshly roasted beans to the last sip of
            your perfectly crafted latte, experience the passion that brews in
            every detail. Join us for a moment of serenity, a burst of
            inspiration, or simply, a daily dose of happiness. Your perfect
            blend awaits.
          </span>
        </div>
        <img
          className="right-image"
          src="src/assets/AboutUs/second.svg"
          alt="coffee"
        />
      </div>
      <div className="about-container" style={{ marginBottom: "144px" }}>
        <img src="src/assets/AboutUs/third.svg" alt="coffee" />
        <div className="fall-in-love">
          <div>FALL</div>
          <div>IN</div>
          <div>LOVE</div>
          <div>WITH</div>
          <div>OUR COFFEE</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
