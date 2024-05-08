import Menu from "../../components/Menu";
import Carrousel from "../../components/Carrousel";
import AboutUs from "../../components/AboutUs";
import OurPlace from "../../components/OurPlace";
import FindUs from "../../components/FindUs";

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
      <FindUs />
    </>
  );
}

export default Home;
