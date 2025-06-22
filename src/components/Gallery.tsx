import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface GalleryProps {
  images?: string[];
  showViewAllButton?: boolean;
}

function Gallery({
  images = [
    "/dishes/JHK09587.jpg",
    "/dishes/JHK09580.jpg",
    "/dishes/JHK09573.jpg",
    "/dishes/JHK09591.jpg",
    "/dishes/JHK09597.jpg",
    "/dishes/JHK09567.jpg",
  ],
  showViewAllButton = true,
}: GalleryProps) {
  const { t } = useTranslation();
  return (
    <motion.section
      className="py-16 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("gallery.subtitle")}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("gallery.title")}
          </motion.h2>
        </div>

        {/* Simple Grid Layout - 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-0 border border-white/20">
          {images.slice(0, 6).map((imageSrc, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden border-r border-b border-white/20 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(3)]:border-r-0 [&:nth-child(4)]:border-b-0 md:[&:nth-child(4)]:border-b [&:nth-child(5)]:border-b-0 md:[&:nth-child(5)]:border-b [&:nth-child(6)]:border-b-0"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square">
                <img
                  src={imageSrc}
                  alt="Gallery image"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        {showViewAllButton && (
          <div className="text-center mt-12">
            <motion.button
              className="text-white font-medium text-lg tracking-wide hover:text-gray-300 transition-colors duration-300 font-sans"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {t("gallery.viewFullGallery")}
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default Gallery;
