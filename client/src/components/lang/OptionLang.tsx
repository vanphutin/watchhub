import React from "react";
import "./_optionLang.scss";
const OptionLang = () => {
  return (
    <div>
      <select name="selectedLang">
        <option value="eng">English</option>
        <option value="vi">Việt Nam</option>
      </select>
    </div>
  );
};

export default OptionLang;
