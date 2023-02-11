import { useState } from 'react';
import headerLogo from '../../Assets/header-logo.svg';
import nav from '../../Assets/nav.svg';
import toggleArrow from '../../Assets/toggle-arrow.svg';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <header>
      <div className="left-header">
        <button className="header-logo-button">
          <img alt="logo" src={headerLogo} />
        </button>
        <div className="header-buttons">
          <button>Product</button>
          <button>Industires</button>
          <button>Templates</button>
          <button>Pricing</button>
          <button>Reviews</button>
        </div>
        <button
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
          className="nav-button"
        >
          <img src={nav} alt="" />
        </button>
      </div>
      <div className="right-header">
        <button className="login-button">Log in</button>
        <button className="start-free-button">Start Free</button>
      </div>

      <NavBar isNavActive={isNavActive} />
    </header>
  );
};

export default Header;

const NavBar = ({ isNavActive }) => {
  return (
    <div
      className="nav-bar"
      style={{ display: `${isNavActive ? 'flex' : 'none'}` }}
    >
      <div className="sliding-button">
        <button>Products</button>
        <img src={toggleArrow} alt="toggle" />
      </div>

      <div className="sliding-button">
        <button>Templates</button>
        <img src={toggleArrow} alt="toggle" />
      </div>

      <button className="nd-nav-button">Pricing</button>
      <button className="nd-nav-button">Reviews</button>
      <button className="login-button-nav">Login</button>
      <button className="start-free-button-nav">Start Free</button>
    </div>
  );
};
