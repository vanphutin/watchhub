import React from "react";
import Button from "../../common/button/Button";
import { useTranslation } from "react-i18next";

const HeaderSearch: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="header-search d-flex">
      <input type="text" name="search" id="search" />
      <Button text={t("common.search")} />
    </div>
  );
};
export default HeaderSearch;
