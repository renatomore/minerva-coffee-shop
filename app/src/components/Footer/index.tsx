import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <img
        className="background-frame"
        src="src/assets/Footer/frame.svg"
        alt=""
      />
      <div className="footer-content">
        <div className="social-media">
          <div className="title">
            <span>Follow us</span>
          </div>
          <div className="links">
            <a href="https://facebook.com" target="_blank">
              <img src="src/assets/Footer/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="src/assets/Footer/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <img src="src/assets/Footer/youtube.svg" alt="Youtube" />
            </a>
            <a href="https://x.com" target="_blank">
              <img src="src/assets/Footer/x.svg" alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
