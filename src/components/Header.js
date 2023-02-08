import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/foodex-white.png";

function isLoggedIn(isLogged) {
  return (isLogged = isLogged ? false : true);
}

const NavigationBar = () => {
  const [isLogged, setIsLoggged] = useState(false);

  return (
    <>
      <ul className="navbar flyout1">
        <li className="nav-item">
          <NavLink
            to="/offers"
            title="Offers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Offers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            title="About Us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            title="Contact Us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
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
      <Link to="/" title="FoodEx">
        <img src={logo} title="FoodEx" alt="FoodEx" />
      </Link>
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
