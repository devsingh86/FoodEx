import { useEffect, useState } from "react";
import {
  SWIGGY_RESTRO_MENU_API,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../constants";

const useRestautant = (restroId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  //Get data from API
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const getData = await fetch(SWIGGY_RESTRO_MENU_API + restroId);
    const json = await getData.json();

    // Set restaurant data
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestaurant(restaurantData);

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);

    //filter unique category
    function getUniqueListBy(menuItemsData, key) {
      return [
        ...new Map(menuItemsData.map((item) => [item[key], item])).values(),
      ];
    }
    const filteredCategory = getUniqueListBy(menuItemsData, "category");
    setUniqueCategory(filteredCategory);
  }
  //Return data
  return { restaurant, menuItems, uniqueCategory };
};

export default useRestautant;
