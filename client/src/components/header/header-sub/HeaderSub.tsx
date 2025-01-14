import React, { useContext } from "react";
import "./_headerSub.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { MenuContext } from "../../../context/menuToggle/MenuContext";
import { useTranslation } from "react-i18next";
import { getMoviesByCategory } from "../../../services/apiMovie";

const HeaderSub = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Lấy thông tin về URL hiện tại
  const navigate = useNavigate(); // Dùng để điều hướng

  const MENU_SUB_ARRAY_LIST: {
    [key: string]: {
      name: string;
      link: string;
      subMenu: string[];
      icon?: React.ReactNode;
      href?: string;
    };
  } = {
    home: { name: t("header.menu.home"), link: "/", subMenu: [] },
    singleMovies: {
      name: t("header.menu.singleMovies"),
      link: "/single-movies",
      subMenu: [],
      href: "#single-section",
    },
    TVSeries: {
      name: t("header.menu.tvSeries"),
      link: "/tv-series",
      subMenu: [],
      href: "#tvseries-section",
    },
    TVShows: {
      name: t("header.menu.tvshows"),
      link: "/tv-shows",
      subMenu: [],
      href: "#tvshows-section",
    },
    movieGenres: {
      name: t("header.menu.movieGenres"),
      link: "#",
      subMenu: [
        "hanh-dong",
        "bi-an",
        "hai-huoc",
        "tinh-cam",
        "vien-tuong",
        "khoa-hoc",
        "tre-em",
        "chinh-kich",
        "co-trang",
        "hinh-su",
        "vo-thuat",
        "gia-dinh",
        "am-nhac",
        "kinh-di",
      ],
      href: "",
      icon: <MdArrowDropDown />,
    },
    blog: {
      name: t("header.menu.blog"),
      link: "/blog",
      subMenu: [],
      href: "#blog-section",
    },
    about: {
      name: t("header.menu.about"),
      link: "/about",
      subMenu: [],
    },
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

  const handleLinkClick = (href: string) => {
    // Kiểm tra xem hiện tại có đang ở trang Home hay không
    if (location.pathname !== "/") {
      // Nếu không phải trang Home, điều hướng về Home
      navigate("/", { replace: true });
      // Sau khi điều hướng về Home, thêm phần hash vào URL
      setTimeout(() => {
        window.location.hash = href; // Sau khi vào trang Home, cuộn đến phần mục tiêu
      }, 0);
    } else {
      // Nếu đang ở trang Home, chỉ cần cuộn đến phần mục tiêu
      window.location.hash = href;
    }
  };
  const handleGetMoviesByCategory = async (item: string) => {
    console.log("sulg", item);
    const res = await getMoviesByCategory(item);
    console.log(res);
  };
  return (
    <div className="header header-sub">
      <div className="container menu gap-3">
        {Object.entries(MENU_SUB_ARRAY_LIST).map(
          ([key, { name, link, subMenu, icon, href }]) => (
            <div
              key={key}
              className="menu-item"
              data-name={name}
              onClick={handleClick}
            >
              <NavTitle
                link={href || link}
                name={name}
                submenu={subMenu}
                icon={icon}
                onClick={() => href && handleLinkClick(href)} // Gọi handleLinkClick khi nhấn vào
              />
              {subMenu.length > 0 && (
                <div className="dropdown-menu">
                  <ul className="submenu">
                    {subMenu.map((item, index) => (
                      <li
                        key={index + item}
                        className="submenu-item"
                        data-name={name}
                        onClick={() => handleGetMoviesByCategory(item)}
                      >
                        <NavLink key={index} to={`movie-genres/${item}`}>
                          {t(`header.menu.subMenu.${item}`)}
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
  onClick: () => void; // Thêm sự kiện onClick
}

const NavTitle: React.FC<NavTitleProps> = ({ link, name, icon, onClick }) => {
  return (
    <NavLink
      to={link}
      onClick={onClick}
      className={({ isActive }) => (isActive ? " nav-item" : "nav-item")}
    >
      {name} <span>{icon}</span>
    </NavLink>
  );
};

export default HeaderSub;
