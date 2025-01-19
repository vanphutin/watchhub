import React from "react";
import "./_headerIntro.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderIntro = () => {
  const { t } = useTranslation();
  return (
    <div className="header-intro container ">
      <h1 className="section-title-home">
        {t("header.notification.notifyOne")}
        <Link to="https://vpt-quiz-app.netlify.app/">
          <span>https://vpt-quiz-app.netlify.app/</span>{" "}
        </Link>
        {t("header.notification.notifyTwo")}
      </h1>
    </div>
  );
};

export default HeaderIntro;
