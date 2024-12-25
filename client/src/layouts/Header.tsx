import React from "react";
import HeaderMain from "../components/header/header-main/HeaderMain";
import { Outlet } from "react-router-dom";
import HeaderSub from "../components/header/header-sub/HeaderSub";
import { useSelector } from "react-redux";
import { User } from "../interfaces/User";

interface State {
  login: {
    data: {
      user: User;
    };
  };
}

const Header = () => {
  const user = useSelector((state: State) => state.login?.data?.user);
  console.log("user", user);
  return (
    <header className="header">
      <HeaderMain
        username={user?.username}
        is_vip={user?.is_vip}
        logoName="VANPHUTIN"
        isLoggedIn={user ? true : false}
      />
      <HeaderSub />
      <div className="container">{<Outlet />}</div>
    </header>
  );
};

export default Header;
