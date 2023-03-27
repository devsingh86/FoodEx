import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MENU_ITEM_CDN,
  IMG_CDN_URL,
  SWIGGY_RESTRO_MENU_API,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../constants";
import useRestautant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import Menucard from "./Menucard";

const RestaurantMenu = () => {
  const { restroId } = useParams();
  const { restaurant, menuItems, uniqueCategory } = useRestautant(restroId);

  const [category, setCategory] = useState("Recommended");
  const [filterMenu, setFilterMenu] = useState(menuItems);

  const paiseToRupee = restaurant?.costForTwo / 100;

  //console.log(restaurant);
  //console.log(menuItems);
  console.log(filterMenu);
  //Get data from API

  return !restaurant ? (
    <main className="mainContainer">
      <section className="centerAlign">
        <Shimmer />
      </section>
    </main>
  ) : (
    <main className="mainContainer">
      <>
        <section className="menu-header">
          <div className="centerAlign two-col-flex va-center">
            <div className="restaurantImage">
              <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            </div>
            <div className="restaurant-details">
              <h2>{restaurant?.name}</h2>
              <h3>{restaurant?.cuisines?.join(", ")}</h3>
              <h3>
                {restaurant?.locality}, {restaurant?.area}
              </h3>
              <div className="stats">
                {restaurant?.avgRating > 0 && (
                  <div>
                    {restaurant?.avgRating}
                    <i className="ri-star-s-line"></i>
                    <span>{restaurant?.totalRatingsString}</span>
                  </div>
                )}

                <div>
                  {paiseToRupee.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                  <span>Cost for two</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="centerAlign">
          <div className="two-col-flex">
            <ul className="menuCategory">
              {uniqueCategory.map((item, index) => (
                <li
                  key={item.id}
                  id={item.category}
                  className={category === item.category ? "active" : "inactive"}
                  onClick={(e) => {
                    setCategory(e.target.id);

                    const filterMenu = menuItems.reduce((filtered, item) => {
                      if (item.category === e.target.id) {
                        filtered.push(item);
                      }
                      return filtered;
                    }, []);
                    setFilterMenu(filterMenu);
                  }}
                >
                  {item.category}
                </li>
              ))}
            </ul>
            {/* <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);

              const filterMenu = Object.values(
                restaurant?.menu?.items
              ).reduce((filtered, item) => {
                if (item.category === e.target.value) {
                  filtered.push(item);
                }
                return filtered;
              }, []);
              setFilterMenu(filterMenu);
            }}
          >
            {restaurant?.menu?.widgets.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
            </select>*/}

            <div className="menuWrapper">
              {category != "Recommended" ? (
                <h3>
                  {category} - {filterMenu.length} option(s)
                </h3>
              ) : (
                <h3>{category}</h3>
              )}
              {filterMenu.length === 0
                ? menuItems.map((item) => <Menucard {...item} key={item.id} />)
                : filterMenu.map((item) => (
                    <Menucard {...item} key={item.id} />
                  ))}
            </div>
          </div>
        </section>
      </>
    </main>
  );
};

export default RestaurantMenu;
