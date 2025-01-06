import React from "react";
import Logo from "../../common/logo/Logo";
import "./_headerMain.scss";
import HeaderStatus from "../header-status/HeaderStatus";
import HeaderSearch from "../header-search/HeaderSearch";
import { IoMdMenu } from "react-icons/io";

// trong header main này sẽ có login - ô tìm kiếm - trạng thái premium - login/register || usrrname/logout

interface HeaderMainProps {
  logoName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  is_vip?: number;
  username?: string;
  isLoggedIn?: boolean;
}

const HeaderMain: React.FC<HeaderMainProps> = ({
  logoName,
  onChange,
  isLoggedIn,
  is_vip,
  username,
}) => {
  return (
    <div className="header header-main navbar navbar-expand-lg ">
      <div className="container header-main-items">
        <div className="header-logo">
          <Logo logoName={logoName} />
        </div>
        <div className=" d-none d-lg-block">
          <div className="d-flex align-items-center justify-content-between">
            <HeaderSearch />
            <HeaderStatus
              isVip={is_vip === 0 ? false : true}
              isLoggedIn={isLoggedIn}
              username={username}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
