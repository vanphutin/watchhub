import { createContext } from "react";

interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => void;
}

export const defaultLanguage = localStorage.getItem("language") || "en";

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  switchLanguage: () => {},
});
