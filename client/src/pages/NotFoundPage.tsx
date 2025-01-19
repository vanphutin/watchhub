import { useTranslation } from "react-i18next";
import "../assets/style/pages/_notFoundPage.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>{t("common.notfound")}</p>
      <Link to="/" className="home-link">
        {t("common.return")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
