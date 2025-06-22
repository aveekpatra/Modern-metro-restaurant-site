import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Wine, Users } from "lucide-react";

function ContactSection() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      content: t("contact.phone.number"),
      subtitle: t("contact.phone.subtitle"),
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      content: t("contact.email.address"),
      subtitle: t("contact.email.subtitle"),
    },
    {
      icon: MapPin,
      title: t("contact.location.title"),
      content: t("contact.location.address"),
      subtitle: t("contact.location.subtitle"),
    },
  ];

  const hours = t("contact.hours", { returnObjects: true }) as Array<{
    days: string;
    time: string;
  }>;

  const features = t("contact.features", { returnObjects: true }) as Array<{
    icon: string;
    text: string;
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
            {t("contact.subtitle")}
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight font-['Playfair_Display']"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("contact.title")}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="border border-white/10 p-6 bg-black/50 hover:bg-white/5 transition-all duration-300"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-base mb-1">
                          {item.content}
                        </p>
                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Operating Hours */}
            <motion.div
              className="border border-white/10 p-6 bg-black/50"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg mb-4">
                    {t("contact.hoursTitle")}
                  </h3>
                  <div className="space-y-2">
                    {hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-300">{schedule.days}</span>
                        <span className="text-gray-400">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features & Additional Info */}
          <motion.div
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Restaurant Features */}
            <motion.div
              className="border border-white/10 p-8 bg-black/50"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-medium text-xl mb-6 font-['Playfair_Display']">
                {t("contact.featuresTitle")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                      {feature.icon === "wine" && (
                        <Wine className="w-4 h-4 text-white" />
                      )}
                      {feature.icon === "users" && (
                        <Users className="w-4 h-4 text-white" />
                      )}
                      {feature.icon === "mapPin" && (
                        <MapPin className="w-4 h-4 text-white" />
                      )}
                      {feature.icon === "clock" && (
                        <Clock className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-300 text-sm">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reservation CTA */}
            <motion.div
              className="border border-white/10 p-8 bg-black/50 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-medium text-xl mb-4 font-['Playfair_Display']">
                {t("contact.reservation.title")}
              </h3>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {t("contact.reservation.description")}
              </p>
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="tel:+420732878238"
                  className="inline-block px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contact.reservation.callButton")}
                </motion.a>
                <div className="text-gray-400 text-sm">
                  {t("contact.reservation.or")}
                </div>
                <motion.a
                  href="mailto:ublanickychrytiru@seznam.cz"
                  className="inline-block px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.2em] font-light hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contact.reservation.emailButton")}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Location Note */}
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("contact.locationNote")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
