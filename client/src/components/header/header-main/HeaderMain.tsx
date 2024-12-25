import React from "react";
import Logo from "../../common/logo/Logo";
import Button from "../../common/button/Button";
import "./_headerMain.scss";
import HeaderStatus from "../header-status/HeaderStatus";
import HeaderSearch from "../header-search/HeaderSearch";
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
    <div className="header header-main   navbar navbar-expand-lg ">
      <div className="container  d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <Logo logoName={logoName} />
        </div>
        <HeaderSearch />
        <HeaderStatus
          isVip={is_vip === 0 ? false : true}
          isLoggedIn={isLoggedIn}
          username={username}
        />
      </div>
    </div>
  );
};

export default HeaderMain;
