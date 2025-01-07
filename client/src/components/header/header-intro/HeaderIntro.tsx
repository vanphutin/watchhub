import React from "react";
import "./_headerIntro.scss";
import { useTranslation } from "react-i18next";

const HeaderIntro = () => {
  const { t } = useTranslation();
  return (
    <div className="header-intro container ">
      <h1 className="section-title-home">
        {t("header.notification.notifyOne")}{" "}
        <span>https://vpt-quiz-app.netlify.app/</span>{" "}
        {t("header.notification.notifyTwo")}
      </h1>
    </div>
  );
};

export default HeaderIntro;
