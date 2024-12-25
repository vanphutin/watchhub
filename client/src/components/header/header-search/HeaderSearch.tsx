import React from "react";
import Button from "../../common/button/Button";

const HeaderSearch: React.FC = () => (
  <div className="header-search d-flex">
    <input type="text" name="search" id="search" />
    <Button text="Search" />
  </div>
);
export default HeaderSearch;
