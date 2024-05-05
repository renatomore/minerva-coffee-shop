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
        <div className="link">ABOUT US</div>
        <div className="link">OUR PLACE</div>
        <div>
          <img className="logo" src="src/assets/logo.svg" alt="Minerva Logo" />
        </div>
        <div className="link">FIND US</div>
        <div className="link">SOCIALS</div>
      </div>
    </>
  );
};

export default Menu;
