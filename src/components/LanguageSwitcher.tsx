import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: "cs", label: "CZ", flag: "🇨🇿" },
    { code: "en", label: "EN", flag: "🇬🇧" },
  ];

  const currentLang = i18n.language;

  const switchLanguage = (langCode: string) => {
    const currentPath = location.pathname;
    let newPath = "";

    if (langCode === "en") {
      // Switch to English
      if (currentPath.startsWith("/en")) {
        newPath = currentPath; // Already on English route
      } else if (currentPath === "/") {
        newPath = "/en";
      } else {
        newPath = `/en${currentPath}`;
      }
    } else {
      // Switch to Czech
      if (currentPath.startsWith("/en")) {
        newPath = currentPath.replace("/en", "") || "/";
      } else {
        newPath = currentPath; // Already on Czech route
      }
    }

    i18n.changeLanguage(langCode);
    navigate(newPath);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "cs" ? "en" : "cs";
    switchLanguage(newLang);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 font-bold text-xs uppercase tracking-[0.1em] bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
    >
      {currentLanguage?.label}
    </button>
  );
}

export default LanguageSwitcher;
