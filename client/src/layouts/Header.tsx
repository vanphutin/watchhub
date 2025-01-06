import React, { useContext } from "react";
import HeaderMain from "../components/header/header-main/HeaderMain";
import { Outlet } from "react-router-dom";
import HeaderSub from "../components/header/header-sub/HeaderSub";
import { useSelector } from "react-redux";
import { User } from "../interfaces/User";
import { IoMdMenu } from "react-icons/io";
import HeaderSearch from "../components/header/header-search/HeaderSearch";
import useDeviceType from "../hooks/useDeviceType";
import { MenuContext } from "../context/menuToggle/MenuContext";
import HeaderStatus from "../components/header/header-status/HeaderStatus";
import "../assets/style/layout/_header.scss";
import HeaderIntro from "../components/header/header-intro/HeaderIntro";
interface State {
  login: {
    data: {
      user: User;
    };
  };
}

const Header = () => {
  const deviceType = useDeviceType();

  // CONTEXT MENU TOGGLE
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Header must be used within a ToggleMenuProvider");
  }
  const { isMenuOpen, toggleMenu } = context;

  const user = useSelector((state: State) => state.login?.data?.user);

  return (
    <>
      <HeaderMain
        username={user?.username}
        is_vip={user?.is_vip}
        logoName="VANPHUTIN"
        isLoggedIn={!!user}
      />
      <div className="submenu-change d-flex align-items-center justify-content-between">
        <div className="menu d-block d-md-none">
          <div className="menu-icon" onClick={toggleMenu}>
            <IoMdMenu size={30} color="#fff" />
          </div>
        </div>
        <div className="task d-block d-md-none">
          <HeaderSearch />
        </div>
      </div>
      {(isMenuOpen || deviceType === "desktop") && (
        <div className="menu-dropdown">
          <HeaderSub />
          {deviceType !== "desktop" && (
            <HeaderStatus
              isVip={user?.is_vip === 0 ? false : true}
              isLoggedIn={!!user}
              username={user?.username}
            />
          )}
        </div>
      )}
      <HeaderIntro />
      <Outlet />
    </>
  );
};

export default Header;
