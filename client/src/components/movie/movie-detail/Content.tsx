import React, { useRef, useState } from "react";
import "./_content.scss";
import { useTranslation } from "react-i18next";

const Content: React.FC<{ content: string }> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const ref = useRef<HTMLParagraphElement>(null);
  const handleHiddenContent = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      <h2 className="content-heading">{t("movie.moviecontent")}</h2>
      <hr />
      <p className={`content ${isExpanded ? "expanded" : ""}`} ref={ref}>
        {content}
      </p>

      <span className="compact" onClick={handleHiddenContent}>
        {isExpanded ? t("common.collapse") + "..." : t("common.view") + "..."}
      </span>
    </>
  );
};

export default Content;
