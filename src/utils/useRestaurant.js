import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useRestautant = (restroId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const getRestaurantData = await fetch(
      `${API_URL}/menu/v4/full?lat=27.1766701&lng=78.00807449999999&menuId=${restroId}`
    );
    const fullRestaurantData = await getRestaurantData.json();
    console.log(fullRestaurantData);
    if (fullRestaurantData.statusCode != "404") {
      setRestaurant(fullRestaurantData.data);
    } else {
      setRestaurant(fullRestaurantData);
    }
  }

  //Return data
  return restaurant;
};

export default useRestautant;
