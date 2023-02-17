import { useEffect, useState } from "react";
import { SWIGGY_RESTRO_MENU_API } from "../constants";

const useRestautant = (restroId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const getRestaurantData = await fetch(SWIGGY_RESTRO_MENU_API + restroId);
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
