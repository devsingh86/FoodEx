import RestaurantList from "./RestaurantList";
import HeroSection from "./HeroSection";

const Body = ({ brandName }) => {
  return (
    <main className="mainContainer">
      <HeroSection />
      <section className="centerAlign">
        <RestaurantList brandName={brandName} />
      </section>
    </main>
  );
};

export default Body;
