import logo from "../assets/logo/foodex-white.png";

const NavigationBar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="#" title="Offers">
          Offers
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="About Us">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="Contact Us">
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="Login/Register">
          <i className="ri-user-fill"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="cart">
          <i className="ri-shopping-bag-line"></i>
        </a>
      </li>
    </ul>
  );
};

export const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/" title="Logo">
        <img src={logo} title="FoodEx" alt="FoodEx" />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <section className="headerWrapper">
        <Logo />
        <NavigationBar />
      </section>
    </header>
  );
};

export default Header;
