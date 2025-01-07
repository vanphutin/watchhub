import React, { useContext } from "react";
import "./_optionLang.scss";
import { LanguageContext } from "../../context/languageContext/LanguageContext";
const OptionLang = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switchLanguage(e.target.value);
  };
  return (
    <>
      <select name="selectedLang" value={language} onChange={handleChangeLang}>
        <option value="eng">English</option>
        <option value="vi">Việt Nam</option>
      </select>
    </>
  );
};

export default OptionLang;
