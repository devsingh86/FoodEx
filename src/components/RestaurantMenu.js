import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    setRestaurant(fullRestaurantData.data);
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
        <div className="two-col-flex">
          <div>
            <h1>RestaurantMenu for {restroId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h3>{restaurant.avgRating} stars</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
          </div>
          <div>
            <h2>Menu</h2>
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => (
                <li id={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantMenu;
