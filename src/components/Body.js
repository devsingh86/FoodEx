import RestaurantList from "./RestaurantList";
import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <main className="mainContainer">
      <HeroSection />
      <section className="centerAlign">
        <RestaurantList />
      </section>
    </main>
  );
};

export default Body;
