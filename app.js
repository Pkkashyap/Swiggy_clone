import React from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Fotter";
import Body from "./src/components/Body";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
