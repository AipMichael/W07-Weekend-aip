import "./header.css";

const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__brand">
          <div className="nav-bar__logo"></div>
          <h1 className="nav-bar__main-title">MarioNet</h1>
        </div>
        <div className="nav-bar__register">
          <button type="button" className="nav-bar__signup-button">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
