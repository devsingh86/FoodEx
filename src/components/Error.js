import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <Header />
      <main className="mainContainer">
        <section className="centerAlign text-center">
          <h1>{err?.status + " -  Page " + err?.statusText}</h1>
          <div className="errorImage">
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
          </div>
          <h2>Look like you're lost</h2>
          <Link to="/" className="link_404">
            Go To Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error;
