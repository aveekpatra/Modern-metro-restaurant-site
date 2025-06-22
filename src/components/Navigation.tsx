import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const basePath = currentLang === "en" ? "/en" : "";

  const navItems = [
    {
      key: "home",
      href: basePath === "/en" ? "/en" : "/",
      label: t("nav.home"),
    },
    { key: "menu", href: `${basePath}/menu`, label: t("nav.menu") },
    { key: "gallery", href: `${basePath}/gallery`, label: t("nav.gallery") },
    { key: "contact", href: `${basePath}/contact`, label: t("nav.contact") },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" || href === "/en") {
      return location.pathname === href;
    }
    return location.pathname === href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Knight Logo with Restaurant Name */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={basePath === "/en" ? "/en" : "/"}
              className="flex items-center space-x-3 group"
            >
              <motion.div
                className="w-10 h-10 flex-shrink-0"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo/logo-primary.png"
                  alt="U Blanických rytířů"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </motion.div>
              <div className="font-sans">
                <div className="text-lg font-bold text-white uppercase tracking-wide leading-none">
                  {t("nav.restaurantName")}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu - Clean Metro */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className={`
                    relative font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300
                    ${
                      isActiveLink(item.href)
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActiveLink(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-px bg-red-700"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button - Metro Style */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden w-8 h-8 bg-red-700 text-white font-bold flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Clean Metro Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        block font-sans font-medium text-xl uppercase tracking-wide transition-all duration-300 py-3
                        ${
                          isActiveLink(item.href)
                            ? "text-white border-l-2 border-red-700 pl-4"
                            : "text-gray-400 hover:text-white hover:border-l-2 hover:border-red-700 hover:pl-4"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                className="mt-12 space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.a
                  href="tel:+420732878238"
                  className="w-full bg-red-700 text-white py-3 px-6 font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-red-800 block text-center"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {t("hero.bookTable")}
                </motion.a>
                <motion.a
                  href="mailto:ublanickychrytiru@seznam.cz"
                  className="w-full border border-white/20 text-white py-3 px-6 font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white/10 block text-center"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {t("contact.email.title")}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;
