import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IMG_CDN_URL, API_URL } from "../constants.js";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { restroId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const getRestaurantData = await fetch(
      `${API_URL}/menu/v4/full?lat=26.8466937&lng=80.94616599999999&menuId=${restroId}`
    );
    const fullRestaurantData = await getRestaurantData.json();
    console.log(fullRestaurantData);

    if (fullRestaurantData.statusCode != "404") {
      setRestaurant(fullRestaurantData.data);
    } else {
      setRestaurant(fullRestaurantData);
    }
  }

  return !restaurant ? (
    <main className="mainContainer">
      <section className="centerAlign">
        <Shimmer />
      </section>
    </main>
  ) : (
    <main className="mainContainer">
      <section className="centerAlign">
        {restaurant.statusCode != "404" ? (
          <div className="two-col-flex">
            <div>
              <h1>RestaurantMenu for {restroId}</h1>
              <h2>{restaurant?.name}</h2>
              <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
              <h3>{restaurant?.cuisines?.join(", ")}</h3>
              <h3>{restaurant?.avgRating} stars</h3>
              <h3>{restaurant?.costForTwoMsg}</h3>
              <ul>
                {restaurant?.menu?.widgets.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Menu</h2>
              <ul>
                {Object.values(restaurant?.menu?.items).map((item) => (
                  <li key={item.id}>{item.category}</li>
                ))}
              </ul>
            </div>
          </div>
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
