import React from "react";
import "./_logo.scss";
import { Link } from "react-router-dom";
interface LogoProps {
  logoName: string;
}

const Logo: React.FC<LogoProps> = ({ logoName }) => {
  return (
    <div className="logo">
      <Link to="/">
        <p className="logo-main mb-0">{logoName}</p>
        <span className="logo-sub">
          {logoName.toLowerCase()} -{" "}
          <span className="c">{logoName.toLowerCase()}.movie</span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
