import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface LanguageRouterProps {
  children: React.ReactNode;
}

function LanguageRouter({ children }: LanguageRouterProps) {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    // Check if the path starts with /en
    if (currentPath.startsWith("/en")) {
      // Set language to English if not already set
      if (i18n.language !== "en") {
        i18n.changeLanguage("en");
      }
    } else {
      // Set language to Czech for all other paths
      if (i18n.language !== "cs") {
        i18n.changeLanguage("cs");
      }
    }
  }, [location.pathname, i18n]);

  return <>{children}</>;
}

export default LanguageRouter;
