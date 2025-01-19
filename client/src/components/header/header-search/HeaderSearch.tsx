import React, { useState } from "react";
import Button from "../../common/button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeaderSearch: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Dùng để điều hướng
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="header-search d-flex">
      <input type="text" name="search" id="search" onChange={handleChange} />
      <Button
        text={t("common.search")}
        onClick={() => navigate(`/tim-kiem?keyword=${value}`)}
        disabled={!value}
      />
    </div>
  );
};
export default HeaderSearch;
