import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Wine,
  Clock,
  Award,
  Code,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/ublanickychrytiru",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/ublanickychrytiru",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/ublanickychrytiru",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.menu", href: "/menu" },
    { key: "nav.about", href: "/about" },
    { key: "nav.contact", href: "/contact" },
  ];

  const highlights = [
    {
      icon: Award,
      text: t("footer.highlights.grandRestaurant"),
    },
    {
      icon: Wine,
      text: t("footer.highlights.ownVineyards"),
    },
    {
      icon: Clock,
      text: t("footer.highlights.tradition"),
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Restaurant Info - Left Side */}
          <motion.div
            className="space-y-8 lg:border-r lg:border-white/10 lg:pr-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Logo/Name */}
            <div className="border-b border-white/10 pb-6">
              <motion.h3
                className="text-2xl md:text-3xl font-light text-white mb-2 font-['Playfair_Display']"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t("nav.restaurantName")}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-sm leading-relaxed max-w-md"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t("footer.description")}
              </motion.p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{t("contact.location.address")}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{t("contact.phone.number")}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{t("contact.email.address")}</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Navigation & Highlights - Right Side */}
          <motion.div
            className="space-y-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Quick Navigation */}
            <div>
              <motion.h4
                className="text-white font-medium text-lg mb-4 font-['Playfair_Display']"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t("footer.navigation")}
              </motion.h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-300 py-1"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {t(link.key)}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Restaurant Highlights */}
            <div>
              <motion.h4
                className="text-white font-medium text-lg mb-4 font-['Playfair_Display']"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t("footer.highlightsTitle")}
              </motion.h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300 text-sm">
                        {highlight.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <motion.h4
                className="text-white font-medium text-lg mb-4 font-['Playfair_Display']"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {t("contact.hoursTitle")}
              </motion.h4>
              <motion.div
                className="space-y-1"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {t("hero.hours.weekdays")}
                  </span>
                  <span className="text-gray-400">
                    {t("hero.hours.weekdaysTime")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {t("hero.hours.weekends")}
                  </span>
                  <span className="text-gray-400">
                    {t("hero.hours.weekendsTime")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-white/10 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 {t("nav.restaurantName")}. {t("footer.copyright")}
            </motion.p>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {t("footer.terms")}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Developer Credit */}
      <motion.div
        className="border-t border-white/5 bg-zinc-950 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-2 text-gray-500 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Code className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors duration-300" />
              <span className="text-xs font-light">
                {t("footer.credit.designedBy")}
              </span>
            </motion.div>
            <motion.a
              href="https://aveekpatra.info"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 border-b border-transparent hover:border-white/50 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={t("footer.credit.visitPortfolio")}
            >
              <span>Aveek Patra</span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
