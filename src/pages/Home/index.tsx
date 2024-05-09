import Menu from "../../components/Menu";
import Carrousel from "../../components/Carrousel";
import AboutUs from "../../components/AboutUs";
import OurPlace from "../../components/OurPlace";
import FindUs from "../../components/FindUs";
import Footer from "../../components/Footer";
import "./Home.scss";

function Home() {
  return (
    <div className="homepage">
      <section className="top-section">
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "row",
          }}
        >
          <Menu />
          <Carrousel />
        </div>

        <AboutUs />
        <OurPlace />
      </section>
      <section className="bottom-section">
        <FindUs />
        <Footer />
      </section>
    </div>
  );
}

export default Home;
