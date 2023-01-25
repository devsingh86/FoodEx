import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//filter restuarants logic
function filterRestaurant(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const RestaurantList = () => {
  const [restaurants, useRestaurants] = useState([]);
  const [restaurantCount, useRestaurantCount] = useState(restaurants.length);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call from useEffect, to avoid re-calling the  API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1074186&lng=73.01726169999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    useRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    useRestaurantCount(json?.data?.cards[2]?.data?.data?.cards.length);
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="two-col-flex">
        <h2>{restaurantCount} favorites near you</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurants near you..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <input
            type="button"
            value="SEARCH"
            className="search-button"
            onClick={() => {
              const output = filterRestaurant(searchText, restaurants);
              //update restaurants local state variable;
              useRestaurants(output);
            }}
          />
        </div>
      </div>
      <div className="restaurantWrapper">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
