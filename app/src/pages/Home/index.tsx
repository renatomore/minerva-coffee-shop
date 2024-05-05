import Menu from "../../components/Menu";
import Carrousel from "../../components/Carrousel";
import AboutUs from "../../components/AboutUs";
import OurPlace from "../../components/OurPlace";

function Home() {
  return (
    <>
      <div
        style={{ display: "flex", position: "relative", flexDirection: "row" }}
      >
        <Menu />
        <Carrousel />
      </div>
      <AboutUs />
      <OurPlace />
    </>
  );
}

export default Home;
