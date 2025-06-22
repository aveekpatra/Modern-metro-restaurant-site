import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Metro Grid Background - 3 Rows Touching Each Other */}
      <div className="absolute inset-0">
        {/* Top Row - Scrolling Left */}
        <motion.div
          className="absolute top-0 left-0 h-1/3 flex flex-row"
          style={{ width: "300vw" }}
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of images */}
          <div className="w-80 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09587.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09516-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09553.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-full flex-shrink-0 border border-white">
            <img
              src="/bar/JHK09542.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-88 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09597.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-76 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09509-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09579.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-68 h-full flex-shrink-0 border border-white">
            <img
              src="/bar/JHK09513-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="w-80 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09587.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09516-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09553.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-full flex-shrink-0 border border-white">
            <img
              src="/bar/JHK09542.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-88 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09597.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-76 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09509-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09579.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-68 h-full flex-shrink-0 border border-white">
            <img
              src="/bar/JHK09513-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Middle Row - Scrolling Right (Opposite Direction) */}
        <motion.div
          className="absolute top-1/3 left-0 h-1/3 flex flex-row border-t border-b border-white/10"
          style={{ width: "300vw" }}
          animate={{ x: ["-33.333%", 0] }}
          transition={{
            duration: 110,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of images */}
          <div className="w-76 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09567.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09605.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-92 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09573.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-68 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09400.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-88 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09580.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-full flex-shrink-0 border border-white">
            <img
              src="/bar/JHK09445-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border border-white">
            <img
              src="/dishes/JHK09591.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border border-white">
            <img
              src="/drinks/JHK09520-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="w-76 h-full flex-shrink-0 border-r border-white">
            <img
              src="/dishes/JHK09567.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border-r border-white">
            <img
              src="/drinks/JHK09605.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-92 h-full flex-shrink-0 border-r border-white">
            <img
              src="/dishes/JHK09573.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-68 h-full flex-shrink-0 border-r border-white">
            <img
              src="/drinks/JHK09400.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-88 h-full flex-shrink-0 border-r border-white">
            <img
              src="/dishes/JHK09580.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-full flex-shrink-0 border-r border-white">
            <img
              src="/bar/JHK09445-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09591.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/drinks/JHK09520-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bottom Row - Scrolling Left */}
        <motion.div
          className="absolute bottom-0 left-0 h-1/3 flex flex-row"
          style={{ width: "300vw" }}
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            duration: 130,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* First set of images */}
          <div className="w-88 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09557.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/drinks/JHK09504-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09551.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09437.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/bar/JHK09542.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09580.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-76 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/drinks/JHK09516-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-92 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09573.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="w-88 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09557.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-72 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/drinks/JHK09504-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-96 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09551.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09437.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/bar/JHK09542.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-84 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09580.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-76 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/drinks/JHK09516-Enhanced-NR.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-92 h-full flex-shrink-0 border-r border-white/10">
            <img
              src="/dishes/JHK09573.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Main Content - Centered Hero Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Unified Diffused Background for All Hero Text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 1200px 800px at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 60%, transparent 80%)",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 leading-tight tracking-[0.2em] text-white relative z-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("hero.authentic")}
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-[0.1em] text-white relative z-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 2px 25px rgba(0,0,0,0.8)",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("hero.restaurantName")}
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-200 mb-12 max-w-xl leading-relaxed font-light relative z-10"
          style={{
            textShadow: "0 1px 15px rgba(0,0,0,0.7)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-sm font-medium tracking-[0.1em] transition-all duration-300 rounded-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.bookTable")}
          </motion.button>

          <motion.button
            className="border border-white text-white px-10 py-4 text-sm font-medium tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 rounded-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("hero.viewMenu")}
          </motion.button>
        </motion.div>
      </div>

      {/* Operating Hours & Location - Minimal Bottom Info */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        {/* Operating Hours */}
        <div className="text-white">
          <p className="text-xs font-light tracking-wide mb-1 text-gray-300">
            {t("hero.hours.weekdays")}
          </p>
          <p className="text-sm font-medium tracking-[0.1em]">
            {t("hero.hours.weekdaysTime")}
          </p>
        </div>

        {/* Extended Hours */}
        <div className="text-white">
          <p className="text-xs font-light tracking-wide mb-1 text-gray-300">
            {t("hero.hours.weekends")}
          </p>
          <p className="text-sm font-medium tracking-[0.1em]">
            {t("hero.hours.weekendsTime")}
          </p>
        </div>

        {/* Location */}
        <div className="text-white">
          <p className="text-xs font-light tracking-wide mb-1 text-gray-300">
            {t("hero.location.address")}
          </p>
          <p className="text-sm font-medium tracking-[0.1em]">
            {t("hero.location.region")}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
