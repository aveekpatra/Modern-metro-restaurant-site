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
    <>
      {/* Navigation Bar */}
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
                <div className="font-sans hidden md:block">
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

            {/* Right Side - Book Table, Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Book Table Button - Desktop Only */}
              <motion.a
                href="tel:+420732878238"
                className="hidden md:block px-4 py-2 bg-red-700 text-white font-bold text-xs uppercase tracking-[0.1em] hover:bg-red-800 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {t("hero.bookTable")}
              </motion.a>

              <LanguageSwitcher />

              {/* Mobile Menu Button */}
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
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
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
      </motion.nav>

      {/* Mobile Menu Overlay - Outside Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/80 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu Content */}
            <motion.div
              className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-black z-[70] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-6 py-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          block font-sans font-medium text-xl uppercase tracking-wide transition-all duration-300 py-4 px-6 border-l-4
                          ${
                            isActiveLink(item.href)
                              ? "text-white bg-red-700/30 border-red-700"
                              : "text-gray-300 hover:text-white hover:bg-white/10 border-transparent hover:border-red-700"
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
                  className="mt-12 space-y-4 px-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <motion.a
                    href="tel:+420732878238"
                    className="w-full bg-red-700 text-white py-4 px-6 font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-red-800 block text-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {t("hero.bookTable")}
                  </motion.a>
                  <motion.a
                    href="mailto:ublanickychrytiru@seznam.cz"
                    className="w-full border-2 border-white/30 text-white py-4 px-6 font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50 block text-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {t("contact.email.title")}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
