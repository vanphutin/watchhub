import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/style/pages/_main.scss";
import Footer from "../layouts/Footer";

const Main: React.FC = () => {
  return (
    <>
      <div className="main container">
        {" "}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
