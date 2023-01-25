const Title = () => (
  <h1>
    Welcome to <br />
    <span>FoodEx</span>
  </h1>
);

const HeroSection = () => {
  return (
    <section className="full-width herosection">
      <div className="centerAlign">
        <Title />
      </div>
    </section>
  );
};

export default HeroSection;
