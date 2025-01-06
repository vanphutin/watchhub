import React, { useContext } from "react";
import "./_headerSub.scss";
import { data, NavLink, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { MenuContext } from "../../../context/menuToggle/MenuContext";

const MENU_SUB_ARRAY_LIST: {
  [key: string]: {
    name: string;
    link: string;
    subMenu: string[];
    icon?: React.ReactNode;
  };
} = {
  home: { name: "Home", link: "/", subMenu: [] },
  singleMovies: { name: "Single movies", link: "/single-movies", subMenu: [] },
  TVSeries: {
    name: "TV Series",
    link: "#",
    subMenu: [
      "Action",
      "Comedy",
      "Horror",
      "Romance",
      "Science Fiction",
      "Adventure",
      "Animation",
      "War",
      "Drama",
      "Crime",
      "Musical",
      "Documentary",
      "Fantasy",
      "Family",
    ],
    icon: <MdArrowDropDown />,
  },
  movieGenres: { name: "Movie genres", link: "/movie-genres", subMenu: [] },
  blog: { name: "Blog", link: "/blog", subMenu: [] },
  about: { name: "About", link: "/about", subMenu: [] },
};

const HeaderSub = () => {
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
