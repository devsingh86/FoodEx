import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";

import RestaurantList from "./components/Restaurants";

//const Title = () => <h1>Food Villa</h1>;

const Applayout = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
};

const MainContainer = () => {
  return (
    <main className="mainContainer">
      <section className="centerAlign">
        <RestaurantList />
      </section>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
