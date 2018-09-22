import i18n from "i18next";
// import Backend from 'i18next-chained-backend';
// import LocalStorageBackend from 'i18next-localstorage-backend';
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

const configure = () => {
  return (
    i18n
      // .use(Backend)
      .use(XHR)
      .use(LanguageDetector)
      .use(reactI18nextModule) // if not using I18nextProvider
      .init({
        // backend: {
        //   backends: [
        //     LocalStorageBackend,  // primary
        //     XHR                   // fallback
        //   ],
        // },
        detection: {
          order: [
            "querystring",
            "path",
            "subdomain",
            "navigator",
            "cookie",
            "localStorage",
            "htmlTag"
          ]
        },
        fallbackLng: "en",
        lowerCaseLng: true,
        debug: true,

        // react i18next special options (optional)
        react: {
          wait: true
        },
        cache: {}
      })
  );
};

export default configure;
