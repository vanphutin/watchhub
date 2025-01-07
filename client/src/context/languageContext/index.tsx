import React, { useEffect, useState } from "react";
import { defaultLanguage, LanguageContext } from "./LanguageContext";
import i18n from "../../i18n";

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language); // Lưu vào localStorage
  }, [language]);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
