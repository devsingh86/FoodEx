import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import ScrollToTop from "./utils/scrollToTop";

const Error = lazy(() => import("./components/Error"));
const About = lazy(() => import("./components/About"));
const ContactUS = lazy(() => import("./components/ContactUS"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const FAQ = lazy(() => import("./components/FAQ"));

const Applayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: (
      <Suspense fallback={<Shimmer />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Body brandName={{ name: "Foodex" }} />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <ContactUS />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restroId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/faqs",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FAQ />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
