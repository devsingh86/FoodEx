import { MENU_ITEM_CDN } from "../constants";

const Menucard = ({ price, imageId, name, isVeg, category }) => {
  const paiseToRupee = price / 100;
  return (
    <div className="card">
      <div className="menuImage">
        <img src={MENU_ITEM_CDN + imageId} title="" alt="" />
      </div>
      <div className="menu-details">
        <h2>
          {name}
          {isVeg == 1 ? <i className="ri-stop-circle-line green"></i> : ""}
        </h2>
        <p className="mb-20">{category}</p>
        <h3>
          {paiseToRupee.toLocaleString("en-IN", {
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
