import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  image?: string;
  imageAlt?: string;
}

function AboutSection({
  image = "/JHK09447.jpg",
  imageAlt = "Chef preparing traditional Czech cuisine",
}: AboutSectionProps) {
  const { t } = useTranslation();

  const title = t("about.title");
  const subtitle = t("about.subtitle");
  const description = t("about.description", {
    returnObjects: true,
  }) as string[];
  return (
    <motion.section
      className="py-20 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Subtitle */}
            <motion.p
              className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>

            {/* Main Title */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight font-sans"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-300 text-base md:text-lg leading-relaxed font-light max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
