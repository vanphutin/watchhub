import React from "react";
import { useTranslation } from "react-i18next";
import "./_seeMore.scss";

interface SeeMoreProps {
  onClick?: () => void;
}
const SeeMore: React.FC<SeeMoreProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="see-more" onClick={onClick}>
      <p className="text">{t("common.view")}</p>
    </div>
  );
};

export default SeeMore;
