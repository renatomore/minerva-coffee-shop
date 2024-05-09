import Frame from "../../assets/Footer/frame.svg";
import Facebook from "../../assets/Footer/facebook.svg";
import Instagram from "../../assets/Footer/instagram.svg";
import Youtube from "../../assets/Footer/youtube.svg";
import X from "../../assets/Footer/x.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <img className="background-frame" src={Frame} />
      <div className="footer-content">
        <div className="social-media">
          <div className="title">
            <span>Follow us</span>
          </div>
          <div className="links">
            <a href="https://facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://x.com" target="_blank">
              <img src={X} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
