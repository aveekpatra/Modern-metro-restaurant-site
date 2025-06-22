import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function CTASection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="py-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans">
          {t("cta.title")}
          <br />
          <span className="text-red-600">{t("cta.titleHighlight")}</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <motion.button
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 text-lg font-bold transition-all duration-300 inline-flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("cta.button")}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default CTASection;
