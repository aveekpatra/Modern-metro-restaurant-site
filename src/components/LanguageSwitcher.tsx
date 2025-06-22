import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Square } from "lucide-react";

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

    // Animate language change
    i18n.changeLanguage(langCode);
    navigate(newPath);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "cs" ? "en" : "cs";
    switchLanguage(newLang);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop Version - Full Switcher */}
      <div className="hidden sm:flex items-center bg-black/50 backdrop-blur-sm border border-white/20">
        {languages.map((lang, index) => (
          <motion.button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`
              relative px-4 py-2 font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 flex items-center gap-2
              ${
                currentLang === lang.code
                  ? "bg-red-700 text-white"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Geometric indicator for active language */}
            {currentLang === lang.code && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-white"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                layoutId="activeLanguageIndicator"
              />
            )}

            <motion.div
              animate={{
                scale: currentLang === lang.code ? 1.1 : 1,
                rotate: currentLang === lang.code ? 360 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Square className="w-3 h-3 fill-current" />
            </motion.div>
            <motion.span
              animate={{
                y: currentLang === lang.code ? -1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {lang.label}
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Mobile Version - Single Toggle Button */}
      <motion.button
        onClick={toggleLanguage}
        className="sm:hidden relative px-3 py-2 font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          key={currentLang}
        >
          <Square className="w-3 h-3 fill-current" />
        </motion.div>
        <span>{currentLanguage?.label}</span>
      </motion.button>
    </motion.div>
  );
}

export default LanguageSwitcher;
