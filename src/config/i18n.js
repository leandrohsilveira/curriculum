import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

const configure = () => {
  return i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(reactI18nextModule) // if not using I18nextProvider
    .init({
      detection: {
        order: [
          "querystring",
          "path",
          "cookie",
          "localStorage",
          "navigator",
          "htmlTag",
          "subdomain"
        ]
      },
      lowerCaseLng: true,
      debug: true,

      // react i18next special options (optional)
      react: {
        wait: true
      }
    });
};

export default configure;
