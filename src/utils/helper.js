export function filterRestaurant(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name
      ?.toLowerCase()
      .trim()
      ?.includes(searchText.toLowerCase().trim())
  );
}
