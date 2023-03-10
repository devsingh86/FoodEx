import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterRestaurant } from "../utils/helper";
import useOnline from "../utils/useConnectionStatus";
import { SWIGGY_RESTRO_API } from "../constants";
import userContext from "../utils/userContext";

const RestaurantList = ({ brandName }) => {
  //all data
  const [allRestaurants, setAllRestaurants] = useState([]);
  console.log(allRestaurants);
  //filtered data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //search query text
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call from useEffect, to avoid re-calling the  API
    getRestaurants();
  }, []);

  //async call to fetch data
  async function getRestaurants() {
    const data = await fetch(SWIGGY_RESTRO_API);
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  const { user } = useContext(userContext);

  if (!isOnline) {
    return (
      <div className="no-results">
        <h3>
          {user.name} Looks like you are offline{" "}
          <i className="ri-wifi-off-line"></i>
        </h3>
        <p>Please check your internet connection.</p>
      </div>
    );
  }

  //Early return to handle component not  rendering
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
                const output = filterRestaurant(searchText, allRestaurants);
                setFilteredRestaurants(output);
              }}
            />
            <i
              className={
                searchText === "" ? "ri-search-2-line" : "ri-close-line"
              }
              onClick={() => {
                setSearchText("");
                const output = filterRestaurant("", allRestaurants);
                setFilteredRestaurants(output);
              }}
            ></i>
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
                    const output = filterRestaurant(searchText, allRestaurants);
                    setFilteredRestaurants(output);
                  }}
                />
                <i
                  className={
                    searchText === "" ? "ri-search-2-line" : "ri-close-line"
                  }
                  onClick={() => {
                    setSearchText("");
                    const output = filterRestaurant("", allRestaurants);
                    setFilteredRestaurants(output);
                  }}
                ></i>
              </div>
            </div>
          </>
        )}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data}
              key={restaurant.data.id}
              brandName={brandName}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
