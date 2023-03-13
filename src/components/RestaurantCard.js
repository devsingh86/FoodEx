import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  address,
  cuisines,
  avgRating,
  totalRatingsString,
  promoted,
  brandName,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="card">
      <Link to={`/restaurants/${id}`}>
        <div className="restaurantImage">
          <img src={IMG_CDN_URL + cloudinaryImageId} title="" alt="" />
        </div>
        {promoted && (
          <div className="promoted">PROMOTED by {brandName.name}</div>
        )}
        <div className="restaurantDetails">
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{address}</h4>
          <h5>
            {user.username} - {user.email}
          </h5>

          <div className="moreDetails">
            <div className={`rating ${avgRating >= 4 ? "green" : ""}`}>
              {avgRating} <i className="ri-star-s-fill"></i>
            </div>
            <div className="deliveryFee">{totalRatingsString}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
