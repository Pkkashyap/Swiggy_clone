import React from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Fotter";
import Body from "./src/components/Body";
import { Outlet } from "react-router-dom";
import userContext from "./src/utils/userContext";

export const App = () => {
  return (
    <div>
      <userContext.Provider value={{ loggedUser: "pankaj" }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </div>
  );
};
