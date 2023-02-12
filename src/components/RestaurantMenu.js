import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestautant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import Menucard from "./Menucard";

const RestaurantMenu = () => {
  const { restroId } = useParams();
  const restaurant = useRestautant(restroId);

  const [category, setCategory] = useState("Recommended");
  const [filterMenu, setFilterMenu] = useState([]);

  const paiseToRupee = restaurant?.costForTwo / 100;

  return !restaurant ? (
    <main className="mainContainer">
      <section className="centerAlign">
        <Shimmer />
      </section>
    </main>
  ) : (
    <main className="mainContainer">
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
              <div>
                <i className="ri-star-s-line"></i>
                {restaurant?.avgRating}
                <span>{restaurant?.totalRatingsString}</span>
              </div>
              <div>
                {paiseToRupee.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
                <span>Cost for two</span>
              </div>
              <div>
                {restaurant?.sla?.slaString}
                <span>Delivery Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="centerAlign">
        {restaurant.statusCode != "404" ? (
          <>
            <div className="two-col-flex">
              <ul className="menuCategory">
                {restaurant?.menu?.widgets.map((item, index) => (
                  <li
                    key={item.name}
                    id={item.name}
                    className={category === item.name ? "active" : "inactive"}
                    onClick={(e) => {
                      setCategory(e.target.id);

                      const filterMenu = Object.values(
                        restaurant?.menu?.items
                      ).reduce((filtered, item) => {
                        if (item.category === e.target.id) {
                          filtered.push(item);
                        }
                        return filtered;
                      }, []);
                      setFilterMenu(filterMenu);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {/*<select
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
                {category != "Recommended" && (
                  <h3>
                    {category} - {filterMenu.length} Item(s)
                  </h3>
                )}

                {filterMenu.length === 0
                  ? Object.values(restaurant?.menu?.items).map((item) => (
                      <Menucard {...item} key={item.id} />
                    ))
                  : filterMenu.map((item) => (
                      <Menucard {...item} key={item.id} />
                    ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>{restaurant.statusMessage}</h2>
            <Link to="/" className="link_404">
              Go To Home
            </Link>
          </>
        )}
      </section>
    </main>
  );
};

export default RestaurantMenu;
