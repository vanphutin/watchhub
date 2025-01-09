import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/style/pages/_main.scss";

const Main: React.FC = () => {
  return (
    <div className="main container">
      {" "}
      <Outlet />{" "}
    </div>
  );
};

export default Main;
