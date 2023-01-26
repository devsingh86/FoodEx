import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//filter restuarants logic
function filterRestaurant(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const RestaurantList = () => {
  //all data
  const [allRestaurants, setAllRestaurants] = useState([]);
  //filtered data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //search query text
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

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {filteredRestaurants?.length !== 0 && (
        <div className="two-col-flex">
          <h2>{filteredRestaurants.length} favorites near you</h2>
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
            <button
              className="search-button"
              onClick={() => {
                const output = filterRestaurant(searchText, allRestaurants);
                //update restaurants local state variable;
                setFilteredRestaurants(output);
              }}
            >
              <i className="ri-search-2-line"></i>
            </button>
          </div>
        </div>
      )}
      <div className="restaurantWrapper">
        {filteredRestaurants?.length === 0 && (
          <>
            <div className="no-results">
              <h3>
                No Restaurants Found <i className="ri-emotion-sad-line"></i>
              </h3>
              <p>
                Sorry, but nothing matched your{" "}
                <strong>restaurant search keywords</strong>.<br />
                Please try again with some different restaurant name.
              </p>
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
                <button
                  className="search-button"
                  onClick={() => {
                    const output = filterRestaurant(searchText, allRestaurants);
                    //update restaurants local state variable;
                    setFilteredRestaurants(output);
                  }}
                >
                  <i className="ri-search-2-line"></i>
                </button>
              </div>
            </div>
          </>
        )}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
