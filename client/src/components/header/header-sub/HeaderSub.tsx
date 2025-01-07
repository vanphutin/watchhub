import React, { useContext } from "react";
import "./_headerSub.scss";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { MenuContext } from "../../../context/menuToggle/MenuContext";
import { useTranslation } from "react-i18next";

const HeaderSub = () => {
  const { t } = useTranslation();

  const MENU_SUB_ARRAY_LIST: {
    [key: string]: {
      name: string;
      link: string;
      subMenu: string[];
      icon?: React.ReactNode;
    };
  } = {
    home: { name: t("header.menu.home"), link: "/", subMenu: [] },
    singleMovies: {
      name: t("header.menu.singleMovies"),
      link: "/single-movies",
      subMenu: [],
    },
    TVSeries: {
      name: t("header.menu.tvSeries"),
      link: "#",
      subMenu: [
        t("header.menu.subMenu.action"),
        t("header.menu.subMenu.comedy"),
        t("header.menu.subMenu.horror"),
        t("header.menu.subMenu.romance"),
        t("header.menu.subMenu.scienceFiction"),
        t("header.menu.subMenu.adventure"),
        t("header.menu.subMenu.animation"),
        t("header.menu.subMenu.war"),
        t("header.menu.subMenu.drama"),
        t("header.menu.subMenu.crime"),
        t("header.menu.subMenu.musical"),
        t("header.menu.subMenu.documentary"),
        t("header.menu.subMenu.fantasy"),
        t("header.menu.subMenu.family"),
      ],
      icon: <MdArrowDropDown />,
    },
    movieGenres: {
      name: t("header.menu.movieGenres"),
      link: "/movie-genres",
      subMenu: [],
    },
    blog: { name: t("header.menu.blog"), link: "/blog", subMenu: [] },
    about: { name: t("header.menu.about"), link: "/about", subMenu: [] },
  };

  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Header must be used within a ToggleMenuProvider");
  }
  const { toggleMenu } = context;
  const handleClick = (e: React.MouseEvent) => {
    const dataName = e.currentTarget.getAttribute("data-name");
    if (dataName !== "TV Series") {
      toggleMenu();
    }
  };
  return (
    <div className="header header-sub ">
      <div className="container menu gap-3">
        {Object.entries(MENU_SUB_ARRAY_LIST).map(
          ([key, { name, link, subMenu, icon }]) => (
            <div
              key={key}
              className="menu-item "
              data-name={name}
              onClick={handleClick}
            >
              <NavTitle link={link} name={name} submenu={subMenu} icon={icon} />
              {subMenu.length > 0 && (
                <div className="dropdown-menu">
                  <ul className="submenu">
                    {subMenu.map((item, index) => (
                      <li
                        key={index + item}
                        className="submenu-item"
                        data-name={name}
                      >
                        <NavLink
                          key={index}
                          to={`tv-series/${item
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {item}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

interface NavTitleProps {
  link: string;
  name: string;
  submenu: string[];
  icon: React.ReactNode;
}

const NavTitle: React.FC<NavTitleProps> = ({ link, name, icon }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? " nav-item" : "nav-item")}
    >
      {name} <span>{icon}</span>
    </NavLink>
  );
};

export default HeaderSub;
