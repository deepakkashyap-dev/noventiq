import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { supportedLngs } from "./langList.ts";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: supportedLngs.map((i) => i.value),
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.changeLanguage()
export default i18n;
