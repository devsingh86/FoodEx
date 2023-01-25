import logo from "../assets/logo/foodex.png";
import logo2 from "../assets/logo/foodex-no-outline.png";

const NavigationBar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="#" title="Order">
          Order
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
        <a href="#" title="Search">
          <i className="ri-search-2-line"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="cart">
          <i className="ri-shopping-cart-line"></i>
        </a>
      </li>
    </ul>
  );
};

export const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/" title="Logo">
        <img src={logo2} title="FoodEx" alt="FoodEx" />
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
