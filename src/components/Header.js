import { useState } from "react";
import logo from "../assets/logo/foodex-white.png";

function isLoggedIn(isLogged) {
  return (isLogged = isLogged ? false : true);
}

const NavigationBar = () => {
  const [isLogged, setIsLoggged] = useState(false);

  return (
    <>
      <ul className="navbar flyout">
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
      </ul>
      <ul className="navbar">
        {isLogged ? (
          <li className="nav-item">
            <a
              href="#"
              title="Logout"
              onClick={() => {
                setIsLoggged(false);
              }}
            >
              <span className="ri-user-fill"></span> Logout
            </a>
          </li>
        ) : (
          <li className="nav-item">
            <a
              href="#"
              title="Log In"
              onClick={() => {
                setIsLoggged(true);
              }}
            >
              Log In
            </a>
          </li>
        )}

        <li className="nav-item">
          <a href="#" title="cart">
            <i className="ri-shopping-bag-line"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" title="Menu">
            <i className="ri-menu-line"></i>
          </a>
        </li>
      </ul>
    </>
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
