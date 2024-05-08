import "./Menu.scss";

const Menu = () => {
  return (
    <>
      <div className="navbar">
        <img
          className="background-frame"
          src="src/assets/Menu/menu-frame.svg"
          alt=""
        />
        <div className="link">
          <a href="#about_us">ABOUT US</a>
        </div>
        <div className="link">
          <a href="#our_place">OUR PLACE</a>
        </div>
        <div>
          <img className="logo" src="src/assets/logo.svg" alt="Minerva Logo" />
        </div>
        <div className="link">
          <a href="#find_us">FIND US</a>
        </div>
        <div className="link">
          <a href="#footer">SOCIALS</a>
        </div>
      </div>
    </>
  );
};

export default Menu;
