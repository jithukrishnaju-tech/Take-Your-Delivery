import { headerLogo } from "../utils/common";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={headerLogo}></img>
      </div>
      <div className="navigation">
        <ul className="nav-lists">
          <li className="nav-list">Home</li>
          <li className="nav-list">About Us</li>
          <li className="nav-list">Contact</li>
          <li className="nav-list">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
