const Header = () => {
  return (
    <header>
      <div className="left-header">
        <img alt="logo" src="#" />
        <div className="header-buttons">
          <button>Product</button>
          <button>Industires</button>
          <button>Templates</button>
          <button>Pricing</button>
          <button>Reviews</button>
        </div>
      </div>
      <div className="right-header">
        <button className="login-button">Log in</button>
        <button className="start-free-button">Start Free</button>
      </div>
    </header>
  );
};

export default Header;
