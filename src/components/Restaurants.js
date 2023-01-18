//API data
import * as restaurantListData from "../../json/restaurantList.json";

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  area,
  cuisines,
  avgRating,
  totalRatingsString,
  promoted,
}) => {
  /*const {
    cloudinaryImageId,
    name,
    area,
    cuisines,
    avgRating,
    totalRatingsString,
  } = restaurant.data;*/

  return (
    <div className="card">
      <div className="restaurantImage">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          title=""
          alt=""
        />
      </div>
      {promoted && <div className="promoted">PROMOTED</div>}
      <div className="restaurantDetails">
        <h2>
          <a href={"/restaurants/" + id} title={name}>
            {name}
          </a>
        </h2>
        <h3>{area}</h3>
        <h4>{cuisines.join(", ")}</h4>

        <div className="moreDetails">
          <div className="rating">{avgRating} Stars</div>
          <div className="deliveryFee">{totalRatingsString}</div>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <>
      <h2>{restaurantListData.length} favorites near you</h2>
      <div className="restaurantWrapper">
        {restaurantListData.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantList;
