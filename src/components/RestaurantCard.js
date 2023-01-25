import { IMG_CDN_URL } from "../constants";

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
        <img src={IMG_CDN_URL + cloudinaryImageId} title="" alt="" />
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
          <div className="rating">
            {avgRating} <i className="ri-star-s-fill"></i>
          </div>
          <div className="deliveryFee">{totalRatingsString}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
