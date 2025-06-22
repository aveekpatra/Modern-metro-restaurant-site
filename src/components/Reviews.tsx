import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function Reviews() {
  const { t } = useTranslation();

  const reviews = t("reviews.testimonials", { returnObjects: true }) as Array<{
    text: string;
    author: string;
    rating: number;
  }>;

  return (
    <motion.section
      className="py-20 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("reviews.subtitle")}
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight font-['Playfair_Display']"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("reviews.title")}
          </motion.h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className={`p-8 bg-black/50 border-white/20 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index < reviews.length - 2 ? "border-b" : ""} ${
                  index === reviews.length - 1 && reviews.length % 2 === 1
                    ? "md:col-span-2 md:border-r-0"
                    : ""
                }`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Review Text */}
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-8 font-light"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  "{review.text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-medium text-lg">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.author}</p>
                    <p className="text-gray-400 text-sm">
                      {t("reviews.verifiedCustomer")}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("reviews.readMore")}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Reviews;
