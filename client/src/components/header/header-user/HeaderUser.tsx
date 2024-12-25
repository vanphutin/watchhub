import React from "react";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../redux/actions-creator";
import { Link } from "react-router-dom";

const HeaderUser: React.FC<{ username: string | undefined }> = ({
  username,
}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogOut());
  };

  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {username}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderUser;
