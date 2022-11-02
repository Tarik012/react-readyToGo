import logo from "../assets/images/spatial.jpeg";

const Header = (props) => {
  return (
    <div className="header-container">
      <img src={logo} alt="image fusée"></img>
      <h1>Ready To Go</h1>
    </div>
  );
};

export default Header;
