import { IMG_CDN_URL } from "../constants";

const Menucard = ({ price, cloudinaryImageId, name }) => {
  return (
    <div className="card">
      <div className="menuImage">
        <img src={IMG_CDN_URL + cloudinaryImageId} title="" alt="" />
      </div>
      <div className="menu-details">
        <h2>{name}</h2>
        <h3>
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </h3>
        <button
          className="cart-button"
          onClick={(e) => {
            e.target.classList.add("clicked");
          }}
        >
          <span className="add-to-cart">Add to cart</span>
          <span className="added">Added</span>
          <i className="ri-shopping-cart-line"></i>
          <i className="ri-archive-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Menucard;
