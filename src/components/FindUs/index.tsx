import Frame from "../../assets/FindUs/frame.svg"
import "./FindUs.scss";

const FindUs = () => {
  return (
    <section className="findUs" id="find_us">
      <div className="title">
        <span>FIND US</span>
      </div>
      <div className="map">
        <img src={Frame} alt="frame" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.9182500420366!2d-46.70007905335799!3d-23.546445953097866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57cf5044218f%3A0x61e9a2ab48b1ec84!2sRua%20Madre%20Maria%20Ang%C3%A9lica%20Resende%2C%20544%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005448-040!5e0!3m2!1spt-BR!2sbr!4v1715133408161!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUs;
