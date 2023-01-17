import React from "react";
import ReactDOM from "react-dom/client";

import * as restaurantListJSON from "./json/restaurantList.json";

const Title = () => <h1>Food Villa</h1>;

const Applayout = () => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
};

const HeaderContainer = () => {
  return (
    <header className="header">
      <section className="headerWrapper">
        <Logo />
        <NavigationBar />
      </section>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/" title="Logo">
        <img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
          title="FoodVilla"
          alt="FoodVilla"
        />
      </a>
    </div>
  );
};

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

const Banner = () => {
  return (
    <section className="full-width banner">
      <div className="centerAlign">
        <Title />
      </div>
    </section>
  );
};

//API data
const restaurantList = restaurantListJSON;

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  area,
  cuisines,
  avgRating,
  totalRatingsString,
  promoted,
}) => {
  /*const {
    cloudinaryImageId,
    name,
    area,
    cuisines,
    avgRating,
    totalRatingsString,
  } = restaurant.data;*/

  return (
    <div className="card">
      <div className="restaurantImage">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          title=""
          alt=""
        />
      </div>
      {promoted && <div className="promoted">PROMOTED</div>}
      <div className="restaurantDetails">
        <h2>
          <a href={"/restaurants/" + id} title={name}>
            {name}
          </a>
        </h2>
        <h3>{area}</h3>
        <h4>{cuisines.join(", ")}</h4>

        <div className="moreDetails">
          <div className="rating">{avgRating} Stars</div>
          <div className="deliveryFee">{totalRatingsString}</div>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="restaurantWrapper">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const MainContainer = () => {
  return (
    <main className="mainContainer">
      <section className="centerAlign">
        <h2>{restaurantList.length} favorites near you</h2>

        <RestaurantList />
      </section>
    </main>
  );
};

const FooterContainer = () => {
  return (
    <footer className="footer">
      <section className="footerWrapper">
        <p>Copyright FoodVilla 2022</p>
      </section>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
