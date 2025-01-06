import React from "react";
import OptionLang from "../../lang/OptionLang";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import HeaderUser from "../header-user/HeaderUser";
import "./_headerStatus.scss";
const HeaderStatus: React.FC<{
  isVip?: boolean;
  username?: string;
  isLoggedIn?: boolean;
}> = ({ isVip, username, isLoggedIn }) => {
  return (
    <div className="header-account d-flex ">
      <span className="header-lang px-4" style={{ margin: "auto" }}>
        <OptionLang />
      </span>
      {isLoggedIn ? (
        <>
          <div className="header-status  px-3" style={{ margin: "auto" }}>
            {isVip ? (
              <span className="premium">Premium</span>
            ) : (
              <span className="upgrade">Upgrade</span>
            )}
          </div>

          <span className="header-username" style={{ margin: "auto" }}>
            <HeaderUser username={username} />
          </span>
        </>
      ) : (
        <>
          <Link to="/login">
            <Button text="Login" className="btn btn-outline-light mx-3" />
          </Link>
          <Link to="/register">
            <Button text="Register" className="btn btn-outline-primary" />
          </Link>
        </>
      )}
    </div>
  );
};
export default HeaderStatus;
