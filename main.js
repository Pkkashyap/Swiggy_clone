import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const About = lazy(()=> (
  import('./src/components/About')
))
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <About></About>
          </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);