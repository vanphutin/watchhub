import React from "react";
import Logo from "../components/common/logo/Logo";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useDeviceType from "../hooks/useDeviceType";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const size = useDeviceType();
  console.log("size", size);
  const sections = t("footer.sections", { returnObjects: true });

  return (
    <footer
      style={{
        backgroundColor: "#12171b",
        color: "#ffffff",
        padding: "5px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={
          size === "mobile"
            ? undefined // Return undefined for mobile, so no styles will be applied
            : { display: "flex", justifyContent: "space-between" }
        }
        className="mt-5 container align-items-center"
      >
        {/* Logo và mô tả */}
        <div style={{ maxWidth: "300px" }}>
          <Logo logoName={t("footer.logo")} />
          <hr />
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            {t("footer.description")}
          </p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            {t("footer.contact")}
          </p>
        </div>

        {/* Danh sách các phần */}
        <div
          style={
            size === "mobile" ? undefined : { display: "flex", gap: "40px" }
          }
        >
          {Object.keys(sections).map((key) => (
            <FooterSection
              key={key}
              title={sections[key].title}
              items={sections[key].items}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          fontSize: "14px",
          lineHeight: "1.8",
        }}
      >
        {items.map((item, index) => (
          <FooterLink key={index} name={item} />
        ))}
      </ul>
    </div>
  );
};

interface FooterLinkProps {
  name: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ name }) => {
  return (
    <li>
      <Link to="#" style={{ color: "#ffffff", textDecoration: "none" }}>
        {name}
      </Link>
    </li>
  );
};

export default Footer;
