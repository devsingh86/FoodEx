import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Food Villa</h1>;

const Applayout = () => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
};

const HeaderContainer = () => {
  return (
    <header className="header">
      <section className="headerWrapper">
        <Logo />
        <NavigationBar />
      </section>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="/" title="Logo">
        <img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
          title="FoodVilla"
          alt="FoodVilla"
        />
      </a>
    </div>
  );
};

const NavigationBar = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="#" title="Order">
          Order
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="About Us">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="Contact Us">
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="Search">
          <i className="ri-search-2-line"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" title="cart">
          <i className="ri-shopping-cart-line"></i>
        </a>
      </li>
    </ul>
  );
};

const Banner = () => {
  return (
    <section className="full-width banner">
      <div className="centerAlign">
        <Title />
      </div>
    </section>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "532213",
      name: "Chilli'Z Restro",
      uuid: "e04042c4-2ec3-40b6-bfda-b29a1d286722",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mzsuzzznrww2mpzwk27d",
      cuisines: ["North Indian", "Chinese", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 3.5999999046325684,
      slugs: {
        restaurant: "chilliz-restro-(patel-nagar)-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "75/4,arya tower,patel nagar,Dehradun 248001",
      locality: "Patel Nagar",
      parentId: 13645,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5669288~p=1~eid=00000185-b17a-9577-3b8e-bdb000bb010c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "532213",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 3.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "599133",
      name: "Doon Darbar",
      uuid: "6590d88a-effc-4bc9-a294-d5a6517824b6",
      city: "22",
      area: "Shimla Bypass Chowk",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "lzacctllikcgp8xpvzla",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "doon-darbar-deh_patel-nagar-deh_patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "PRADHAN JI WALI GALI MAJRA NEAR BASIT HARDWARE, DEHRADUN Uttarakhand - 248001",
      locality: "Deh_Patel Nagar",
      parentId: 13207,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "599133",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "413821",
      name: "Pizza Hut",
      uuid: "def78429-429b-4501-817c-b60f5e047883",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cst4xfxkgt8dj5bbrxwy",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "pizza-hut-dehradun-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "Pizza Hut at Shop No- 1 & 2, Ground Floor, Shree Ji Tower, Majra Saharanpur Road, Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand, 248001",
      locality: "Dehradun",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "413821",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "537685",
      name: "Wat A Roll",
      uuid: "260e94ad-9874-4dbd-90e2-deabdab50cda",
      city: "22",
      area: "Indra Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "mp44hpskoltsfvdyf3ow",
      cuisines: ["Chinese", "Continental", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "wat-a-roll-ballupur-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "SHOP NO. 15 INDIRANAGAR MARKET, Dehradun Nagar Nigam, Dehradun, Uttarakhand, 248001",
      locality: "Indra Nagar",
      parentId: 387874,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5652927~p=4~eid=00000185-b17a-9577-3b8e-bdb100bb046a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "537685",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

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
    <div className="restaurantWrapper">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const MainContainer = () => {
  return (
    <main className="mainContainer">
      <section className="centerAlign">
        <h2>{restaurantList.length} Favorites Near You</h2>

        <RestaurantList />
      </section>
    </main>
  );
};

const FooterContainer = () => {
  return (
    <footer className="footer">
      <section className="footerWrapper">
        <p>Copyright FoodVilla 2022</p>
      </section>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
